<template>
    <div class="flex flex-col w-full text-sm mt-3 overflow-y-auto h-[87vh] overflow-x-hidden">
        <h1 class="text-lg font-semibold">Places</h1>
        <h1 class="text-sm mt-4 font-semibold">Most Popular</h1>
        <div class="grid fourk:grid-cols-6 large:grid-cols-4 laptop:grid-cols-3 five:grid-cols-2 gap-3 w-full">
            <PlaceCardVue v-for="near in topPlaces" :key="near.id" :place="near" class="mt-6" />
        </div>
        <button class="mt-5 text-mainblue w-fit ml-2">See more</button>
        <div class="flex flex-col w-full">
            <h1 class="mt-8 text-lg font-semibold">Nearby Places</h1>
            <div class="grid fourk:grid-cols-6 large:grid-cols-4 laptop:grid-cols-3 five:grid-cols-2 gap-3 w-full">
                <PlaceCardVue v-for="near in nearby" :key="near.id" :place="near" class="mt-6" />
            </div>
            <PlacesSketonVue v-if="loading" />
            <h1 v-if="!acceptedLoc">You have to accept location permision to get nearby places</h1>
            <h1 v-if="error">An error occured while getting nearby places <button
                @click="reload"
                class="text-mainblue"
                >Reload Page</button></h1>
        </div>
        <div class="flex w-full">
            <div class="flex flex-col">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PlaceCardVue from '../common/PlaceCard.vue';
import { usePlaceStore } from '@/stores/places';
import PlacesSketonVue from '../skeletons/PlacesSketon.vue';
// import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { mixArray } from '@/utils';

const placesStore = usePlaceStore()
const { setError, setLoading } = placesStore
const { nearby, acceptedLoc, loading, places, error } = storeToRefs(placesStore);
const topPlaces: any = ref([]);

const reload = () => {
    window.location.reload();
}

onMounted(() => {
    let newCopy = [...places.value];
    //if(error) setLoading()
    setError(false)
    newCopy = mixArray(newCopy);
    topPlaces.value = newCopy.splice(0, 4);
});



</script>