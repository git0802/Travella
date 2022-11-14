<template>
    <AuthLayoutVue>
        <form @submit="onSubmit" class="flex flex-col rounded-lg mdgra p-5 max-w-[500px] md:w-1/2 w-11/12 border-2">
            <h1 class="text-xl font-semibold relative mx-auto">Travella
                <v-icon size="14" class=" text-mainblue absolute right-2 -top-1" icon="fas fa-paper-plane" />
            </h1>
            <h1 class="text-center text-mainblue font-semibold text-lg mt-4">Register to Travella</h1>
            <p class="text-sm text-center">Join the travelling community and explore the world</p>
            <div class="flex flex-col w-full mt-5">
                <label for="">Full Names</label>
                <input type="text"
                    class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-4 py-2 border border-gray-300 mt-2"
                    v-model="names" placeholder="Email" />
            </div>
            <div class="flex flex-col w-full mt-5">
                <label for="">Email</label>
                <input type="email"
                    class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-4 py-2 border border-gray-300 mt-2"
                    v-model="email" placeholder="Email" />
            </div>
            <div class="flex flex-col w-full mt-5">
                <label for="">Password</label>
                <input v-model="password" type="password"
                    class="w-full rounded-lg outline-none focus:border-mainblue duration-300 px-4 py-2 border border-gray-300 mt-2"
                    placeholder="Password" />
            </div>
            <p class="mt-4 text-sm text-red-500 text-center" :ref="error">{{ error }}</p>
            <button :disabled="isLoading"
                :class="[isLoading && 'bg-mainblue/50', 'bg-mainblue  px-6 py-3 text-white rounded-lg mt-8']"
                @click="onSubmit">
                Signup
            </button>
            <p class="textl-lg  text-center my-2">Or</p>
            <div className="flex justify-center">
                <div className="rounded-md  mr-2 flex items-center bg-white pr-3 border-2 hover:shadow cursor-pointer">
                    <GoogleVue />
                    <span>Sign in with Google</span>
                </div>
            </div>
            <div className="flex w-full items-center justify-between mt-5">
                <span>Don't have an account? </span>
                <RouterLink to="/login" className="text-mainblue underline">Login</RouterLink>
            </div>
        </form>
    </AuthLayoutVue>
</template>

<script setup lang="ts">
import AuthLayoutVue from '@/Layouts/AuthLayout.vue';
import GoogleVue from '@/components/common/icons/Google.vue'
import { reactive, ref, watch } from "vue";
import router from '@/router';

const password = ref('');
const email = ref('');
const names = ref('');
const error = ref('');

const isLoading = ref(false);

watch(
    () => password,
    () => console.log('val', password.value)
)

const onSubmit = async (e: any) => {
    e.preventDefault();
    // set loading true
    isLoading.value = true
    if (!email.value || !password.value || !names.value) {
        isLoading.value = false
        return error.value = 'Please fill all fields';
    }
    try {
        const res = await fetch('http://localhost:3434/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
                names: names.value
            })
        })

        const data = await res.json();
        isLoading.value = false
        console.log('data', data);
        if (data.data.token) {
            localStorage.setItem('token', data.data.token);
            router.push('/dashboard')
        }
    } catch (error) {
        console.log(error);
        isLoading.value = false
    }
}

</script>

