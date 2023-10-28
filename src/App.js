import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GamePage from '../src/pages/GamePage';
import { fetchCatImage } from './features/cats/catsSlice';
import './App.css';

function App() {
    const cats = useSelector((state) => state.cats.catsArray)
    const dispatch = useDispatch();

    useEffect(() => {
        for (let cat of cats) {
            dispatch(fetchCatImage(cat));
        }
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