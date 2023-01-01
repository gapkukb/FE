// 防止用户禁用本地缓存

let store: any = {};

const localStorage = window.localStorage || {
  setItem(key, value) {
    store[key] = value;
  },
  getItem(key) {
    return store[key];
  },
  clear() {
    store = {};
  },
  removeItem(key) {
    delete store[key];
  },
  key(index) {
    return Object.values(store)[index];
  },
  get length() {
    return Object.keys(this.store);
  },
};

const sessionStorage = window.sessionStorage || window.localStorage;

export class Storage {
  declare mode: string;
  declare userName: string;
  constructor({ mode = true, userName = '' }: { mode?: boolean | string; userName?: string } = {}) {
    if (mode === true) {
      this.mode = import.meta.env.MODE;
    } else if (mode) {
      this.mode = mode;
    }
    this.userName = userName;
  }

  private getFullKey(key: string, user?: boolean) {
    key = this.mode + '_';
    if (user && this.userName) key += this.userName + '_';
    key += user;
    return key.toUpperCase();
  }

  private method(session?: boolean) {
    return session ? sessionStorage : localStorage;
  }

  getItem(options: { key: string; defaultValue?: any; session?: boolean; user?: boolean }) {
    const key = this.getFullKey(options.key, options.user);

    const value = this.method(options.session).getItem(key);
    if (value === null) return options.defaultValue;
    return JSON.parse(value).value;
  }

  setItem(options: { key: string; value: any; session?: boolean; user?: boolean }) {
    const key = this.getFullKey(options.key, options.user);
    this.method(options.session).setItem(
      key,
      JSON.stringify({
        type: typeof options.value,
        value: options.value,
      })
    );
  }

  clear() {
    localStorage.clear();
  }

  removeItem(options: { key: string; session?: boolean; user?: boolean }) {
    const key = this.getFullKey(options.key, options.user);
    this.method(options.session).removeItem(key);
  }
}

export default new Storage();
