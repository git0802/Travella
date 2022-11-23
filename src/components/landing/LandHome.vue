<template>
    <div
        class="w-full flex pt-11 bg-gradient-to-r from-mainwhite to-[#fcf5fa] md:px-[5%] justify-between relative min-h-[95vh]">
        <div class="md:w-1/2 z-[2] flex flex-col pt-11 md:bg-transparent bg-mainwhite/80 w-full md:items-start items-center">
            <button class="bg-red-200 rounded-3xl px-4 py-[0.7em] w-fit text-sm text-red-600">
                Explore the world
                <v-icon size="14" class="ml-2" icon="fas fa-arrow-right" />
            </button>
            <h1 class="text-2xl md:text-start md:px-0 px-3 xtab:text-[3em] font-bold mt-11 leading-relaxed">
                It's time to travel the world with Travella,
                Go ahead and book your next trip
                <v-icon size="" class="-rotate-45 text-mainblue xtab:text-4xl" icon="fas fa-plane" />
            </h1>
            <RouterLink to="/register" class=" bg-mainblue w-fit py-3 px-6 rounded-3xl text-white mt-4">
                Get Started
                <v-icon size="14" class="ml-2" icon="fas fa-arrow-right" />
            </RouterLink>
            <p class="text-xl mt-5 font-light md:px-0 px-3 text-center md:text-start">
                We always make our customer happy by providing as many choices as possible
            </p>
            <div class="py-4 px-7 bg-white shadow-xl rounded-[3em] mt-6 flex items-center justify-between five:flex-row flex-col">
                <div class="flex items-center">
                    <v-icon size="24" class="text-red-400" icon="fa fa-location-dot" />
                    <div class="flex flex-col ml-3">
                        <p class="font-light">Location
                            <v-icon size="13" class="" icon="fa fa-chevron-down" />
                        </p>
                        <p class="font-bold mt-2">Pontlanak, Indonesia</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <v-icon size="24" class="text-red-400" icon="fa fa-calendar-days" />
                    <div class="flex flex-col ml-3">
                        <p class="font-light">Location
                            <v-icon size="13" class="" icon="fa fa-chevron-down" />
                        </p>
                        <p class="font-bold mt-2">Pontlanak, Indonesia</p>
                    </div>
                </div>
                <button class=" bg-mainblue five:w-fit w-full five:mt-0 mt-3 rounded-full text-white py-4 px-[1.1em]">
                    <v-icon size="19" class="" icon="fa fa-search" />
                </button>
            </div>
        </div>
        <img src="/travelgirl.png" class="absolute right-[5%] md:w-2/5 top-1/2 -translate-y-1/2 bottom-1/2" alt="">
        <!-- <img src="/tg.png" alt=""> -->
    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

</script>