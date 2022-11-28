<template>
    <div class="w-full flex bg-gradient-to-l overflow-hidden h-screen from-white via-white  to-[#dad7dc] min-h-screen  py-3 ">
        <SideBarVue :active="active??'home'" :set-linear="setLinear" />
        <LinearLoader v-if="linear" />
        <slot />
    </div>
</template>

<script lang="ts" setup>

import SideBarVue from '@/components/dashboard/SideBar.vue';
import LinearLoader from '@/components/common/LinearLoader.vue';
import { ref } from 'vue';

const props = defineProps<{
    active?: string;
    linear?: boolean;
}>();
const linear = ref(props.linear ?? false);

const setLinear = (val: boolean) => {
    linear.value = val;
};

</script>