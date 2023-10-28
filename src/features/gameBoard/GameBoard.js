import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import MemoryCard from '../memoryCards/MemoryCard';

const GameBoard = () => {
    const memoryCards = useSelector((state) => state.memoryCards.memoryCardsArray);

    return (
        <Container>
            <h1>This is the game board</h1>
            <Row className='row-cols-5'>
                {memoryCards.map((memoryCard) => {
                    return (
                        <Col>
                            <MemoryCard imageId={memoryCard.id}/>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default GameBoard;