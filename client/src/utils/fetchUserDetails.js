import { summaryApi } from "../common/summaryApi"
import { Axios } from "./axios"
import { handleApiError } from "./handleApiError"

const fetchUserDetails = async() => {
    try {
        const response = await Axios({
            ...summaryApi.fetchUserDetails,
        })

        if (response.data.success) {
            return response.data.data;
        }
        
    } catch (error) {
        console.log(error);
    }
}

export { fetchUserDetails }