<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router';
import { useUserStore } from './stores/user';
import { whiteList } from './utils';

const { user, fetchCurUser } = useUserStore();

router.beforeEach( async(to, from, next) => {
  await fetchCurUser();
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
