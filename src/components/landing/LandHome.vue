<template>
    <div
        class="w-full flex pt-11 bg-gradient-to-r from-mainwhite to-[#fcf5fa] px-[5%] justify-between relative min-h-[95vh]">
        <div class="w-1/2 flex flex-col pt-11">
            <button class="bg-red-200 rounded-3xl px-4 py-[0.7em] w-fit text-sm text-red-600">
                Explore the world
                <v-icon size="14" class="ml-2" icon="fas fa-arrow-right" />
            </button>
            <h1 class="text-4xl xtab:text-[3em] font-bold mt-11 leading-relaxed">
                It's time to travel the world with Travella,
                Go ahead and book your next trip
                <v-icon size="54" class=" -rotate-45 text-mainblue" icon="fas fa-plane" />
            </h1>
            <button class=" bg-mainblue w-fit py-3 px-6 rounded-3xl text-white mt-4">
                Get Started
                <v-icon size="14" class="ml-2" icon="fas fa-arrow-right" />
            </button>
            <p class="text-xl mt-5 font-light">
                We always make our custoomer happy by providing as many choices as possible
            </p>
            <div class="py-4 px-7 bg-white shadow-xl rounded-[3em] mt-6 flex items-center justify-between">
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
                <button class=" bg-mainblue rounded-full text-white py-4 px-[1.1em]">
                    <v-icon size="19" class="" icon="fa fa-search" />
                </button>
            </div>
        </div>
        <img src="/travelgirl.png" class="absolute right-[5%] w-2/5" alt="">
        <!-- <img src="/tg.png" alt=""> -->
    </div>
</template>

<script lang="ts" setup>
</script>