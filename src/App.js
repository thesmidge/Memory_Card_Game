import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GamePage from '../src/pages/GamePage';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <GamePage/>
            </header>
        </div>
    );
}

export default App;