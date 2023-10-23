import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { catsReducer } from '../features/cats/catsSlice';

export const store = configureStore({
    reducer: {
        cats: catsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
