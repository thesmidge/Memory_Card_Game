import { useEffect } from "react";

export const useFetchImage = (petType, props) => {
    const baseUrl = new URL(`https://api.the${petType}api.com/v1/images/`);

    async () => {
        const response = await fetch(baseUrl + props.id);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return { ...props, imageUrl: data.url };
    }
};