<template>
    <div @click="navigate"
        class="flex w-full items-center justify-between cursor-pointer rounded-lg p-2 max-w-[700px] mx-auto bg-[#e5d9e7]">
        <div class="flex items-center">
            <v-icon icon="fa fa-location-pin" class="text-mainblue text-2xl phone:text-[2em]" />
            <div class="flex flex-col ml-2">
                <h1 class="font-semibold text-sm five:text-lg">{{ result.name }}</h1>
                <p class="text-xs opacity-75">{{ result.address }}</p>
            </div>
        </div>
        <button @click="navigate"
            class="text-xs font-semibold text-mainblue hover:bg-mainblue hover:text-white duration-300 border border-mainblue rounded-lg px-2 py-1 phone:text-sm phone:px-3 phone:py-2">
            >
            View Details
        </button>
    </div>
</template>

<script lang="ts" setup>
import type { PlaceRes } from '@/utils/types';
import { useRouter } from 'vue-router';

const props = defineProps<{
    result: PlaceRes;
}>();

const router = useRouter();

const navigate = () => {
    router.push({
        path: `/places/${props.result.id}`,
        query: {
            name: props.result.name,
            address: props.result.address,
            lat: props.result.location.lat,
            lng: props.result.location.lng,
        }
    });
};

</script>