import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import MemoryCard from '../memoryCards/MemoryCard';

const GameBoard = () => {
    const memoryCardIndexArray = useSelector((state) => state.memoryCards.memoryCardsArray);

    return (
        <Container>
            <h1>Some Title</h1>
            <Row className='row-cols-5'>
                {memoryCardIndexArray.map((cardIndex, idx) => {
                    return (
                        <Col key={idx}>
                            <MemoryCard
                                index={cardIndex}
                                colKey={idx}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default GameBoard;