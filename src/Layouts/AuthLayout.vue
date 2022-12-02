<template>
<div class="w-full flex auth min-h-screen justify-between flex-col">
    <div
        class="w-full px-11 py-8 flex items-center bg-gradient-to-r from-[#dad7dc] via-white  to-[#dad7dc] sticky top-0 z-30">
        <h1 class="text-xl font-semibold relative ">Travella
            <v-icon size="14" class=" text-mainblue absolute right-2 -top-1" icon="fas fa-paper-plane" />
        </h1>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-11">
        <slot />
    </div>
    <div class="px-[5%] border-t-slate-500/40 border-t-[1px] mt-11">
        <LandFooterVue />
        <CopyRightsVue />
    </div>
</div>
</template>

<script lang="ts" setup>
import LandFooterVue from '@/components/landing/LandFooter.vue';
import CopyRightsVue from '@/components/common/CopyRights.vue';
</script>