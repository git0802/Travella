<template>
    <div class="w-full bg-primary flex flex-col">
        <LandNavVue />
        <LandHomeVue />
        <LandDemoVue />
    </div>
</template>

<script lang="ts" setup>
import LandNavVue from '@/components/landing/LandNav.vue';
import LandHomeVue from '@/components/landing/LandHome.vue';
import LandDemoVue from '@/components/landing/LandDemo.vue';
</script>