<script setup lang="ts">
import DashLayoutVue from '@/Layouts/DashLayout.vue';
import FeedVue from '@/components/dashboard/Feed.vue';
import { onMounted, reactive, watch } from 'vue';
import { handlePermission, storeAcceptedGeoLocation } from '@/utils/permissions';
import type { Location } from "@/utils/types";
import { usePlaceStore } from '@/stores/places';
import { useUserStore } from '@/stores/user';
import router from '@/router';

const state = reactive({
  searchInput: '',
})


watch(
  () => state.searchInput,
  (val) => {
    console.log('val', val);
  }
)

function search() {
  if (state.searchInput.trim() !== '') {
    console.log('searching');
    router.push({
      name: 'search',
      query: {
        q: state.searchInput
      },
    });
  }
}

const { getFetchedNearby, nearby, setAcceptedLoc, setLoading } = usePlaceStore()
const { user } = useUserStore()


onMounted(async () => {
  const isLocationGranted = await handlePermission('geolocation');
  let location: Location;
  if (isLocationGranted) {
    console.log('Location granted');
    navigator.geolocation.getCurrentPosition((position) => {
      setAcceptedLoc(true);
      storeAcceptedGeoLocation();
      console.log(position);
      location = { lat: position.coords.latitude, lng: position.coords.longitude }
      if (nearby.length === 0) getFetchedNearby(location);
    });
  } else {
    setLoading(false);
  }
})

</script>
<template>
  <DashLayoutVue :linear="false" :active="`home`" >
    <div class="flex w-full">
      <div class="flex flex-col w-full five:px-6 px-2">
        <div class="flex w-full five:items-center justify-between  five:flex-row flex-col-reverse">
          <div class="flex flex-col five:mt-0 mt-4">
            <h1 class="font-semibold tablet:text-xl">Hello, {{ user?.names.split(' ')[0]??'Guest' }}</h1>
            <p class="text-xs opacity-75">Welcome back!</p>
          </div>
          <div class="flex items-center five:w-fit w-full">
            <div class="px-4 five:w-fit w-full py-2  flex items-center rounded-md bg-mainblue/10">
              <input v-model="state.searchInput" class="text-sm five:w-fit w-full outline-none pr-2" type="text"
                @keyup.enter="search" placeholder="Search">
              <v-icon @click="search" class="text-mainblue text-base -translate-y-1" icon="fas fa-search" />
            </div>
            <RouterLink to="/notifications" class="tablet:p-2 tablet:py-2 py-[0.4em] ml-2 rounded-md bg-mainblue/10 px-3">
              <v-icon size="20" class="text-mainblue" icon="fas fa-bell" />
            </RouterLink>
            <!-- <button class="tablet:p-2 xs:flex hidden tablet:py-2 py-[0.4em] ml-2 rounded-md bg-mainblue/10 px-3">
              <v-icon size="20" class="text-mainblue" icon="fas fa-envelop" />
            </button> -->
          </div>
        </div>
        <FeedVue />
      </div>
    </div>
  </DashLayoutVue>
</template>
