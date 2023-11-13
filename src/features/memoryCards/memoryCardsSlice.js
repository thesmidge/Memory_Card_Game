import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

/* It's possible that this memoryCardsSlice will go away entirely. I think I can use local state in either the GameBoard or GamePage component to create and manage my memoryCardsArray. Although, I may need some sort of global state to set and manage the difficulty level. So maybe it would be the gameSettingsSlice, or something like that. */

// When I implement a back end, I think I will need to create a fetchAPI Thunk for building the memory card deck, or at least for fetching individual card data

const initialState = {
    memoryCardsArray: [],
    // difficultyLevel?
    isLoading: true,
    errorMessage: ''
};

const memoryCardsSlice = createSlice({
    name: 'memoryCards',
    initialState,
    reducers: {}
});

export const memoryCardsReducer = memoryCardsSlice.reducer;