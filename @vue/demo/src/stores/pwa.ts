import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const usePwaStore = defineStore('pwa', () => {
  const config = ref({
    downloadUrl: 'http://xxx.com',
  });

  function update() {}

  return { config, update };
});
