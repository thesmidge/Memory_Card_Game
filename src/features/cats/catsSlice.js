import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CATS } from "../../app/shared/CATS";
import { baseCatUrl } from "../../app/shared/baseUrls";

export const fetchCatImage = createAsyncThunk(
    'cats/fetchImage',
    async (imageId) => {
        const response = await fetch(baseCatUrl + imageId);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data.url;
    }
);

const initialState = {
    catsArray: CATS,
    catImagesArray: [],
    isLoading: true,
    errorMessage: ''
};

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        buildCatImagesArray: (state) => {
            for (let cat of state.catsArray) {
                const catImage = fetchCatImage(cat.id);
                catImagesArray.push(catImage);
            };
        }
    },
    extraReducers: {
        [fetchCatImage.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCatImage.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = '';
            state.catImagesArray.push(action.payload);
        },
        [fetchCatImage.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const catsReducer = catsSlice.reducer;