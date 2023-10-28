import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import MemoryCard from '../memoryCards/MemoryCard';

const GameBoard = () => {
    return (
        <Container>
            <h1>This is the game board</h1>
            <Row className='row-cols-5'>
                <Col>
                    <MemoryCard imageId={id}/>
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
                <Col>
                    <MemoryCard />
                </Col>
            </Row>
        </Container>
    );
};

export default GameBoard;