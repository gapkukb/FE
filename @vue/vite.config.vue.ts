//@ts-ignore
import define from '../vite.config.common';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import deepmerge from 'deepmerge';

// https://vitejs.dev/config/
export default function () {
  return define({
    plugins: [vue(), vueJsx()],
  });
}
