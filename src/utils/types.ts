export interface PlaceRes {
    results: PlaceRes[];
}

export interface PlaceRes {
    id: string;
    name: string;
    address: string;
    location: Location;
    types: string[];
}

export interface Location {
    lat: number;
    lng: number;
}

export interface PlaceState {
    places: PlaceRes[];
    nearby: PlaceRes[],
    place: PlaceRes | null,
    loading: boolean,
    error: boolean,
}