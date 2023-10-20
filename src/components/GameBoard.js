import { Container, Row, Col } from 'reactstrap';
import CardBack from "./CardBack";

const GameBoard = () => {
    return (
        <Container>
            <h1>This is the game board</h1>
            <Row>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
                <Col>
                    <CardBack/>
                </Col>
            </Row>
        </Container>
    );
};

export default GameBoard;