<template>
    <div class="flex w-full bg-mainwhite sticky top-0 z-50 items-center py-6 justify-between px-[5%]">
        <div class="logo flex items-center">
            <h1 class="text-xl font-semibold relative">Travella
                <v-icon size="14" class=" text-mainblue absolute right-2 -top-1" icon="fas fa-paper-plane" />
            </h1>
            <!-- <v-icon icon="fas fa-home" /> -->
        </div>
        <div class="flex items-center ]">
            <RouterLink to="/landing#" class="">
                About
            </RouterLink>
            <RouterLink to="/landing#" class="ml-11">
                Services
            </RouterLink>
            <RouterLink to="/landing#" class="ml-11">
                Pricing
            </RouterLink>
            <RouterLink to="/landing#" class="ml-11">
                Contact
            </RouterLink>
        </div>
        <div class="flex items-center">
            <RouterLink to="/login" class="">
                Login
            </RouterLink>
            <RouterLink to="/register" class="ml-6 px-4 py-2 rounded-3xl bg-mainblue text-white">
                Register
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>