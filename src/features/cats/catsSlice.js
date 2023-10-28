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
        return {...props, imageUrl: data.url};
    }
);

// I will need to add a call to fetchCatImage() in a loop over the catsArray to the App(). Then I will build/shuffle the memory card deck in either the GameBoard() or GamePage(). Also, according to the Redux documentation, I don't actually need to use useEffect with useDispatch, but it can help React to not get mad when using useDispatch.

const initialState = {
    catsArray: CATS,
    catImages: [],
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
            state.catImages.push(action.payload);
        },
        [fetchCatImage.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const catsReducer = catsSlice.reducer;