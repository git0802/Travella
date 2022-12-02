<template>
    <div class="md:flex grid xs:grid-cols-2 gap-y-6 five:grid-cols-3 w-full justify-between py-11 gap-x-2">
        <div class="flex flex-col max-w-[300px] xs:items-start items-center">
            <h1 class="text-xl font-semibold relative">Travella
                <v-icon size="14" class=" text-mainblue absolute right-2 -top-1" icon="fas fa-paper-plane" />
            </h1>
            <p class="text-sm mt-8">We always make our customer happy by providing as many choices as possible</p>
            <div class="flex items-center mt-8 text-mainblue gap-x-4">
                <a href="https://www.ndungutsecharles.me/" rel="noreferrer" target="_blank">
                    <v-icon icon="fas fa-globe" />
                </a>
                <a href="https://github.com/NdungutseCharles103" rel="noreferrer" target="_blank">
                    <v-icon size="40" icon="fab fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/" rel="noreferrer"
                    target="_blank">
                    <v-icon icon="fab fa-linkedin" />
                </a>
            </div>
        </div>
        <div class="flex flex-col max-w-[300px] xs:items-start items-center">
            <h1 class="text-xl font-bold">About</h1>
            <div class="flex flex-col mt-8 gap-y-3 xs:items-start items-center">
                <p class="text-sm">About Us</p>
                <p class="text-sm">Features</p>
                <p class="text-sm">News</p>
                <p class="text-sm">Menu</p>
            </div>
        </div>
        <div class="flex flex-col max-w-[300px] xs:items-start items-center">
            <h1 class="text-xl font-bold">Company</h1>
            <div class="flex flex-col mt-8 gap-y-3 xs:items-start items-center">
                <p class="text-sm">Why Travella</p>
                <p class="text-sm">Partner With Us</p>
                <p class="text-sm">FAQ</p>
                <p class="text-sm">Blog</p>
            </div>
        </div>
        <div class="flex flex-col max-w-[300px] xs:items-start items-center">
            <h1 class="text-xl font-bold">Support</h1>
            <div class="flex flex-col mt-8 gap-y-3 xs:items-start items-center">
                <p class="text-sm">Support Center</p>
                <p class="text-sm">Feeback</p>
                <p class="text-sm">Contact Us</p>
                <p class="text-sm">Account</p>
                <p class="text-sm">Accessibility</p>
            </div>
        </div>
        <div class="flex flex-col max-w-[300px] xs:items-start items-center">
            <h1 class="text-xl font-bold">Get in Touch</h1>
            <div class="flex flex-col mt-8 gap-y-3 xs:items-start items-center">
                <p class="text-sm">Question or feedback? We'd love to hear from you</p>
                <div class="flex items-center border-2 p-1 rounded-[2em]">
                    <input class=" outline-none bg-transparent px-2 text-sm w-full" type="email"
                        placeholder="Email address" name="" id="">
                    <button class="bg-mainblue text-white p-2 rounded-3xl text-sm font-semibold">
                        <v-icon size="25" icon="fas fa-paper-plane" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>