import CardBack from './CardBack';
import CardImage from './CardImage';
import { fetchCatImage } from '../cats/catsSlice';
import { useSelector } from 'react-redux';
import { useFetchImage } from '../../hooks/useFetchImage';

const MemoryCard = ({ index }) => {
    const cats = useSelector((state) => state.cats.catsArray);
    // console.log(cats);
    const cat = cats[index];
    // console.log(cat);

    const cardImageUrl = useFetchImage('cat', cat);
    const cardDetail = { ...cat, imageUrl: cardImageUrl}

    return (
        // <CardBack />
        // Add conditional rendering for CardImage
        <CardImage
            id={cardDetail.id}
            name={cardDetail.name}
            url={cardDetail.imageUrl}
        />
    );
};

export default MemoryCard;