<template>
    <div class="flex w-full justify-between py-11 gap-x-2">
        <div class="flex flex-col max-w-[300px]">
            <h1 class="text-xl font-semibold relative">Travella
                <v-icon size="14" class=" text-mainblue absolute right-2 -top-1" icon="fas fa-paper-plane" />
            </h1>
            <p class="text-sm mt-8">We always make our customer happy by providing as many choices as possible</p>
            <div class="flex items-center mt-8 text-mainblue gap-x-4">
                <v-icon icon="fab fa-instagram" />
                <v-icon size="40" icon="fab fa-facebook" />
                <v-icon icon="fab fa-twitter" />
            </div>
        </div>
        <div class="flex flex-col max-w-[300px]">
            <h1 class="text-xl font-bold">About</h1>
            <div class="flex flex-col mt-8 gap-y-3">
                <p class="text-sm">About Us</p>
                <p class="text-sm">Features</p>
                <p class="text-sm">News</p>
                <p class="text-sm">Menu</p>
            </div>
        </div>
        <div class="flex flex-col max-w-[300px]">
            <h1 class="text-xl font-bold">Company</h1>
            <div class="flex flex-col mt-8 gap-y-3">
                <p class="text-sm">Why Travella</p>
                <p class="text-sm">Partner With Us</p>
                <p class="text-sm">FAQ</p>
                <p class="text-sm">Blog</p>
            </div>
        </div>
        <div class="flex flex-col max-w-[300px]">
            <h1 class="text-xl font-bold">Support</h1>
            <div class="flex flex-col mt-8 gap-y-3">
                <p class="text-sm">Support Center</p>
                <p class="text-sm">Feeback</p>
                <p class="text-sm">Contact Us</p>
                <p class="text-sm">Account</p>
                <p class="text-sm">Accessibility</p>
            </div>
        </div>
        <div class="flex flex-col max-w-[300px]">
            <h1 class="text-xl font-bold">Get in Touch</h1>
            <div class="flex flex-col mt-8 gap-y-3">
                <p class="text-sm">Question or feedback? We'd love to hear from you</p>
                <div class="flex items-center border-2 p-1 rounded-[2em]">
                    <input class=" outline-none bg-transparent px-2 text-sm w-full" type="email" placeholder="Email address" name="" id="">
                    <button
                        class="bg-mainblue text-white p-2 rounded-3xl text-sm font-semibold"
                    >
                        <v-icon size="25" icon="fas fa-paper-plane" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>