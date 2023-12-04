import '../../App.css';

const CardImage = (props) => {
    const imgurl = props.url;

    return (
        <div className='cardImage'>
            <img src={imgurl} alt='' />
        </div>
    );
};

export default CardImage;