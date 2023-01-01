<template>
  <v-layout>
    <AppSidebar />
    <AppHeader />
    <v-main>
      <RouterView class="app-main" />
    </v-main>
    <AppFooter />
  </v-layout>
</template>
<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';
import AppFooter from './AppFooter.vue';
</script>
<script lang="ts">
export default {
  name: 'AppFooter',
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
