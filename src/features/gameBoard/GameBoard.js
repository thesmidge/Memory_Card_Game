import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import MemoryCard from '../memoryCards/MemoryCard';
import _ from 'lodash';

const GameBoard = () => {
    const cardIndexArray = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    console.log('Beginning index array: ' + cardIndexArray);
    const shuffledCardIndexArray = _.shuffle(cardIndexArray);
    console.log('Shuffled index array: ' + shuffledCardIndexArray);
    const truncatedCardIndexArray = shuffledCardIndexArray.splice(0, 10);
    console.log('Truncated index array: ' + truncatedCardIndexArray);
    const duplicatedIndexArray = truncatedCardIndexArray.concat(truncatedCardIndexArray);
    console.log('Duplicated index array: ' + duplicatedIndexArray);
    const memoryCardIndexArray = _.shuffle(duplicatedIndexArray);
    console.log('Memory card index array: ' + memoryCardIndexArray);

    return (
        <Container>
            <h1>This is the game board</h1>
            <Row className='row-cols-5'>
                {memoryCardIndexArray.map((cardIndex, idx) => {
                    return (
                        <Col key={idx}>
                            <MemoryCard index={cardIndex}/>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default GameBoard;