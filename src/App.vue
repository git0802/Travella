<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router';
import { useUserStore } from './stores/user';
import { whiteList } from './utils';
import AdaptiveScreenVue from './components/common/AdaptiveScreen.vue';
import { ref } from 'vue';

const { fetchCurUser, isGuest } = useUserStore();
const ready = ref(false);

router.beforeEach(async (to, from, next) => {
  const user = await fetchCurUser();
  ready.value = true;
  if (whiteList.includes(to.path) && !user)
    return next();
  else if (user)
    if (whiteList.includes(to.path))
      return next('/dashboard');
    else
      return next();
  else
    if (!whiteList.includes(to.path) && !isGuest)
      return next('/');
  next();
});


</script>

<template>
  <RouterView v-if="ready" />
  <AdaptiveScreenVue v-else />
</template>
