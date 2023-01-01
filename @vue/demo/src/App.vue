<template>
  <Layout />
</template>
<script lang="ts">
import Layout from './pages/layout/index.vue';
import { i18nextPromise } from '@vue/shared/i18next';
import Languages from './components/Languages';
export default {
  name: 'App',
  components: { Layout, Languages },
  async setup() {
    await i18nextPromise;
    return {};
  },
};
await i18nextPromise;
</script>
