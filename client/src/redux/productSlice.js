import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    checkBrands: [],
    allCategories: [],
    allBrands: [],
    allFeatures: []
}

const productSlice = createSlice({
    name: 'product',
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
        }
    }
})


export const { setProducts, setCheckBrands, setAllCategories, setAllBrands, setAllFeatures } = productSlice.actions;
export default productSlice.reducer;