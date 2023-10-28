import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

// When I implement a back end, I will need to create a fetchAPI Thunk for building the memory card deck, or at least for fetching individual card data

const initialState = {
    memoryCardsArray: [],
    // difficultyLevel?
    isLoading: true,
    errorMessage: ''
};

const memoryCardsSlice = createSlice({
    name: 'memoryCards',
    initialState,
    reducers: {
        shuffleMemoryCards: (state) => {
            const cardIndexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
            const shuffledCardIndexArray = cardIndexArray.sort(() => 0.5 - Math.random());
            // const easyCardIndexArray = shuffledCardIndexArray.toSpliced(6);
            const normalCardIndexArray = shuffledCardIndexArray.splice(10);
            // const hardCardIndexArray = shuffledCardIndexArray.toSpliced(15);
            // const extremeCardIndexArray = shuffledCardIndexArray.toSpliced(21);

            console.log(cardIndexArray, shuffledCardIndexArray, normalCardIndexArray);

            for (let index of normalCardIndexArray) {
                const memoryCard = state.cats.catsArray[index];
                state.memoryCardsArray.push(memoryCard);
            };

            console.log(state.memoryCardsArray);
        }
    }
});

export const { shuffleMemoryCards } = memoryCardsSlice.actions;
export const memoryCardsReducer = memoryCardsSlice.reducer;