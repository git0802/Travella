<template>
    <DashLayoutVue :set-linear="setLinear" :linear="linear" :active="'search'">
        <div class="flex w-full flex-col p-4">
            <div class="flex w-full items-center justify-center">
                <div class="px-4 w-full max-w-[700px] py-2  flex items-center rounded-md bg-mainblue/10">
                    <input v-model="state.searchInput" class="w-full outline-none pr-2" type="text"
                        @keyup.enter="search" placeholder="Search Places">
                    <v-icon @click="search" class="text-mainblue text-base -translate-y-1" icon="fas fa-search" />
                </div>
            </div>
            <div class="flex w-full mt-4 flex-col">
                <div v-if="state.results.length !== 0 "
                    class="flex flex-col w-full items-center">
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
                <div v-if="!state.loading" class=" flex flex-col w-full gap-y-3">
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

const linear = ref(false);

const route = useRoute()
const router = useRouter()

const state = reactive<
{
    searchInput: string,
    results: PlaceRes[],
    loading: boolean
}
>({
    searchInput: (route.query.q || '').toString(),
    loading: false,
    results: [],
});

const search = () => {
    if (state.searchInput.trim() !== '') {
        console.log('searching');
        router.replace({
            name: 'search',
            query: {
                q: state.searchInput,
            },
        });
    }
};

async function fetch() {
    if (!state.searchInput || state.searchInput.trim() === '') return;
    state.loading = true;
    const data = await fetchPlaces(state.searchInput);
    console.log(data);
    state.results = data.results;
    state.loading = false;
}

watch(
    () => route.query.q,
    () => {
        console.log('route changed');
        fetch();
    }
);

onMounted(() => {
    console.log(route.query.q);
    if (state.searchInput || state.searchInput.trim() === '') fetch()
})

const setLinear = (val: boolean) => {
    linear.value = val;
};
</script>