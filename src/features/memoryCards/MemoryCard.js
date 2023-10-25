import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardBack from "./CardBack";
import CardImage from "./CardImage";
import { fetchCatImage } from "../cats/catsSlice";

const MemoryCard = ({ imageId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCatImage(imageId));
    }, [imageId]);

    return (
        <CardBack />
        // Add conditional rendering for CardImage
    );
};

export default MemoryCard;