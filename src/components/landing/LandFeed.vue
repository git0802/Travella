<template>
    <div class="flex w-full tablet:px-[5%] tablet:py-11 bg-gradient-to-r from-[#dedce0] via-white to-[#fcf5fa] items-center relative">
        <div class="flex tablet:py-0 py-5 flex-col md:w-1/2 tablet:w-2/3 w-full z-[5] bg-gradient-to-r px-3 tablet:px-0 h-full from-[#dedce0] via-white/70 to-[#fcf5fa]/50 md:bg-none">
            <h1 class="text-xl font-semibold text-mainblue">WHAT THEY SAY</h1>
            <h1 class="md:text-4xl text-xl font-bold mt-4">What Our Customer Say About Us &#128522;</h1>
            <p class="textlg font-light mt-8">
                "I'm a traveller and Travella helped me to find the best places to visit and the best hotels to stay in. I'm very happy with the service and I will use it again."
            </p>
            <div class="flex items-center mt-8">
                <h1 class="font-bold text-lg">Theresa Jordan</h1>
                <li class="ml-4">Food Enthusiast</li>
            </div>
            <div class="flex items-center text-yellow-500 gap-x-3">
                <v-icon size="14" icon="fa fa-star" />
                <v-icon size="14" icon="fa fa-star" />
                <v-icon size="14" icon="fa fa-star" />
                <v-icon size="14" icon="fa fa-star" />
                <v-icon size="14" icon="fa fa-star" />
            </div>
        </div>
        <div class="flex phone:w-1/2 w-full md:static absolute right-0">
            <img class="max-h-full" src="/says.png" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>