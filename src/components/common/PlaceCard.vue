<template>
    <div class="flex flex-col five:max-w-[350px] max-w-[300px] w-full mx-auto tablet:min-w-[230px] min-w-[180px] cursor-pointer">
        <div class="flex relative w-full overflow-hidden rounded-2xl">
            <img class="object-cover w-full aspect-[9/6]" :src="place.image??placeHolder" alt="">
            <!-- <button class="absolute top-2 right-2  text-red-500 rounded-2xl font-semibold p-2 shadow-xl xs:text-base text-xs">
               <v-icon icon="fas fa-heart" />
            </button> -->
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
}>();
const placeHolder = "http://www.bridgesdb.com/images/bridgesdb/picture-of-rialto-bridge-2011.jpg"
// const truncatedDes = props.shortDescription.slice(0, 70) + '...';

</script>