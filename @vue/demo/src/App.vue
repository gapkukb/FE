<template>
  <Layout />
</template>
<script lang="ts">
import Layout from './pages/Layout';
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
</script>
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