<template>
    <AuthLayoutVue>
        <form @submit="onSubmit" class="flex flex-col rounded-lg mdgra p-5 max-w-[500px] md:w-1/2 w-11/12 border-2">
            <h1 class="text-xl font-semibold relative mx-auto">Travella
                <v-icon size="14" class=" text-mainblue absolute right-2 -top-1" icon="fas fa-paper-plane" />
            </h1>
            <h1 class="text-center text-mainblue font-semibold text-lg mt-4">Log into Travella</h1>
            <div class="flex flex-col w-full mt-5">
                <label class="px-2" for="">Email</label>
                <input type="email"
                    class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-4 py-2 border-2 border-mainblue/30 border-solid mt-2"
                    v-model="email" placeholder="Email" />
            </div>
            <div class="flex flex-col w-full mt-5">
                <label class="px-2" for="">Password</label>
                <input v-model="password" type="password"
                    class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-4 py-2 border-2 border-mainblue/30 border-solid mt-2"
                    placeholder="Password" />
            </div>
            <p class="mt-4 text-sm text-red-500 text-center" :ref="error">{{ error }}</p>
            <button :disabled="isLoading"
                :class="[isLoading && 'bg-mainblue/50', 'bg-mainblue  px-6 py-3 text-white rounded-lg mt-8']"
                @click="onSubmit">
                Login
            </button>
            <p class="textl-lg  text-center my-2">Or</p>
            <div className="flex justify-center">
                <div className="rounded-md  mr-2 flex items-center bg-white pr-3 border-2 hover:shadow cursor-pointer">
                    <GoogleVue />
                    <span>Sign in with Google</span>
                </div>
            </div>
            <p
            @click="continueAsGuest"
             class="mt-4 text-mainblue text-center cursor-pointer w-fit mx-auto">
                Continue as Guest
            </p>
            <div className="flex w-full items-center justify-between mt-5">
                <span>Don't have an account? </span>
                <RouterLink to="/register" className="text-mainblue underline">Signup</RouterLink>
            </div>
        </form>
    </AuthLayoutVue>
</template>

<script setup lang="ts">
import AuthLayoutVue from '@/Layouts/AuthLayout.vue';
import GoogleVue from '@/components/common/icons/Google.vue'
import { ref, watch } from "vue";
import router from '@/router';
import { RouterLink, useRoute } from 'vue-router';
import { api } from '@/utils';
import { setCookie } from '@/utils/cookies';
import { useUserStore } from '@/stores/user';

const { setUser, handleGuest, continueAsGuest } = useUserStore()

const password = ref('');
const email = ref('');
const error = ref('');
const isLoading = ref(false);


watch(
    () => password,
    () => console.log('val', password.value)
)

const onSubmit = async (e: any) => {
    e.preventDefault();
    isLoading.value = true;
    if (email.value.trim() === '' || password.value.trim() === '') {
        isLoading.value = false;
        return error.value = 'Please fill all fields';
    }
    try {
        const res = await api.post('/auth/login', {
            email: email.value,
            password: password.value
        })

        const data = await res.data;
        isLoading.value = false;
        if (data.data) {
            handleGuest('remove');
            setCookie('access_token', data.data, 365);
            setUser(data.user);
            console.log(data.user);
           return window.location.href='/dashboard'
        }
    } catch (err: any) {
        console.log(err);
        error.value = err.response?.data?.message?? 'Something went wrong';
        isLoading.value = false;
    }
}

</script>

