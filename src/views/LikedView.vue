<template>
    <DashLayoutVue :active="`saved`" :linear="linear" :set-linear="setLinear">
        <div class="flex w-full">
            Liked
        </div>
    </DashLayoutVue>
</template>

<script lang="ts" setup>
import DashLayoutVue from '@/Layouts/DashLayout.vue';
import { ref } from 'vue';

const linear = ref(false);

const setLinear = (val: boolean) => {
    linear.value = val;
};
</script>