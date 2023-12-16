import '../../App.css';
import { useFetchImage } from '../../hooks/useFetchImage';

const CardImage = (props) => {
    const imgurl = useFetchImage('cat', props);

    return (
        <div className='cardImage'>
            <img src={imgurl} alt='' />
        </div>
    );
};

export default CardImage;