import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CATS } from '../../app/shared/CATS';
import { DOGS } from '../../app/shared/DOGS';
import { baseCatUrl, baseDogUrl } from '../../app/shared/baseUrls';

// const cardIndexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const selectAllCats = () => {
    return CATS;
};

// export const fetchCat = createAsyncThunk(
//     'memoryCards/fetchCat',
//     async () => {
//         const response = await fetch(baseCatUrl + )
//     }
// )

const initialState = {
    memoryCardArry: [],
    isLoading: true,
    errorMessage: ''
};