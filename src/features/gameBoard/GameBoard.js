import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import MemoryCard from '../memoryCards/MemoryCard';
import _ from 'lodash';

const GameBoard = () => {
    const cardIndexArray = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    const shuffledCardIndexArray = _.shuffle(cardIndexArray);
    const truncatedCardIndexArray = shuffledCardIndexArray.splice(0, 10);
    const duplicatedIndexArray = truncatedCardIndexArray.concat(
        truncatedCardIndexArray
    );
    const memoryCardIndexArray = _.shuffle(duplicatedIndexArray);

    return (
        <Container>
            <h1>Some Title</h1>
            <Row className='row-cols-5'>
                {memoryCardIndexArray.map((cardIndex, idx) => {
                    return (
                        <Col key={idx}>
                            <MemoryCard index={cardIndex} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default GameBoard;