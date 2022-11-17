<template>
    <div class="w-full flex bg-gradient-to-l from-white via-white  to-[#dad7dc] min-h-screen p-5">
        <SideBarVue :active="`home`" :set-linear="setLinear" />
        <LinearLoader v-if="linear" />
        <slot />
    </div>
</template>

<script lang="ts" setup>

import SideBarVue from '@/components/dashboard/SideBar.vue';
import LinearLoader from '@/components/common/LinearLoader.vue';

defineProps<{
    linear?: boolean;
    setLinear?: (val: boolean) => void;
}>();

</script>