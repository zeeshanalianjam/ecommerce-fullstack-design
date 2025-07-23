
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productLayout: 'grid',
};

const productLayoutSlice = createSlice({
    name: 'productLayout',
    initialState,
    reducers: {
        setProductLayout: (state, action) => {
            state.productLayout = action.payload;
        },
    },
});


export const { setProductLayout } = productLayoutSlice.actions;
export default productLayoutSlice.reducer;