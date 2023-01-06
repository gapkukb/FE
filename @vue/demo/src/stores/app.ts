import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import i18next from 'i18next';

export const useAppStore = defineStore('app', () => {
  const config = ref({
    downloadUrl: 'http://xxx.com',
  });

  return { config };
});
