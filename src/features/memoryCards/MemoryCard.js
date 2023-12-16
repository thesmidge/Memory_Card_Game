import { useDispatch, useSelector } from 'react-redux';
import { useFetchImage } from '../../hooks/useFetchImage';
import { useState } from 'react';
import BlankSpace from '../gameBoard/BlankSpace';
import CardBack from './CardBack';
import CardImage from './CardImage';
import { addFlippedCard, addMatchedCard, clearFlippedCards } from './memoryCardsSlice';

/* Important Notes!!!

My fetchImage hook is getting called over and over again. I was able to determine that the problem was previously
fixed when I started using fetchImage from within the MemoryCard component, but I broke it when I started
altering global state from within the MemoryCard component through the addFlippedCard reducer. So now, when I
alter global state from within one MemoryCard component, all MemoryCard components are re-rendered because they
all reference that same global state. So, I want to try moving the fetchImage hook to the CardImage component. If
that doesn't fix it, then I want to try moving the global state references to the CardImage component (or
somewhere else?). I may need to revisit the idea of moving the image fetches to global state, but that was such a
headache before . . . so I want to try everything else I can think of first.*/

const MemoryCard = ({ index, colKey }) => {
    const [cardFlipped, setCardFlipped] = useState(false);
    const [cardMatched, setCardMatched] = useState(false);
    const cat = useSelector((state) => state.cats.catsArray[index]);
    const flippedCards = useSelector((state) => state.memoryCards.flippedCards);
    const dispatch = useDispatch();

    // const cardImageUrl = useFetchImage('cat', cat);
    // const cardDetail = { ...cat, imageUrl: cardImageUrl};

    const handleFlip = () => {
        setCardFlipped(!cardFlipped);
        dispatch(addFlippedCard(cat));
        if (flippedCards.length === 2) {
            // Have code check to see if the cards are a match (may define that logic here, or in the memoryCards array, or in a custom hook)
            if (/* cards match */) {
                // Set "cardMatched" for both cards to true (this is why I probably need to be able to access the "key" property of the column that the card is being rendered in - will need to think this through a bit)
                // Add both cards to the "matchedCards" array
                // Clear the "flippedCards" array
            } else {
                // Reset "cardFlipped" to false for both cards
                // Clear the "flippedCards" array
            }
        }
    };

    console.log(`MemoryCard ${colKey} rendered`);

    if (cardMatched) {
        return <BlankSpace />;
    }
    if (!cardFlipped) {
        return (
            <CardBack
                onCardClick={() => handleFlip()}
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