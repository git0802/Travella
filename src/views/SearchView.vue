<template>
    <DashLayoutVue :linear="false" :active="'search'">
        <div class="flex w-full flex-col xs:p-4 ">
            <div class="flex z-20 w-full items-center justify-center mb-4">
                <p>Serch By: </p>
                <select @change="onChangeSelect" id="select" class="outline-non ml-4 bg-mainblue/10 px-6 relative py-2 flex cursor-pointer">
                    <option value="name">Name</option>
                    <option value="location">Location</option>
                </select>
                <!-- <label class=" cursor-pointer" for="select">
                    <v-icon icon="fa fa-chevron-down" class="text-mainblue text-base -translate-y-1 -translate-x-7" />
                </label> -->
            </div>
            <div v-if="state.activeSearch === 'name'" class="flex w-full items-center justify-center">
                <div class="px-4 w-full max-w-[700px] py-2  flex items-center rounded-md bg-mainblue/10">
                    <input v-model="state.searchInput" class="w-full outline-none pr-2" type="text"
                        @keyup.enter="() => search(state.searchInput)" placeholder="Search Places by Text">
                    <v-icon @click="() => search(state.searchInput)" class="text-mainblue text-base -translate-y-1"
                        icon="fas fa-search" />
                </div>
            </div>
            <SearchbyCity v-if="state.activeSearch === 'location'" :prop="state"/>
            <div class="flex w-full mt-4 flex-col">
                <div v-if="state.results.length !== 0" class="flex flex-col w-full items-center">
                    <h1 class="font-semibold text-xl">Search Results</h1>
                    <p class="text-xs opacity-75">Showing {{ state.results.length }} results</p>
                </div>
                <div v-if="route.query.q && !state.loading && state.results.length === 0 && state.searchInput.trim() !== ''"
                    class="flex flex-col w-full items-center">
                    <h1 class="font-semibold text-xl">No Results</h1>
                    <p class="text-xs opacity-75">Try searching for something else</p>
                </div>
                <div v-if="!route.query.q" class="flex flex-col w-full items-center">
                    <p class="text-sm opacity-75">Try searching for something</p>
                </div>
                <div v-if="!state.loading" class=" flex flex-col w-full gap-y-3 h-[77vh] overflow-y-auto">
                    <SearchResultVue v-for="palce in state.results" :key="palce.id" :result="palce" class="mt-6" />
                </div>
                <PlaceSearchSkeletonVue v-if="state.loading" />
            </div>
        </div>
    </DashLayoutVue>
</template>

<script lang="ts" setup>
import DashLayoutVue from '@/Layouts/DashLayout.vue';
import { fetchPlaces } from '@/utils/apifetches';
import { onMounted, reactive, ref, watch } from 'vue-demi';
import { useRoute, useRouter } from 'vue-router';
import type { PlaceRes } from '@/utils/types';
import PlaceSearchSkeletonVue from '@/components/skeletons/PlaceSearchSkeleton.vue';
import SearchResultVue from '@/components/dashboard/SearchResult.vue';
import SearchbyCity from '@/components/dashboard/SearchbyCity.vue';

const route = useRoute()
const router = useRouter()

const state = reactive<
    {
        searchInput: string,
        cityinput: string,
        results: PlaceRes[],
        loading: boolean,
        activeSearch: string
    }
>({
    searchInput: (route.query.q || '').toString(),
    loading: false,
    results: [],
    cityinput: '',
    activeSearch: 'name'
});

const search = (input: string) => {
    if (input.trim() !== '') {
        console.log('searching');
        router.replace({
            name: 'search',
            query: {
                q: input,
            },
        });
    }
};

const onChangeSelect = (e: any) => {
    state.loading = false;
    console.log(e.target.value);
    state.activeSearch = e.target.value;
};

async function fetch(input: string) {
    if (!input || input.trim() === '') return;
    state.loading = true;
    const data = await fetchPlaces(input);
    console.log(data);
    state.results = data.results;
    state.loading = false;
}

watch(
    () => route.query.q,
    () => {
        console.log('route changed');
        if (state.activeSearch = 'name') fetch(state.searchInput);
    }
);

onMounted(() => {
    console.log(route.query.q);
    if (state.searchInput || state.searchInput.trim() === '') fetch(state.searchInput)
})

</script>