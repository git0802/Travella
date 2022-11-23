<template>
    <DashLayoutVue :active="`notifications`" :linear="linear" :set-linear="setLinear">

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