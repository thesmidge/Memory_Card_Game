import GameBoard from '../features/gameBoard/GameBoard';
import _ from 'lodash';

const GamePage = () => {
    const cardIndexArray = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    const shuffledCardIndexArray = _.shuffle(cardIndexArray);
    const truncatedCardIndexArray = shuffledCardIndexArray.splice(0, 10);
    const duplicatedIndexArray = truncatedCardIndexArray.concat(
        truncatedCardIndexArray
    );
    const memoryCardIndexArray = _.shuffle(duplicatedIndexArray);

    return (
        <GameBoard memoryCardIndexArray={memoryCardIndexArray} />
    );
};

export default GamePage;