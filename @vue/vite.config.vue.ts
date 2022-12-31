//@ts-ignore
import define from '../vite.config.common';
import deepmerge from 'deepmerge';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const inherit: typeof define = function inherit(configFn, option) {
  return define(async (context) => {
    const config = (await configFn?.(context)) || {};
    return deepmerge({ plugins: [vue(), vueJsx()] }, config, option);
  }, option);
};

export default inherit;
