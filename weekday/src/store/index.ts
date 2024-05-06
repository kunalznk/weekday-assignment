import {  configureStore } from '@reduxjs/toolkit';
import reducer from './slices';

const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware()
    },
  })

export default store;