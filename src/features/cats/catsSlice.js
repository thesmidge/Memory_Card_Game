import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CATS } from '../../app/shared/CATS';
import { baseCatUrl } from '../../app/shared/baseUrls';

/* This catsSlice will probably become solely for the purpose of fetching my cat data from the backend, assuming I can successfully create one. Otherwise, it will basically be for managing the state of my locally stored catsArray.

I'll need to create a custom hook (stored in a hooks folder?) for my API fetch. It will need to be able to fetch from either thecatapi or the dogapi - maybe I can solve this by using the URL (URI?) contructor to build it. I'll probably call it useFetchImage, or something. Then I'll probably have to call it from either the GameBoard or GamePage - wherever I manage the local state for my memoryCardsArray. That will require at least 3 aspects 1) I'll have to access the catsArray from global state, 2) I'll have to create a memoryCardIndexArray in local state, and 3) I'll have to map over the memoryCardIndexArray, using data from the catsArray in an API fetch with each iteration to create a memroyCardImagesArray. */

// export const fetchCatImage = createAsyncThunk(
//     'cats/fetchImage',
//     async (catsArray, catImages) => {
//         for (const cat of catsArray) {
//             const catImage = async () => {
//                 const response = await fetch(baseCatUrl + cat.id);
//                 if (!response.ok) {
//                     return Promise.reject('Unable to fetch, status: ' + response.status);
//                 }
//                 const data = await response.json();
//                 return { ...cat, imageUrl: data.url };
//             };
//             catImages.push(catImage);
//         }
//     }
// );

// export const fetchAllCatImages = createAsyncThunk(
//     'cat/fetchAllImages',
//     async = (cats) => {
//         const response = await for (const cat of cats) {
//             const response = fetchCatImage(cat);
//         }
//     }
// );

export const fetchCatImage = createAsyncThunk(
    'cats/fetchImage',
    async (props) => {
        const response = await fetch(baseCatUrl + props.id);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return { ...props, imageUrl: data.url };
    }
);

const initialState = {
    catsArray: CATS, // Plan to implement backend similar to json-server used for nucampsite, if possible
    catImagesArray: [],
    isLoading: true,
    errorMessage: ''
};

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    // extraReducers: {
    //     [fetchCatImage.pending]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [fetchCatImage.fulfilled]: (state, action) => {
    //         state.isLoading = false;
    //         state.errorMessage = '';
    //         state.catImagesArray.push(action.payload);
    //     },
    //     [fetchCatImage.rejected]: (state, action) => {
    //         state.isLoading = false;
    //         state.errorMessage = action.error ? action.error.message : 'Fetch failed';
    //     }
    // }
});

export const catsReducer = catsSlice.reducer;