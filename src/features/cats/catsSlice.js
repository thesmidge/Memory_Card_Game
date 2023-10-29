import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CATS } from '../../app/shared/CATS';
import { baseCatUrl } from '../../app/shared/baseUrls';

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