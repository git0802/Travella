<script setup lang="ts">
import DashLayoutVue from '@/Layouts/DashLayout.vue';
import FeedVue from '@/components/dashboard/Feed.vue';
import { ref } from 'vue';

const linear = ref(false);

const setLinear = (val: boolean) => {
  linear.value = val;
};
</script>
<template>
  <DashLayoutVue :linear="linear" :setLinear="setLinear">
    <div class="flex w-full">
      <div class="flex flex-col w-full px-6">
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
