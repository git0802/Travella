<template>
    <div @click="navigate"
        class="flex flex-col five:max-w-[350px] max-w-[300px] w-full mx-auto tablet:min-w-[230px] min-w-[180px] cursor-pointer">
        <div class="flex relative w-full overflow-hidden rounded-2xl">
            <img v-if="place.images" class="object-cover w-full aspect-[9/6]" :src="place.images[0]" alt="">
            <div v-else class="w-full aspect-[9/6] flex items-center justify-center bg-mainblue/5">
                <v-icon class="text-4xl" icon="fa fa-image" />
            </div>
        </div>
        <div class="flex flex-col px-2 py-1">
            <h1 class="xs:text-lg font-semibold">{{ place.name }}</h1>
            <p class="font-semibold xs:text-sm text-xs">{{ place.address }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { PlaceRes } from '@/utils/types';
import { onMounted } from 'vue';
import { usePlaceStore } from '@/stores/places';
import { searchImages } from '@/utils/apifetches';
import { useRouter } from 'vue-router';
// get component props

const { setNearby, nearby } = usePlaceStore()

const props = defineProps<{
    place: PlaceRes;
}>();
const placeHolder = "http://www.bridgesdb.com/images/bridgesdb/picture-of-rialto-bridge-2011.jpg"

const getPlaceImages = async () => {
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

const router = useRouter();

const navigate = () => {
    router.push({
        path: `/places/${props.place.id}`,
        query: {
            name: props.place.name,
            address: props.place.address,
            lat: props.place.location.lat,
            lng: props.place.location.lng,
        }
    });
};

</script>