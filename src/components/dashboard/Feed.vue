<template>
    <div class="flex flex-col w-full text-sm mt-3 overflow-y-auto h-[87vh] overflow-x-hidden">
        <h1 class="text-lg font-semibold">Hotels</h1>
        <div class="flex w-full items-center justify-between">
            <div class="flex items-center gap-x-4 truncate">
                <h4 class="text-sm cursor-pointer font-semibold border-b-2 border-mainblue/80 py-1">Most Popular</h4>
                <h4 class="text-sm five:flex hidden cursor-pointer font-semibold py-1">Best Price</h4>
                <h4 class="text-sm five:flex hidden cursor-pointer font-semibold py-1">Near Me</h4>
            </div>
            <button class="flex items-center truncate">
                See all
                <v-icon icon="fa fa-chevron-right" size="10" class="ml-1" />
            </button>
        </div>
        <!-- <div class="grid grid-flow-col w-full mt-4 overflow-scroll gap-3 h-[40vh] px-1">
            <PlaceCardVue v-for="place in places" :key="place.id" :placeName="place.name" :placeImage="place.image"
                :placeDescription="place.description" :placePrice="place.price" :shortDescription="place['short-desc']"
                :location="place.location" />

        </div> -->
        <div class="flex flex-col w-full">
            <h1 class="mt-8 text-lg font-semibold">Nearby Places</h1>
            <div class="grid fourk:grid-cols-6 large:grid-cols-4 laptop:grid-cols-3 five:grid-cols-2 gap-3 w-full">
                <PlaceCardVue v-for="near in nearby" :key="near.id" :place="near" class="mt-6"
                />
            </div>
        </div>
        <div class="flex w-full">
            <div class="flex flex-col">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { places } from '../common/data';
import PlaceCardVue from '../common/PlaceCard.vue';
import { usePlaceStore } from '@/stores/places';
// import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

const placesStore = usePlaceStore()

const { nearby } = storeToRefs(placesStore);
 
// const places = computed(() => placesStore.nearby);


</script>