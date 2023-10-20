import { Container, Row, Col } from 'reactstrap';
import CardBack from "./CardBack";
import CardImage from './CardImage';

const GameBoard = () => {
    return (
        <Container>
            <h1>This is the game board</h1>
            <Row>
                <Col>
                    <CardImage />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
                <Col>
                    <CardBack />
                </Col>
            </Row>
        </Container>
    );
};

export default GameBoard;