<template>
    <div class="flex w-full xtab:flex-row flex-col p-6 gap-y-6">
        <div class="flex flex-col gap-y-4 laptop:w-1/2">
            <h2 class="xtab:text-center font-semibold gap-x-2">
                <v-icon size="15" icon="fa fa-user" class="text-mainblue" />
                <span class="ml-3">Personal Details</span>
            </h2>
            <div class="flex">
                <h2 class="font-semibold">Names: </h2>
                <h2 class="ml-3">{{ user?.names }}</h2>
            </div>
            <div class="flex">
                <h2 class="font-semibold">Email: </h2>
                <h2 class="ml-3">{{ user?.email }}</h2>
            </div>
        </div>
        <div class="flex flex-col gap-y-4 laptop:w-1/2">
            <h2 class="xtab:text-center font-semibold gap-x-2">
                <v-icon size="15" icon="fa fa-edit" class="text-mainblue" />
                <span class="ml-3">Edit Personal Details</span>
            </h2>
            <div class="flex flex-col w-full gap-y-4">
                <div class="flex flex-col w-full max-w-[500px]">
                    <label class="text-sm ml-2" for="">Names</label>
                    <input type="text"
                        class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-2 py-2 border-2 border-mainblue/30 border-solid mt-2"
                        placeholder="Names" />
                </div>
                <div class="flex flex-col w-full max-w-[500px]">
                    <label class="text-sm ml-2" for="">Old Password</label>
                    <input type="password"
                        class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-2 py-2 border-2 border-mainblue/30 border-solid mt-2"
                        placeholder="Old Password" />
                </div>
                <div class="flex flex-col w-full max-w-[500px]">
                    <label class="text-sm ml-2" for="">New Passwprd</label>
                    <input type="password"
                        class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-2 py-2 border-2 border-mainblue/30 border-solid mt-2"
                        placeholder="New Passwprd" />
                </div>
                <div class="flex flex-col w-full max-w-[500px]">
                    <label class="text-sm ml-2" for="">Confirm New Passwprd</label>
                    <input type="password"
                        class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-2 py-2 border-2 border-mainblue/30 border-solid mt-2"
                        placeholder="New Passwprd" />
                </div>
                <button
                class="bg-mainblue xtab:mx-auto w-fit px-5 py-2 hover:shadow-md shadow-mainblue text-white"
                >
                    Save Changes
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';


const userStore = useUserStore()
const { user } = storeToRefs(userStore);
</script>