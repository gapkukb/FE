import type { Directive } from 'vue';
type NamedObjectDirective<T = any, V = any> = Directive<T, V> & {
  name: string;
};
import copy from 'shared/copy';

export default {
  name: 'clipboard',
  created(el, binding) {
    el._handler = () => {
      if (typeof binding.value === 'string') {
        copy(binding.value, alert);
      } else {
        copy(el.dataset['text'], binding.value);
      }
    };
    el.addEventListener('click', el._handler, false);
  },
  beforeUnmount(el) {
    el.removeEventListener('click', el._handler, false);
  },
} as NamedObjectDirective<HTMLElement & { _handler: (ev: Event) => any }, string | ((text: string) => any)>;
