import { configureStore } from '@reduxjs/toolkit';
import productLayoutReducer from './prodcutLayoutSlice';
import productReducer from './productSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        productLayout: productLayoutReducer,
        product: productReducer,
        user: userReducer
    },
});

export { store };