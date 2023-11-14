import '../../App.css';

const CardBack = (props) => {
    return (
        <div
            className='cardBack'
            onClick={(e) => props.onCardClick(e)}>
        </div>
    );
};

export default CardBack;