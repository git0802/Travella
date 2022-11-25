import type { PlaceState } from './../utils/types';
import { fetcNearby } from '@/utils/apifetches';
import type { Location, PlaceRes } from '@/utils/types';
import { defineStore } from 'pinia';

export const usePlaceStore = defineStore('places', {
    state: (): PlaceState => ({
        places: [],
        nearby: [],
        place: null,
        loading: false,
        error: false,
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
                const res: PlaceRes = await fetcNearby(locText);
                this.nearby = res.results;
                console.log(res);
                return res.results;
            } catch (error) {
                console.log(error);
                this.error = true;
            }
        }
    }
})