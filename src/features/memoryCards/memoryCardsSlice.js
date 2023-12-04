import { createSlice } from "@reduxjs/toolkit";

// When I implement a back end, I think I will need to create a fetchAPI Thunk for building the memory card deck, or at least for fetching individual card data

const initialState = {
    flippedCards: [],
    matchedCards: [],
    // memoryCardsArray: [],
    // difficultyLevel?
    errorMessage: ''
};

const memoryCardsSlice = createSlice({
    name: 'memoryCards',
    initialState,
    reducers: {
        addFlippedCard: (state, action) => {
            const flippedCard = action.payload;
            state.flippedCards.push(flippedCard);
        },
        clearFlippedCards: (state) => {
            state.flippedCards = [];
        },
        // There will always be two matched cards being added at a time, so I may need to alter this method, depending on how I end up calling it.
        addMatchedCard: (state, action) => {
            const matchedCard = { ...action.payload };
            state.matchedCards.push(matchedCard);
        }
    }
});

export const memoryCardsReducer = memoryCardsSlice.reducer;

export const { addFlippedCard } = memoryCardsSlice.actions;
export const { clearFlippedCards } = memoryCardsSlice.actions;
export const { addMatchedCard } = memoryCardsSlice.actions;