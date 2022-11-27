<script lang="ts" setup>
import DashLayoutVue from '@/Layouts/DashLayout.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import PersonalInfoVue from '@/components/Account/PersonalInfo.vue';

const route = useRoute();
const linear = ref(false);
const active = ref(route.params.section??'');
watch(
    ()=> route.params,
    (val) => {
        active.value = val.section??'';
        console.log(val);
    }
);

onMounted(()=> {
    console.log(route.params.section);
})

const setLinear = (val: boolean) => {
    linear.value = val;
};
</script>
<template>
    <DashLayoutVue :active="`account`" :linear="linear" :set-linear="setLinear">
        <div class="flex w-full flex-col">
            <div class="w-full h-fit flex px-2 phone:px-6 py-4 shadow-sm">
                <h1 class="text-lg font-semibold">Your Account</h1>
            </div>
            <div class="flex w-full h-full xtab:flex-row flex-col">
                <div class="flex xtab:flex-col xtab:h-full xtab:py-6 border-r-[1px] border-slate-300">
                    <RouterLink to="/account"
                    :class="`five:text-sm xtab:truncate text-xs py-2 xs:px-4 flex text-center hover:bg-[#dfe2f6] duration-300 ${active === '' &&'bg-[#dfe2f6]'}`"
                    >
                        Personal Information
                    </RouterLink>
                    <RouterLink to="/account/saved"
                    :class="`five:text-sm text-xs py-2 xs:px-4 flex text-center hover:bg-[#dfe2f6] ${active === 'saved' && 'bg-[#dfe2f6]'} duration-300 xtab:text-start`"
                    >
                        Saved Places
                    </RouterLink>
                    <RouterLink to="/account/security"
                    :class="`five:text-sm text-xs py-2 xs:px-4 flex text-center hover:bg-[#dfe2f6] duration-300 xtab:text-start ${active === 'security' && 'bg-[#dfe2f6]'}`"
                    >
                        Security
                    </RouterLink>

                </div>
                <PersonalInfoVue v-if="active===''" />
            </div>
        </div>
    </DashLayoutVue>
</template>
