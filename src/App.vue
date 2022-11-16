<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router';
import { useUserStore } from './stores/user';
import { whiteList } from './utils';

const { fetchCurUser } = useUserStore();

router.beforeEach( async(to, from, next) => {
  const user = await fetchCurUser();
  if (whiteList.includes(to.path) && !user)
    return next();
  else if(user)
    if(whiteList.includes(to.path))
      return next('/dashboard');
    else
      return next();
  else
    if(!whiteList.includes(to.path))
      return next('/');
    next();
});


</script>

<template>
  <RouterView />
</template>
