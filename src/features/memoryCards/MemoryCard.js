import { useDispatch, useSelector } from 'react-redux';
import { useFetchImage } from '../../hooks/useFetchImage';
import { useState } from 'react';
import BlankSpace from '../gameBoard/BlankSpace';
import CardBack from './CardBack';
import CardImage from './CardImage';
import { addFlippedCard, addMatchedCard, clearFlippedCards } from './memoryCardsSlice';

const MemoryCard = ({ index, colKey }) => {
    const [cardFlipped, setCardFlipped] = useState(false);
    const [cardMatched, setCardMatched] = useState(false);
    const cat = useSelector((state) => state.cats.catsArray[index]);
    const flippedCards = useSelector((state) => state.memoryCards.flippedCards);
    const matchedCards = useSelector((state) => state.memoryCards.matchedCards);
    const dispatch = useDispatch();

    const checkForMatch = () => {
        if (flippedCards[0].id === flippedCards[1].id) {
            console.log('Cards match!');
            // Replace this alert with a component
            alert('The cards are a match!')
            setCardFlipped(false);
            setCardMatched(true);
            dispatch(addMatchedCard(cat));
            if (matchedCards.length % 2 === 0) {
                dispatch(clearFlippedCards());
            }
        } else {
            console.log('Cards do not match.');
            alert('The cards are not a match.');
            setCardFlipped(false);
            dispatch(clearFlippedCards());
        }
    };

    if (cardFlipped ===true && flippedCards.length === 2) {
        setTimeout(checkForMatch, 250);
    }

    const handleFlip = () => {
        dispatch(addFlippedCard(cat));        
        setCardFlipped(!cardFlipped);
        console.log('Card flipped');
    };

    console.log(`MemoryCard ${colKey} rendered`);

    if (cardMatched) {
        return <BlankSpace />;
    }
    if (!cardFlipped) {
        return (
            <CardBack
                onCardClick={() => {
                    if (flippedCards.length < 2) {
                        handleFlip();
                    }
                }}
            />
        );
    }
    return (
        <CardImage
            id={cat.id}
            name={cat.name}
        />
    );
};

export default MemoryCard;