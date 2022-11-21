<template>
    <div class="flex flex-col w-full px-[5%] py-8">
        <h1 class="text-mainblue font-semibold text-lg">TOP DESTINATIONS</h1>
        <h1 class="tablet:text-2xl font-semibold mt-6">Explore Top Destination</h1>
        <div class="flex w-full items-center relative">
            <button class="absolute left-1 z-10 bg-mainwhite/70 md:p-2 p-1 px-[0.4em] md:px-3 rounded-full">
                <v-icon class="" size="19" icon="fas fa-chevron-left" />
            </button>
            <div class="grid scrollbar-hide grid-flow-col w-full mt-4 gap-3 overflow-x-auto px-1">
                <PlaceCardVue v-for="place in places" :key="place.id" :placeName="place.name" :placeImage="place.image"
                    :placeDescription="place.description" :placePrice="place.price" :shortDescription="place['short-desc']" :location="place.location" />

            </div>
            <button
            class="absolute right-0 z-10 bg-mainwhite/70 md:p-2 p-1 px-[0.4em] md:px-3 rounded-full"
            >
                <v-icon class="" size="19" icon="fas fa-chevron-right" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PlaceCardVue from '@/components/common/PlaceCard.vue';
import { places } from '../common/data';

</script>