<script setup lang="ts">
import DashLayoutVue from '@/Layouts/DashLayout.vue';
import FeedVue from '@/components/dashboard/Feed.vue';
import { onMounted, ref } from 'vue';
import { handlePermission } from '@/utils/permissions';
import type { Location } from "@/utils/types";
import { usePlaceStore } from '@/stores/places';

const { getFetchedNearby, nearby } = usePlaceStore()

const linear = ref(false);

const setLinear = (val: boolean) => {
  linear.value = val;
};

onMounted(async () => {
  const isLocationGranted = await handlePermission('geolocation');
  let location: Location;
  if (isLocationGranted) {
    console.log('Location granted');
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      location = { lat: position.coords.latitude, lng: position.coords.longitude }
      if (nearby.length === 0) getFetchedNearby(location);
    });
  }
})

</script>
<template>
  <DashLayoutVue :linear="linear" :setLinear="setLinear">
    <div class="flex w-full">
      <div class="flex flex-col w-full pl-6">
        <div class="flex w-full items-center justify-between">
          <div class="flex flex-col">
            <h1 class="font-semibold text-xl">Hello, Sobuj</h1>
            <p class="text-xs opacity-75">Welcome back!</p>
          </div>
          <div class="flex items-center">
            <div class="px-4 py-2 flex items-center rounded-md bg-mainblue/10">
              <input class="text-sm outline-none pr-2" type="text" placeholder="Search">
              <v-icon size="14" class="text-mainblue" icon="fas fa-search" />
            </div>
            <button class="p-2 ml-2 rounded-md bg-mainblue/10 px-3">
              <v-icon size="20" class="text-mainblue" icon="fas fa-bell" />
            </button>
            <button class="p-2 ml-2 rounded-md bg-mainblue/10 px-3">
              <v-icon size="20" class="text-mainblue" icon="fas fa-envelop" />
            </button>
          </div>
        </div>
        <FeedVue />
      </div>
    </div>
  </DashLayoutVue>
</template>
