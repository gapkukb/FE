<template>
  <ul>
    <li
      v-for="code in codesList"
      :key="code.code"
    >
      <button @click="$i18next.changeLanguage(code.code)">{{ code.displayName }}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import codesList from '@/locales/codes';
</script>
<script lang="ts">
export default {
  name: 'LanguagesSelector',
};
</script>
