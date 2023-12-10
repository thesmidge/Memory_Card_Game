import { useDispatch } from 'react-redux';
import GameBoard from '../features/gameBoard/GameBoard';
import { shuffleMemoryCards } from '../features/memoryCards/memoryCardsSlice';

const GamePage = () => {
    const dispatch = useDispatch();

    dispatch(shuffleMemoryCards());

    return (
        <GameBoard />
    );
};

export default GamePage;