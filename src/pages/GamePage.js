import GameBoard from '../features/gameBoard/GameBoard';
import { shuffleMemoryCards } from '../features/memoryCards/memoryCardsSlice';

const GamePage = () => {
    shuffleMemoryCards();

    return <GameBoard />;
};

export default GamePage;