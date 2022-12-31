/* eslint-disable */
/* eslint-env node */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv, UserConfigExport } from 'vite';

import path from 'node:path';
import process from 'node:process';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import deepmerge from 'deepmerge';
import type { Options } from 'deepmerge';
import EnvDTS from 'vite-plugin-env-dts';

const root = process.cwd().split(path.sep).slice(-2).join(path.sep);
export const src = (pathname: string) => fileURLToPath(new URL(path.join(root, 'src', pathname), import.meta.url));

type CustomUserConfigFn = (context: ConfigEnv & { env: Record<string, string> }) => UserConfig | Promise<UserConfig>;

//TODO
//FIX ME:tailwind.config.js这里无法使用静态导入，import()动态导入提示路径不正确
// https://vitejs.dev/config/
export function define(configFn?: CustomUserConfigFn, option?: Options) {
  return defineConfig(async (context) => {
    let env = loadEnv(context.mode, process.cwd(), '');
    const newContext = {
      ...context,
      env,
    };

    const config: UserConfigExport = {
      plugins: [EnvDTS()],
      css: {
        postcss: {
          plugins: [
            tailwindcss,
            autoprefixer({}), // add options if needed
          ],
        },
      },
      optimizeDeps: {
        include: ['intersection-observer'],
        needsInterop: ['intersection-observer'],
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
    };
    const newConfig = (await configFn?.(newContext)) || {};
    return deepmerge(config, newConfig, option);
  });
}

export default define;
