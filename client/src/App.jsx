import "./App.css";
import { Footer, Header } from "./components/export.js";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { handleApiError } from "./utils/handleApiError.js";
import { fetchUserDetails } from "./utils/fetchUserDetails.js";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/userSlice.js";
import { useEffect, useState } from "react";
import { Axios } from "./utils/axios.js";
import { summaryApi } from "./common/summaryApi.js";
import {
  limitFix,
  setAllBrands,
  setAllCategories,
  setAllFeatures,
  setFilterProducts,
  setProducts,
} from "./redux/productSlice.js";

function App() {
  const dispatch = useDispatch();
  const checkBrands = useSelector((state) => state.product.checkBrands);
  const [page, setPage] = useState(1);
  const showLimit = useSelector((state) => state.product.show);
  const showPageChange = useSelector((state) => state.product.page);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    setPage(showPageChange);
  }, [showPageChange]);


  // fetch user details
  const fetchUser = async () => {
    try {
      const res = await fetchUserDetails();
      dispatch(setUser(res));
    } catch (error) {
      handleApiError(error);
    }
  };

  // fetch all categories
  const fetchAllCategories = async () => {
    try {
      const res = await Axios({
        ...summaryApi.fetchCetegories,
      });

      if (res.data.success) {
        dispatch(setAllCategories(res.data.data));
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  // fetch all brands
  const fetchAllBrands = async () => {
    try {
      const response = await Axios({
        ...summaryApi.fetchAllBrands,
      });

      if (response.data.success) {
        dispatch(setAllBrands(response.data.data));
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  // fetch all features
  const fetchAllFeatures = async () => {
    try {
      const response = await Axios({
        ...summaryApi.fetchAllFeatures,
      });

      if (response.data.success) {
        dispatch(setAllFeatures(response.data.data));
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  // fetch all products
  const fetchAllProducts = async () => {
    try {
      const res = await Axios({
        ...summaryApi.fetchAllProdutcs,
        data: {
          page: page,
          limit: limit,
        },
      });

      if (res.data.success) {
        dispatch(setProducts(res.data.data));
        dispatch(limitFix(limit));
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  // fetch all products by brands filter
  const fetchAllProductsByFilter = async () => {
    try {
      const res = await Axios({
        ...summaryApi.fetchAllProductsFilter,
      });

      if (res.data.success) {
        dispatch(setFilterProducts(res.data.data));
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchAllCategories();
    fetchAllBrands();
    fetchAllFeatures();
    fetchAllProductsByFilter();
    fetchAllProducts();
  }, []);

  useEffect(() => {
    
    
    if (checkBrands.length > 0) {
      setLimit(100);
      fetchAllProducts();
    }

    // cleanUp function limit reset
    return () => {
      setLimit(5);
    }
  }, [checkBrands.length, limit, showLimit]);


  useEffect(() => {
    if (page > 1) {
      fetchAllProducts();   
    }
  }, [page]);



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
