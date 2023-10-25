import React from 'react';
import GameBoard from '../src/features/gameBoard/GameBoard';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <GameBoard/>
            </header>
        </div>
    );
}

export default App;