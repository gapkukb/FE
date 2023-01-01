//@ts-ignore
import define from '../vite.config.common';
import deepmerge from 'deepmerge';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers';
const inherit: typeof define = function inherit(configFn, option) {
  return define(async (context) => {
    const config = (await configFn?.(context)) || {};
    return deepmerge(
      {
        plugins: [vue(), vueJsx(), Components({ dts: 'types/components.d.ts', resolvers: [Vuetify3Resolver()] })],
      },
      config,
      option
    );
  }, option);
};

export default inherit;
