import { TFunction, i18n } from 'i18next';
import '@vue/runtime-core';

export {};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: TFunction;
    $i18next: i18n;
  }
}
