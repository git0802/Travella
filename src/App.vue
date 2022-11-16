<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router';
import { useUserStore } from './stores/user';
import { whiteList } from './utils';

const { fetchCurUser } = useUserStore();

router.beforeEach( async(to, from, next) => {
  const user = await fetchCurUser();
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
  <RouterView />
</template>
