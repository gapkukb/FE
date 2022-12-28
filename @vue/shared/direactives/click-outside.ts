import type { ObjectDirective } from 'vue';
import { on } from 'shared/events';
export default {
  name: 'click-outside',
  created(el, binding) {
    const { value, modifiers } = binding;
    el._hanlder = on(
      document.documentElement,
      'click',
      (e) => {
        if (e.target === el || el.contains(e.target as any)) return;
        modifiers.prevent && e.preventDefault();
        modifiers.stop && e.stopPropagation();
        value?.(e);
      },
      false
    );
  },
  beforeUnmount(el) {
    el._hanlder();
  },
} as ObjectDirective<HTMLElement & { _hanlder: any }> & { name: string };
