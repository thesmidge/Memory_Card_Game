import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GamePage from '../src/pages/GamePage';
import { fetchCatImage } from './features/cats/catsSlice';
import './App.css';

function App() {
    const cats = useSelector((state) => state.cats.catsArray);
    const dispatch = useDispatch();

    /* Below, I am iterating over my catsArray and calling my fetch API for each one individually. When the fetch resolves,
    each cat object is then being pushed to my catImagesArray, along with the imageUrl returned by the fetch.
    However, I only have 22 objects in my catsArray, but I can see when I check the console that I am somehow ending up with
    44 objects in my catImagesArray. I can't figure out why each object is being duplicated. The order of the objects that end
    up in the catImagesArray is also getting jumbled - they are never in the same order as the objects in my catsArray. I
    think that's because the individual fetch calls are resolving at different speeds and are therefore being pushed to the
    catsImagesArray out of order. So I think that I need to make my loop asynchronous as well, but I haven't come up with a
    good way to do that yet.*/
    useEffect(() => {
        for (let cat of cats) {
            dispatch(fetchCatImage(cat));
        };
    }, [dispatch]);

    return (
        <div className="App">
            <header className="App-header">
                <GamePage/>
            </header>
        </div>
    );
}

export default App;