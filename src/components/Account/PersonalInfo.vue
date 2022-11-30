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
                <span class="ml-3">Change Password</span>
            </h2>
            <div class="flex flex-col w-full gap-y-4">
                <!-- <div class="flex flex-col w-full max-w-[500px]">
                    <label class="text-sm ml-2" for="">Names</label>
                    <input type="text"
                        class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-2 py-2 border-2 border-mainblue/30 border-solid mt-2"
                        v-model="newInfo.names"
                        placeholder="Names" />
                </div> -->
                <div class="flex flex-col w-full max-w-[500px]">
                    <label class="text-sm ml-2" for="">Old Password</label>
                    <input type="password"
                        class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-2 py-2 border-2 border-mainblue/30 border-solid mt-2"
                        v-model="newInfo.oldPassword" autocomplete="false" placeholder="Old Password" />
                </div>
                <div class="flex flex-col w-full max-w-[500px]">
                    <label class="text-sm ml-2" for="">New Passwprd</label>
                    <input type="password"
                        class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-2 py-2 border-2 border-mainblue/30 border-solid mt-2"
                        autocomplete="false" v-model="newInfo.newPassword" placeholder="New Passwprd" />
                </div>
                <div class="flex flex-col w-full max-w-[500px]">
                    <label class="text-sm ml-2" for="">Confirm New Passwprd</label>
                    <input type="password"
                        class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-2 py-2 border-2 border-mainblue/30 border-solid mt-2"
                        autocomplete="false" v-model="newInfo.confirmPassword" placeholder="New Passwprd" />
                </div>
                <p class="text-red-600 ml-2">{{ status.error }}</p>
                <p class="text-green-600 ml-2">{{ status.success }}</p>
                <button
                    @click="changePassword"
                    :disabled="status.loading"
                    :class="`${status.loading?'bg-mainblue/50':'bg-mainblue/90'} rounded-lg duration-300 hover:bg-mainblue w-fit px-5 py-2 hover:shadow-md shadow-mainblue text-white`">
                    Save Changes
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user';
import type { UserInfo } from '@/utils/types';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';


const userStore = useUserStore()
const { user } = storeToRefs(userStore);

const newInfo = reactive({
    names: user.value?.names,
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
})
const status = reactive({
    loading: false,
    error: '',
    success: '',
})

const changePassword = async () => {
    status.error = '';
    if (newInfo.newPassword !== newInfo.confirmPassword) {
        status.error = 'Passwords do not match'
        return
    }
    if(newInfo.newPassword.trim() === '' || newInfo.oldPassword.trim() === ''){
        status.error = ' Passwords cannot be empty'
        return
    }
    if (newInfo.newPassword !== '' && newInfo.oldPassword === '') {
        status.error = 'Please enter your old password'
        return
    }
    status.loading = true
    const data = await userStore.updatePasword(newInfo.oldPassword, newInfo.newPassword)
    if (data.error) {
        status.error = data.error
        status.loading = false
        newInfo.oldPassword = ''
        newInfo.newPassword = ''
        newInfo.confirmPassword = ''
    } else {
        status.success = 'Password updated successfully'
        status.loading = false
    }
}

</script>