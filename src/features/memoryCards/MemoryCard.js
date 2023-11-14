import CardBack from './CardBack';
import CardImage from './CardImage';
import { useSelector } from 'react-redux';
import { useFetchImage } from '../../hooks/useFetchImage';
import { useState } from 'react';

const MemoryCard = ({ index, onCardClick }) => {
    const [cardFlipped, setCardFlipped] = useState(false);
    const [cardMatched, setCardMatched] = useState(false);
    const cat = useSelector((state) => state.cats.catsArray[index]);

    const cardImageUrl = useFetchImage('cat', cat);
    const cardDetail = { ...cat, imageUrl: cardImageUrl};

    if (!cardFlipped) {
        return (
            <CardBack
                onCardClick={() => setCardFlipped(!cardFlipped)}
            />
        );
    }
    return (
        <CardImage
            id={cardDetail.id}
            name={cardDetail.name}
            url={cardDetail.imageUrl}
        />
    );
};

export default MemoryCard;