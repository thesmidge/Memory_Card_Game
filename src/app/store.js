import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { catsReducer } from '../features/cats/catsSlice';
import { memoryCardsReducer } from '../features/memoryCards/memoryCardsSlice';

export const store = configureStore({
    reducer: {
        cats: catsReducer,
        memoryCards: memoryCardsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});