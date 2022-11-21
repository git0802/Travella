<template>
    <div class="flex w-full bg-mainwhite sticky top-0 z-50 items-center h-[80px] justify-between px-[5%]">
        <div @click="toggleMenu" class="z-50 top-5 xtab:hidden absolute right-3 cursor-pointer">
            <v-icon icon="fa fa-bars" />
        </div>
        <div @click="toggleMenu" :class="`flex top-0 left-0 bottom-0 fixed right-0 xtab:hidden ${!isMobile&&'hidden'}`"></div>
        <div
            :class="`flex xtab:static absolute xtab:flex-row flex-col items-center justify-between w-full bg-inherit xtab:py-0 py-11 left-0 ${isMobile ? 'top-0' : '-top-[1000px]'} duration-500`">
            <div class="logo xtab:static fixed left-[5%] top-6  flex items-center">
                <h1 class="text-xl font-semibold relative">Travella
                    <v-icon size="14" class=" text-mainblue absolute right-2 -top-1" icon="fas fa-paper-plane" />
                </h1>
                <!-- <v-icon icon="fas fa-home" /> -->
            </div>
            <div class="flex items-center xtab:flex-row flex-col xtab:gap-y-0 gap-y-3 xtab:mt-0 mt-4">
                <RouterLink to="/landing#" class="">
                    About
                </RouterLink>
                <RouterLink to="/landing#" class="xtab:ml-11">
                    Services
                </RouterLink>
                <RouterLink to="/landing#" class="xtab:ml-11">
                    Pricing
                </RouterLink>
                <RouterLink to="/landing#" class="xtab:ml-11">
                    Contact
                </RouterLink>
            </div>
            <div class="flex items-center flex-col xtab:flex-row xtab:gap-y-0 gap-y-4 xtab:mt-0 mt-3">
                <RouterLink to="/login" class="">
                    Login
                </RouterLink>
                <RouterLink to="/register" class="xtab:ml-6 px-4 py-2 rounded-3xl bg-mainblue text-white">
                    Register
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isMobile = ref(false);

const toggleMenu = () => {
    isMobile.value = !isMobile.value;
};
</script>