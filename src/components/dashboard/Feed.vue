<template>
    <div class="flex flex-col w-full text-sm mt-3">
        <h1 class="text-lg font-semibold">Hotels</h1>
        <div class="flex w-full items-center justify-between">
            <div class="flex items-center gap-x-4">
                <h4 class="text-sm cursor-pointer font-semibold border-b-2 border-mainblue/80 py-1">Most Popular</h4>
                <h4 class="text-sm cursor-pointer font-semibold py-1">Best Price</h4>
                <h4 class="text-sm cursor-pointer font-semibold py-1">Near Me</h4>
            </div>
            <button class="flex items-center">
                See all
                <v-icon icon="fa fa-chevron-right" size="10" class="ml-1" />
            </button>
        </div>
        <div class="grid scrollbar-hide grid-flow-col w-full mt-4 gap-3 overflow-x-auto px-1">
            <PlaceCardVue v-for="place in places" :key="place.id" :placeName="place.name" :placeImage="place.image"
                :placeDescription="place.description" :placePrice="place.price" :shortDescription="place['short-desc']"
                :location="place.location" />

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

</script>