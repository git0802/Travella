
export interface UserInfo {
    _id: string;
    names: string;
    email: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
export interface PlaceRes {
    id: string;
    name: string;
    address: string;
    location: Location;
    images: string[] | null;
    price: any;
    types?: string[];
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
    acceptedLoc: boolean,
    liked: PlaceRes[],
}

export interface CityType{
    name: string;
    countryCode: string;
    stateCode: string;
    latitude: string;
    longitude: string;
}