/* eslint-env node */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, UserConfigExport } from 'vite';
import DefineOptions from 'unplugin-vue-define-options/vite';

import path from 'node:path';
import process from 'node:process';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import deepmerge from 'deepmerge';

const root = process.cwd().split(path.sep).slice(-2).join(path.sep);
export const src = (pathname: string) => fileURLToPath(new URL(path.join(root, 'src', pathname), import.meta.url));

//TODO
//FIX ME:tailwind.config.js这里无法使用静态导入，import()动态导入提示路径不正确
// https://vitejs.dev/config/
export function define(config: UserConfigExport) {
  const newConfig = deepmerge<UserConfigExport>(
    {
      plugins: [DefineOptions()],
      css: {
        postcss: {
          plugins: [
            tailwindcss,
            autoprefixer({}), // add options if needed
          ],
        },
      },
      resolve: {
        alias: {
          '@': src(''),
          '@components': src('components'),
          '@utils': src('utils'),
          '@hooks': src('hooks'),
          '@apis': src('apis'),
          '@stores': src('stores'),
          '@assets': src('assets'),
          '@libs': src('libs'),
          '@pages': src('pages'),
          '@router': src('routers'),
          '@types': src('../types'),
        },
      },
    },
    config
  );
  return defineConfig(newConfig);
}

export default define;
