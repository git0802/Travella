<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router';
import { useUserStore } from './stores/user';
import { whiteList } from './utils';

const { user } = useUserStore();

router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path)) {
    console.log('whiteList.includes(to.path)', whiteList.includes(to.path));
    next();
  } else {
    console.log('!whiteList.includes(to.path)', whiteList.includes(to.path));
    if (user) {
      next();
    } else {
      next('/login');
    }
  }
});


</script>

<template>
  <header>

  </header>
  <RouterView />
</template>
