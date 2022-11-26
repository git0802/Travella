<template>
    <div class="grid fourk:grid-cols-6 large:grid-cols-4 laptop:grid-cols-3 five:grid-cols-2 gap-3 w-full">
        <CardSekeletonVue />
        <CardSekeletonVue />
        <CardSekeletonVue />
        <CardSekeletonVue />
        <CardSekeletonVue />
        <CardSekeletonVue />
        <CardSekeletonVue />
    </div>
</template>

<script lang="ts" setup>
import CardSekeletonVue from './CardSekeleton.vue';
</script>