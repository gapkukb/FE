<template>
  <Suspense>
    <template #default>
      <App />
    </template>
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
import App from './App.vue';
export default {
  name: 'app-loading',
  components: {
    App,
  },
};
</script>
