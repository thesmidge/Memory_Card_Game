import GameBoard from '../features/gameBoard/GameBoard';
import { shuffleMemoryCards } from '../features/memoryCards/memoryCardsSlice';

const GamePage = () => {
    // shuffleMemoryCards();
    console.log('Memory cards shuffled');

    return <GameBoard />;
};

export default GamePage;