import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import MemoryCard from '../memoryCards/MemoryCard';
// import _ from 'lodash';

const GameBoard = ({ memoryCardIndexArray }) => {
    // const [flippedCards, setFlippedCards] = useState([]);
    // const [matchedCards, setMatchedCards] = useState([]);

    return (
        <Container>
            <h1>Some Title</h1>
            <Row className='row-cols-5'>
                {memoryCardIndexArray.map((cardIndex, idx) => {
                    return (
                        <Col key={idx}>
                            <MemoryCard
                                index={cardIndex}
                                // onFlip={(memoryCard) => {setFlippedCards(flippedCards.concat(...memoryCard)); console.log(flippedCards)}}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default GameBoard;