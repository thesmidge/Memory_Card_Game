import { Card, CardBody } from 'reactstrap';
import '../App.css';

const CardBack = (props) => {
    return (
        <Card className='cardBack' outline>
            <CardBody>
                This is going to be the card back.
            </CardBody>
        </Card>
    );
};

export default CardBack;