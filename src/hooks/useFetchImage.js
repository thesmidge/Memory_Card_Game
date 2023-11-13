import { useEffect, useState } from 'react';

export const useFetchImage = (petType, props) => {
    const baseUrl = new URL(`https://api.the${petType}api.com/v1/images/`);
    const [imageUrl, setImageUrl] = useState('');

    const fetchImage = async () => {
        const response = await fetch(baseUrl + props.id);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        // return { ...props, imageUrl: data.url };
        setImageUrl(data.url);
    };

    useEffect(() => {
        fetchImage();
    }, []);

    return imageUrl;
};