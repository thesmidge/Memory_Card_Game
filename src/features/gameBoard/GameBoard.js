import { Container, Row, Col } from 'reactstrap';
import MemoryCard from "../memoryCards/MemoryCard";

const GameBoard = () => {
    return (
        <Container>
            <h1>This is the game board</h1>
            <Row>
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
            <Row>
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
            <Row>
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
            <Row>
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