<template>
    <div class="w-full bg-primary flex flex-col">
        <LandNavVue />
        <LandHomeVue />
        <div class="flex flex-col w-full mdgra pb-11">
        <LandServicesVue />
        <LandDestVue />
        </div>
        <LandExperienceVue />
        <LandFeed />
        <div class="flex w-full px-[5%] mdgra pt-11 flex-col">
            <div class="w-full flex flex-col items-center bg-[#fdf1f1] rounded-3xl py-11 shadow-md shadow-slate-100">
                <h1 class="xtab:text-[3em] text-2xl font-bold text-center w-4/5">Prepare Yourself & Let's Explore The Beauty Of The World</h1>
                <p class="my-4 text-center font-light">We have many special offers especially for you</p>
                <button class="bg-mainblue w-fit px-6 py-3 text-white rounded-xl">
                    <RouterLink to="/register" class="px-4 py-3 rounded-3xl bg-mainblue text-white mt-6">
                        Get Started
                    </RouterLink>
                </button>
            </div>
            <LandFooterVue />
        </div>
    </div>
</template>

<script lang="ts" setup>
import LandNavVue from '@/components/landing/LandNav.vue';
import LandHomeVue from '@/components/landing/LandHome.vue';
import LandServicesVue from '@/components/landing/LandServices.vue';
import LandDestVue from '@/components/landing/LandDest.vue';
import LandExperienceVue from '@/components/landing/LandExperience.vue';
import LandFeed from '@/components/landing/LandFeed.vue';
import LandFooterVue from '@/components/landing/LandFooter.vue';
</script>