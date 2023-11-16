import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import MemoryCard from '../memoryCards/MemoryCard';
import _ from 'lodash';

const GameBoard = ({ memoryCardIndexArray }) => {
    
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