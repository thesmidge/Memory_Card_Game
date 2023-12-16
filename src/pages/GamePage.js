import { useDispatch } from 'react-redux';
import GameBoard from '../features/gameBoard/GameBoard';
import { shuffleMemoryCards } from '../features/memoryCards/memoryCardsSlice';
import { fetchCatImages } from '../features/cats/catsSlice';

const GamePage = () => {
    const dispatch = useDispatch();

    dispatch(shuffleMemoryCards());
    dispatch(fetchCatImages());

    return (
        <GameBoard />
    );
};

export default GamePage;