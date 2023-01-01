<template>
  <v-app-bar color="grey-lighten-2"></v-app-bar>
</template>
<script setup lang="ts">
const title = 'This is Header';
</script>
<script lang="ts">
export default {
  name: 'AppHeader',
};
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
