import type { Services, InitOptions } from 'i18next';
import { each } from 'lodash-es';
import i18next from 'i18next';

// 异步加载语言文件实现
// https://www.i18next.com/misc/creating-own-plugins
export default class Backend {
  declare locales: Record<string, () => Promise<any>>;
  init(services: Services, backendOptions: any = {}) {
    this.locales = backendOptions.locales;
  }
  read(lang: string, ns: string) {
    console.log(lang, ns);
    each(this.locales, (locale, lng) => {
      if (lng.includes(lang)) {
        locale().then((module) => {
          i18next.addResourceBundle(lang, ns, module.default);
          console.log(i18next.getDataByLanguage('zh'));
        });
      }
    });
  }

  create(lang: string, ns: string, key: string, fallbackValue: string) {
    console.log(lang, ns);
  }
  save(lang: string, ns: string, data: any) {
    console.log(lang, ns);
  }
  readMulti(lang: string, ns: string) {
    console.log(lang, ns);
  }
}
//@ts-ignore
Backend.type = 'backend';
