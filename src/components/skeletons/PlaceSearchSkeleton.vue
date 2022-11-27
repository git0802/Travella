<template>
    <div class="flex flex-col w-full items-center mt-6">
        <!-- <div class="flex rounded-md flex-col mt-2 relative w-[200px] h-11 panim">
            <div class="anim h-full w-full"></div>
        </div> -->
        <div class=" flex flex-col w-full gap-y-3 mt-6">
            <PlacerowSkeletonVue />
            <PlacerowSkeletonVue />
            <PlacerowSkeletonVue />
            <PlacerowSkeletonVue />
            <PlacerowSkeletonVue />
            <PlacerowSkeletonVue />
        </div>
    </div>
</template>

<script lang="ts" setup>
import PlacerowSkeletonVue from './PlacerowSkeleton.vue';
</script>