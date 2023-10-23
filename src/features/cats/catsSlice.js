import { createSlice } from "@reduxjs/toolkit";
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
    catImagesArray: [],
    isLoading: true,
    errorMessage: ''
};

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCat.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCat.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = '';
            // state.catImagesArray = not sure what to put here yet
        },
        [fetchCat.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const catsReducer = catsSlice.reducer;