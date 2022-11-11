<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment"
    >
      increment
    </button>
    <p>{{store.count}}</p>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { count, doubleCount, increment} = store

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
