<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import router from './router';
import { useUserStore } from './stores/user';

const { user } = useUserStore();

if (!user) {
  router.push('/landing');
}

</script>

<template>
  <header>

  </header>
  <RouterView />
</template>
