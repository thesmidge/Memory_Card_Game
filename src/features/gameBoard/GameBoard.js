import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import MemoryCard from '../memoryCards/MemoryCard';
import _ from 'lodash';

const GameBoard = () => {
    // const memoryCards = useSelector((state) => state.memoryCards.memoryCardsArray);

    const cardIndexArray = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    console.log('Beginning index array: ' + cardIndexArray);
    const shuffledCardIndexArray = _.shuffle(cardIndexArray);
    console.log('Shuffled index array: ' + shuffledCardIndexArray);
    const truncatedCardIndexArray = shuffledCardIndexArray.splice(0, 10);
    console.log('Truncated index array: ' + truncatedCardIndexArray);

    return (
        <Container>
            <h1>This is the game board</h1>
            {/* <Row className='row-cols-5'>
                {memoryCards.map((memoryCard) => {
                    return (
                        <Col>
                            <MemoryCard image={memoryCard}/>
                        </Col>
                    );
                })}
            </Row> */}
        </Container>
    );
};

export default GameBoard;