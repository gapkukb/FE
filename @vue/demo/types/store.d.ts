import type { stores } from '@stores/index';

declare module 'vue' {
  interface ComponentCustomProperties {
    $store: typeof stores;
  }
}
