import axios from "axios";

export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID,
        'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
    }
};

const imageOpts = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: { q: 'london', pageNumber: '1', pageSize: '10', autoCorrect: 'true' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID,
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
};

export const fetch = async(url: string, opts?: any) => {
    const newOptions = { ...options, ...opts };
    const res = await axios.get(url, newOptions);
    return res.data;
}

export const fetchPlaces = async (query: string) => {
    const url = `https://trueway-places.p.rapidapi.com/FindPlaceByText?text=${query}&language=en`;
    const res = await fetch(url);
    return res;
}

export const fetcNearby = async (query: string) => {
    const url = `https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${query}&radius=50000&language=en`;
    const res = await fetch(url);
    return res;
}