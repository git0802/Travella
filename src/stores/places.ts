import type { PlaceState } from './../utils/types';
import { fetcNearby } from '@/utils/apifetches';
import type { Location, PlaceRes } from '@/utils/types';
import { defineStore } from 'pinia';
import { checkauthorizedGeoLocation } from '@/utils/permissions';
import { places } from '@/components/common/data';

export const usePlaceStore = defineStore('places', {
    state: (): PlaceState => ({
        places: places,
        nearby: [],
        place: null,
        loading: true,
        error: false,
        acceptedLoc: checkauthorizedGeoLocation(),
    }),

    getters: {
        getPlaces: (state) => state.places,
        getNearby: (state) => state.nearby,
        getPlace: (state) => state.place,
    },
    actions: {
        async fetchPlaces() {
        },

        async getFetchedNearby(location: Location) {
            const locText = `${location.lat},${location.lng}`;
            try {
                const res: any= await fetcNearby(locText);
                this.nearby = res.results;
                console.log(res);
                this.loading = false;
                return res.results;
            } catch (error) {
                console.log(error);
                this.error = true;
            }
        },

        setAcceptedLoc(value: boolean) {
            this.acceptedLoc = value;
        },

        setPlaces(places: PlaceRes[]) {
            this.places = places;
        }
    }
})