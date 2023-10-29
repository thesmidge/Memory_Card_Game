import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

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
    reducers: {
        /* I have more detailed explanations above each section of the reducer below, but ultimately I am trying to
        create an array of 10 random integers between the numbers 0 and 21 that will serve as index references to select 10
        random cat images from the catImagesArray each time the game is played. I am calling this function in the
        GamePage. I know that the GamePage itself is loading properly because the words "This is the game board" show
        up on the screen when I run the code. However, this function doesn't seem to be working properly when the
        GamePage loads because 1) no cards show up on the screen, and 2) when I check the console, the memoryCardsArray is
        empty. */
        shuffleMemoryCards: (state) => {
            /* The below array will ultimately become a randomized array that will be used as index
            references to select random cat images from the catImagesArray. */
            const cardIndexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
            /* The below operation simply randomizes the order of the numbers in the above array. */
            const shuffledCardIndexArray = cardIndexArray.sort(() => 0.5 - Math.random());
            /* This next part creates a shortened array of only the first 10 numbers from the above array in order to
            select 10 random cat images each time the game is played. */
            const truncatedCardIndexArray = shuffledCardIndexArray.splice(10);
            /* This next part should be pushing 2 copies of the above array to the memoryCardsArray in order to
            have 2 copies of each cat image. */
            state.memoryCardsArray.push([...truncatedCardIndexArray, ...truncatedCardIndexArray]);
            /* This final piece is simply to randomize the order of the final card index selection so that the final
            images will be displayed in a random order on the GameBoard. */
            state.memoryCardsArray.sort(() => 0.5 - Math.random());
        }
    }
});

export const { shuffleMemoryCards } = memoryCardsSlice.actions;
export const memoryCardsReducer = memoryCardsSlice.reducer;