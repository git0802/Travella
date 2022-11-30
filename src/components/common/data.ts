import type { PlaceRes } from "@/utils/types";

export const places: PlaceRes[] = [
    {
        id: "1",
        name: "Venice",
        images: ["https://cdn.pixabay.com/photo/2017/06/28/15/32/venice-2451047__340.jpg"],
        price: 1000000,
        address: "Venice, Italy",
        location: { lat: 23432, lng: 23423},
        types: []
    },
    {
        id: "2",
        name: "Paris",
        images: ["https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900"],
        price: 1000000,
        address: "Paris, France",
        location: { lat: 45.4408, lng: 12.3155 },
        types: []
    },
    {
        id: "3",
        name: "London",
        images: ["https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"],
        price: 1000000,
        address: "London, England",
        location: { lat: 51.5072, lng: 0.1276 },
        types: []
    },
    {
        id: "4",
        name: "Rome",
        images: ["https://media.timeout.com/images/105211701/1024/576/image.jpg"],
        price: 1000000,
        address: "Rome, Italy",
        location: { lat: 41.9028, lng: 12.4964 },
        types: []
    },
    {
        id: "5",
        name: "New York",
        images: ["https://cdn.pixabay.com/photo/2015/05/01/15/05/the-statue-of-liberty-748619__340.jpg"],
        price: 1000000,
        address: "New York, USA",
        location: { lat: 40.7128, lng: 74.0060 },
        types: []
    },
    {
        id: "6",
        name: "Tokyo",
        images: ["https://cdn.pixabay.com/photo/2021/05/01/09/59/city-6220689__340.jpg"],
        price: 1000000,
        address: "Tokyo, Japan",
        location: { lat: 35.6762, lng: 139.6503 },
        types: []
    },
]
