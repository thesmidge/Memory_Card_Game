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
    const dispatch = useDispatch();

    const cardImageUrl = useFetchImage('cat', cat); // Consider moving this to the "CardImage" component to prevent so many re-fetches ... actually, I don't think that would prevent the re-fetches
    const cardDetail = { ...cat, imageUrl: cardImageUrl};

    const handleFlip = () => {
        // Move "onCardClick" logic here
        // Add if statement checking whether the length of "flippedCards" is equal to 2
        // If so, have code check to see if the cards are a match (may define that logic here, or in the memoryCards array, or in a custom hook)
        // If cards are a match, set "cardMatched" for both cards to true (this is why I probably need to be able to access the "key" property of the column that the card is being rendered in - will need to think this through a bit)
        // Also add both cards to the "matchedCards" array
        // If cards do not match, reset "cardFlipped" to false for both cards
        // No matter the result, clear the "flippedCards" array
    };

    console.log(`MemoryCard ${colKey} rendered`);

    if (cardMatched) {
        return <BlankSpace />;
    }
    if (!cardFlipped) {
        return (
            <CardBack
                onCardClick={() => {
                    setCardFlipped(!cardFlipped);
                    dispatch(addFlippedCard(cardDetail));
                    // onFlip([cardDetail]);
                }}
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