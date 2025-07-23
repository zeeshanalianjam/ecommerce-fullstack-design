import { configureStore } from '@reduxjs/toolkit';
import productLayoutReducer from './prodcutLayoutSlice';

const store = configureStore({
    reducer: {
        productLayout: productLayoutReducer
    },
});

export { store };