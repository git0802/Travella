<template>
    <DashLayoutVue :active="`notifications`" :linear="false">
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

</script>