import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GamePage from '../src/pages/GamePage';
import { fetchCatImage } from './features/cats/catsSlice';
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        for (let cat of state.cats.catsArray) {
            dispatch(fetchCatImage(cat));
        }
    }, [dispatch]);

    useSelector((state) => state.memoryCards)

    return (
        <div className="App">
            <header className="App-header">
                <GamePage/>
            </header>
        </div>
    );
}

export default App;