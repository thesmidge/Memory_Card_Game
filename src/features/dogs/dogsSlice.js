import { DOGS } from "../../app/shared/DOGS";

export const selectAllDogs = () => {
    return DOGS;
};

const initialState = {
    dogsArray: [],
    isLoading: true,
    errorMessage: ''
};