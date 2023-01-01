import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLocaleStore = defineStore('locale', () => {
  const list = [
    {
      code: 'zh',
      display: '中文',
      flag: '',
      phoneCode: '',
      zipCode: '',
    },
  ];
  const current = ref(list[0]);

  function update() {}

  return { list, current, update };
});
