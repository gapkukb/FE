import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import storage from 'shared/storage';
import apis from '@/apis';
import router from '@/router';

const userInfoKey = 'userInfo';

export const useUserStore = defineStore('user', () => {
  const _user: model.UserInfo = storage.getItem({ key: userInfoKey, defaultValue: {} });
  const user = ref(_user);

  const accessable = computed(() => !!user.value.username);

  async function login() {
    user.value = await apis.login();
    storage.userName = user.value.username;
  }

  async function logout() {
    storage.removeItem({ key: userInfoKey });
    return apis.logout().then(() => {
      router.push('/');
    });
  }

  async function getUser() {
    user.value = await apis.login();
    storage.userName = user.value.username;
  }

  async function updateUser() {
    user.value = await apis.login();
    storage.userName = user.value.username;
  }

  return {
    accessable,
    userInfo: user,
    login,
    logout,
    getUser,
    updateUser,
  };
});
