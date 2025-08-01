import axios from 'axios'
import { baseUrl, summaryApi } from '../common/summaryApi'
import { handleApiError } from './handleApiError';


const Axios = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

Axios.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

Axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        let originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry || error.response.data.error === 'jwt expired') {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem('refreshToken');
           
                const newAccessToken = await refreshAccessToken(refreshToken);
                if (newAccessToken) {
                     localStorage.setItem('accessToken', newAccessToken);
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return Axios(originalRequest);
                }
            
        }
        return Promise.reject(error);
    }
)

const refreshAccessToken = async () => {
    try {
        const response = await Axios({
            ...summaryApi.refreshToken,
          withCredentials: true,
        })

        if(response.data.success){
            const accessToken = response.data.data.accessToken;
            return accessToken;
        }
        
    } catch (error) {
        console.error('Error refreshing access token:', error);
        handleApiError(error)
    }
}

export {Axios}