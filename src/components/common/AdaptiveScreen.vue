<template>
    <div class="w-full h-screen flex items-center justify-center">
        <div class="flex cursor-pointer relative">
            <img class="md:w-[180px] w-[100px] mx-auto xtab:flex" src="/logo.svg" alt="">
            <div class="w-full mt-5 h-[4px] absolute top-full left-0">
                <v-progress-linear v-model="value" color="#411ef8" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const value = ref(0);

onMounted(() => {
    setInterval(() => {
        if (value.value === 99) return;
        value.value += 2;
    }, 100)
})
</script>