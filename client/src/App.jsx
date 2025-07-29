import "./App.css";
import { Footer, Header } from "./components/export.js";
import { Outlet } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import { handleApiError } from "./utils/handleApiError.js";
import { fetchUserDetails } from "./utils/fetchUserDetails.js";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice.js";
import { useEffect } from "react";
import { Axios } from "./utils/axios.js";
import { summaryApi } from "./common/summaryApi.js";
import { setAllBrands, setAllCategories, setAllFeatures, setProducts } from "./redux/productSlice.js";


function App() {
  const dispatch = useDispatch()
  // fetch user details
  const fetchUser = async () => {
    try {
      const res = await fetchUserDetails();
      dispatch(setUser(res))
    } catch (error) {
      handleApiError(error)
    }
  }

  const fetchAllCategories = async () => {
    try {
      const res = await Axios({
        ...summaryApi.fetchCetegories,
      });

      if(res.data.success){
        dispatch(setAllCategories(res.data.data))
      }
     
    } catch (error) {
      handleApiError(error)
    }
  }

  const fetchAllBrands = async () => {
    try {
      const response = await Axios({
        ...summaryApi.fetchAllBrands
      })

      if(response.data.success){
        dispatch(setAllBrands(response.data.data))
      }
    } catch (error) {
      handleApiError(error)
    }
  }

  const fetchAllFeatures = async () => {
    try {
      const response = await Axios({
        ...summaryApi.fetchAllFeatures
      })

      if(response.data.success){
        dispatch(setAllFeatures(response.data.data))
      }
    } catch (error) {
      handleApiError(error)
    }
  }

  const fetchAllProducts = async () => {
    try {
      const res = await Axios({
        ...summaryApi.fetchAllProdutcs,
        data: {
          page: 1,
          limit: 10,
        },
      })

      if(res.data.success){
        dispatch(setProducts(res.data.data))
      }
    } catch (error) {
      handleApiError(error)
    }
  }

  useEffect(() => {
    fetchUser();  
    fetchAllCategories();
    fetchAllBrands();
    fetchAllFeatures();
    fetchAllProducts();
  }, [])

  return (
    <>
      <Header />
      <main className="bg-[f7fafc]">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
