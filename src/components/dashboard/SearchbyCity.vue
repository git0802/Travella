<template>
    <div class="flex w-full  max-w-[700px] mx-auto items-center justify-center">
        <div
         v-if="!state.hide"
         @click="() => (state.hide = true)"
         class="fixed top-0 left-0 bottom-0 right-0 z-[4]"></div>
        <div class="relative w-full max-w-[700px] z-[20]">
            <div class="px-4 w-full py-2 max-w-[700px] flex items-center rounded-md bg-mainblue/10">
                <input @focus="() => (state.hide = false)" v-model="state.input"
                    class="w-full cityinput outline-none pr-2" type="text" placeholder="Search Places By City">
                <v-icon class="text-mainblue text-base -translate-y-1" icon="fas fa-search" />
            </div>
            <div v-if="!state.hide"
                class="flex absolute top-full bg-mainwhite shadow-md rounded-b-lg shadow-mainblue/40 h-[30vh] overflow-y-auto w-full py-4 flex-col">
                <p v-for="city in state.shown"
                    @click="() => search({ lat: Number(city.latitude), lng: Number(city.longitude) }, city.name)"
                    class="text-xs text-mainblue cursor-pointer py-2 px-4 hover:bg-mainblue/10 duration-300">{{
                            city.name
                    }}</p>
                <p v-if="state.input.trim() === '' || state.loaded.length === 0" class="text-sm text-center">Type a city
                    to search places in</p>
                <button @click="showMore" v-if="!(state.shown.length === state.loaded.length)"
                    class="text-sm text-mainblue w-fit ml-3">Show more</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { fetcNearby } from '@/utils/apifetches';
import type { CityType, Location, PlaceRes } from '@/utils/types';
import { Country, State, City } from 'country-state-city';
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
    prop: {
        searchInput: string,
        cityinput: string,
        results: PlaceRes[],
        loading: boolean
    };
}>()

const route = useRoute();

const state = reactive({
    cities: [] as CityType[],
    loaded: [] as CityType[],
    shown: [] as CityType[],
    input: '',
    hide: false
});

const showMore = () => {
    const startIndex = state.shown.length;
    const endIndex = startIndex + 10;
    state.shown = state.loaded.slice(0, endIndex);
}

const search = async (location: Location, name: string) => {
    state.hide = true;
    route.query.q = name;
    state.input = name;
    props.prop.loading = true;
    const locText = `${location.lat},${location.lng}`
    const data = await fetcNearby(locText);
    props.prop.results = data.results;
    props.prop.loading = false;
}

watch(() => state.input,
    (val) => {
        if (val.trim() === '') {
            state.loaded = [];
            state.shown = [];
            return
        }
        // filter where it starts with val
        const loaded = state.cities.filter(city => city.name.toLowerCase().startsWith(val.toLowerCase()));
        state.loaded = loaded
        state.shown = (loaded.length > 20 ? loaded.slice(0, 10) : loaded)
    }
)


onMounted(() => {
    state.cities = City.getAllCities();
    // const countries = Country.getAllCountries();
    // citynames.value = cities.value.map(city => city.name);
});

</script>