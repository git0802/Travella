<template>
    <slot v-if="!loading" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref(true);

</script>