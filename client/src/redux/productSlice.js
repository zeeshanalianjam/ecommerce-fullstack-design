import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filterProducts: [],
  checkBrands: [],
  checkFeatures: [],
  allCategories: [],
  allBrands: [],
  allFeatures: [],
  limit: 0,
  show: 0,
  page: 1,
  myCart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCheckBrands: (state, action) => {
      state.checkBrands = action.payload;
    },
    setAllCategories: (state, action) => {
      state.allCategories = action.payload;
    },
    setAllBrands: (state, action) => {
      state.allBrands = action.payload;
    },
    setAllFeatures: (state, action) => {
      state.allFeatures = action.payload;
    },
    setFilterProducts: (state, action) => {
      state.filterProducts = action.payload;
    },
    limitFix: (state, action) => {
      state.limit = action.payload;
    },
    setShowFix: (state, action) => {
      state.show = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setMyCart: (state, action) => {
      state.myCart = action.payload;
    },
    setCheckFeatures: (state, action) => {
      state.checkFeatures = action.payload;
    },
  },
});

export const {
  setProducts,
  setCheckBrands,
  setAllCategories,
  setAllBrands,
  setAllFeatures,
  setFilterProducts,
  limitFix,
  setLimitFix,
  setShowFix,
  setPage,
  setMyCart,
  setCheckFeatures,
} = productSlice.actions;
export default productSlice.reducer;
