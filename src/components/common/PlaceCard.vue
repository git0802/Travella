<template>
    <div class="flex flex-col max-w-[350px] xs:min-w-[230px] min-w-[200px]">
        <div class="flex relative w-full overflow-hidden rounded-2xl">
            <img class="object-cover w-full" src="http://www.bridgesdb.com/images/bridgesdb/picture-of-rialto-bridge-2011.jpg" alt="">
            <button class="absolute top-2 right-2 bg-white text-mainblue rounded-2xl font-semibold p-2 shadow-xl xs:text-base text-xs">
               $ {{1122}}
            </button>
        </div>
        <div class="flex flex-col">
            <h1 class="xs:text-lg font-semibold">{{place.name}}</h1>
            <p class="font-semibold xs:text-sm text-xs">{{ place.address}}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { PlaceRes } from '@/utils/types';

// get component props
const props = defineProps<{
    place: PlaceRes;
    // placeName?: string,
    // placeImage?: string,
    // placeDescription?: string,
    // placePrice: number,
    // placeRating?: string,
    // placeReviews?: string,
    // shortDescription?: string,
    // location?: string
}>();

// const truncatedDes = props.shortDescription.slice(0, 70) + '...';

</script>