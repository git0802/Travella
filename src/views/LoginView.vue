<template>
    <div class="">
        <h1>LoginView</h1>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const email = ref("");
const password = ref("");

const login = () => {
	// store.dispatch("login", { email: email.value, password: password.value });
};

</script>