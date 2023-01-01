<template>
  <v-navigation-drawer
    color="grey-darken-2"
    permanent
    :rail="rail"
  ></v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const title = 'This is AppSidebar';
const rail = ref(true);
document.onclick = function () {
  rail.value = !rail.value;
};
</script>
<script lang="ts">
export default {
  name: 'AppSidebar',
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
