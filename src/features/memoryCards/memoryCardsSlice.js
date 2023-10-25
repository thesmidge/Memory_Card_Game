import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseCatUrl, baseDogUrl } from '../../app/shared/baseUrls';
import { fetchCatImage } from "../cats/catsSlice";

// export const fetchCat = createAsyncThunk(
//     'memoryCards/fetchCat',
//     async () => {
//         const response = await fetch(baseCatUrl + )
//     }
// )

const initialState = {
    memoryCardArray: [],
    // difficultyLevel?
    isLoading: true,
    errorMessage: ''
};

const memoryCardsSlice = createSlice({
    name: 'memoryCards',
    initialState,
    reducers: {
        shuffleMemoryCards: (state, action) => {
            const cardIndexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
            const shuffledCardIndexArray = cardIndexArray.sort(() => 0.5 - Math.random());
            // const easyCardIndexArray = shuffledCardIndexArray.toSpliced(6);
            const normalCardIndexArray = shuffledCardIndexArray.splice(10);
            // const hardCardIndexArray = shuffledCardIndexArray.toSpliced(15);
            // const extremeCardIndexArray = shuffledCardIndexArray.toSpliced(21);

            console.log(cardIndexArray, shuffledCardIndexArray, normalCardIndexArray);

            for (let index of normalCardIndexArray) {
                const memoryCard = useSelector((state) => state.cats.catImagesArray[index]);
                state.memoryCardArray.push(memoryCard);
            };
        }
    }
});

export const memoryCardsReducer = memoryCardsSlice.reducer;