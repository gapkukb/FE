import i18next from 'i18next';
import type { InitOptions } from 'i18next';
import detector from 'i18next-browser-languagedetector';
import I18nextVue from 'i18next-vue';
import Backend from './Backend';
import type { App } from 'vue';

const options = { locales: {} };
export const i18nextPromise = i18next.use(detector).use(Backend as any);

export default function initI18next(app: App, locales: Record<string, () => Promise<unknown>>) {
  options.locales = locales;

  i18nextPromise.init({
    debug: import.meta.env.DEV,
    fallbackLng: 'zh',
    backend: {
      locales,
    },
  } as InitOptions);
  //   const lang = i18next.language;

  //   const path = Object.keys(locales).find((locale) => {
  //     return locale.includes(i18next.language) || i18next.languages.find((lang) => locale.includes(lang));
  //   });

  //   if (path) {
  //     locales[path]().then((module: any) => {
  //       i18next.addResourceBundle(lang, 'translation', module.default);
  //     });
  //   }

  //   i18next.on('languageChanged', (lang) => {
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 1000);
  //   });

  app.use(I18nextVue, { i18next });
}
