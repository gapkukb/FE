/// <reference types="vite/client" />

declare module global {
  import { Directive } from 'vue';
  export type NamedObjectDirective<T = any, V = any> = Directive<T, V> & {
    name: string;
  };
}
