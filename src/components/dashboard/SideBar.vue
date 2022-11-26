<script lang="ts" setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps<{
    linear?: boolean,
    setLinear?: (val: boolean) => void,
    active: string,
}>()

const navigate = (path: string) => {
    props.setLinear && props.setLinear(true);
    router.push(path);
}

const goHome = ()=> router.push('/dashboard')

</script>

<template>
    <div class="flex flex-col py-3 justify-between border-r-2 border-[#d6d3da] px-1">
        <div class="flex flex-col">
            <div @click="goHome" class="flex cursor-pointer">
                <img class="w-[80px] mx-auto xtab:flex hidden" src="/logo.svg" alt="">
                <img class="w-[30px] mx-auto xtab:hidden" src="/favicon.svg" alt="">
            </div>
            <div class="mt-11 flex flex-col">
                <button @click="() => navigate('/dashboard')"
                    :class="`flex rounded-lg w-fit xtab:w-[unset] hover:bg-active hover:text-white duration-300 mt-1 items-center px-3 py-2 ${active === 'home' && 'bg-active text-white'}`">
                    <v-icon size="14" :class="active === 'home' ? 'text-white' : `text`" icon="fas fa-home" />
                    <p class="ml-4 truncate text-sm xtab:flex hidden items-end">Home</p>
                </button>
                <button @click="() => navigate('/search')"
                    :class="`flex rounded-lg w-fit xtab:w-[unset] hover:bg-active hover:text-white duration-300 mt-1 items-center px-3 py-2 ${active === 'search' && 'bg-active text-white'}`">
                    <v-icon size="14" :class="active === 'search' ? 'text-white' : `text`" icon="fas fa-search" />
                    <p class="ml-4 truncate text-sm xtab:flex hidden items-end">Find Places</p>
                </button>
                <button @click="() => navigate('/notifications')"
                    :class="`flex rounded-lg w-fit xtab:w-[unset] hover:bg-active hover:text-white duration-300 mt-1 items-center px-3 py-2 ${active === 'notifications' && 'bg-active text-white'}`">
                    <v-icon size="14" :class="active === 'notification' ? 'text-white' : `text`" icon="fas fa-bell" />
                    <p class="ml-4 truncate text-sm xtab:flex hidden items-end">Notification</p>
                </button>
                <button @click="() => navigate('/saved')"
                    :class="`flex rounded-lg w-fit xtab:w-[unset] hover:bg-active hover:text-white duration-300 mt-1 items-center px-3 py-2 ${active === 'saved' && 'bg-active text-white'}`">
                    <v-icon size="14" :class="active === 'saved' ? 'text-white' : `text`" icon="fas fa-heart" />
                    <p class="ml-4 truncate text-sm xtab:flex hidden items-end">Saved Places</p>
                </button>
                <button @click="() => navigate('/account')"
                    :class="`flex rounded-lg w-fit xtab:w-[unset] hover:bg-active hover:text-white duration-300 mt-1 items-center px-3 py-2 ${active === 'account' && 'bg-active text-white'}`">
                    <v-icon size="14" :class="active === 'account' ? 'text-white' : `text`" icon="fas fa-user" />
                    <p class="ml-4 truncate text-sm xtab:flex hidden items-end">Account</p>
                </button>
                <button @click="() => navigate('/settings')"
                    :class="`flex rounded-lg w-fit xtab:w-[unset] hover:bg-active hover:text-white duration-300 mt-1 items-center px-3 py-2 ${active === 'settings' && 'bg-active text-white'}`">
                    <v-icon size="14" :class="active === 'settings' ? 'text-white' : `text`" icon="fas fa-sliders-h" />
                    <p class="ml-4 truncate text-sm xtab:flex hidden items-end">Settings</p>
                </button>
            </div>
        </div>
        <div class="flex flex-col">
            <button
                class="flex w-fit xtab:w-[unset] justify-center rounded-lg items-center px-3 py-2 bg-active text-white text-sm">
                <span class="xtab:flex hidden">Upgrade to Pro</span>
                <v-icon size="14" class="text-white xtab:hidden" icon="fas fa-paper-plane" />
            </button>
        </div>
    </div>
</template>
