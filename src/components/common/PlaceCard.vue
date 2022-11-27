<template>
    <div class="flex flex-col five:max-w-[350px] max-w-[300px] w-full mx-auto tablet:min-w-[230px] min-w-[180px] cursor-pointer">
        <div class="flex relative w-full overflow-hidden rounded-2xl">
            <img class="object-cover w-full aspect-[9/6]" :src="place.images ? place.images[0]:placeHolder" alt="">
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
import { onMounted } from 'vue';
import { usePlaceStore } from '@/stores/places';
import { searchImages } from '@/utils/apifetches';
// get component props

const { setNearby, nearby } = usePlaceStore()

const props = defineProps<{
    place: PlaceRes;
}>();
const placeHolder = "http://www.bridgesdb.com/images/bridgesdb/picture-of-rialto-bridge-2011.jpg"

const getPlaceImages = async() => {
    const data = await searchImages(props.place.name);
    setNearby(nearby.map((near) => {
        if (near.id === props.place.id) {
            return {
                ...near,
                images: data.value,
            };
        }
        return near;
    }));
}

// onMounted(() => {
//     if (props.place.images?.length === 0 || !props.place.images) {
//         getPlaceImages();
//     }
// });

</script>