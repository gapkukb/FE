import { TFunction, i18n, TOptions } from 'i18next';

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: TFunction;
    $i18next: i18n;
  }
}
