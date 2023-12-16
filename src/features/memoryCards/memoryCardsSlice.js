import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';

// When I implement a back end, I think I will need to create a fetchAPI Thunk for building the memory card deck, or at least for fetching individual card data

const initialState = {
    memoryCardsArray: [],
    flippedCards: [],
    matchedCards: [],
    // difficultyLevel?
    errorMessage: ''
};

const memoryCardsSlice = createSlice({
    name: 'memoryCards',
    initialState,
    reducers: {
        shuffleMemoryCards: (state) => {
            const cardIndexArray = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
            const shuffledCardIndexArray = _.shuffle(cardIndexArray);
            const truncatedCardIndexArray = shuffledCardIndexArray.splice(0, 10);
            const duplicatedIndexArray = truncatedCardIndexArray.concat(
                truncatedCardIndexArray
            );
            state.memoryCardsArray = _.shuffle(duplicatedIndexArray);
        },
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

export const { shuffleMemoryCards, addFlippedCard, clearFlippedCards, addMatchedCard } = memoryCardsSlice.actions;