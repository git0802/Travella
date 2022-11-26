<template>
    <DashLayoutVue :active="`notifications`" :linear="linear" :set-linear="setLinear">
        <div class="p-3">
            <h1 class="font-semibold text-lg">Notifications</h1>
            <div class="">
                <p class="text-sm">No new notifications</p>
            </div>
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