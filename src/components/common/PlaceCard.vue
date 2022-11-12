<template>
    <div class="flex flex-col max-w-[400px] xs:min-w-[280px]">
        <div class="flex relative w-full overflow-hidden rounded-2xl">
            <img class="object-cover w-full" :src="placeImage" alt="">
            <button class="absolute top-2 right-2 bg-white text-mainblue rounded-2xl font-semibold p-2 shadow-xl">
               $ {{placePrice}}
            </button>
        </div>
        <div class="flex flex-col">
            <h1 class="text-xl font-semibold">{{placeName}}</h1>
            <p class="font-semibold">{{ shortDescription}}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
// get component props
const props = defineProps<{
    placeName: string,
    placeImage: string,
    placeDescription: string,
    placePrice: number,
    placeRating?: string,
    placeReviews?: string,
    shortDescription: string,
    location: string
}>();

// const truncatedDes = props.shortDescription.slice(0, 70) + '...';

</script>