import { throttle } from 'lodash-es';
import { ObjectDirective } from 'vue';

export function creator(f: any) {
  return {
    name: f.name,
    created(el, binding) {
      el._event = f(binding.value, Number(binding.arg) || 0);
      Object.keys(binding.modifiers).forEach((e) => {
        el.addEventListener(e, el._event, false);
      });
    },
    beforeUnmount(el, binding) {
      Object.keys(binding.modifiers).forEach((e) => {
        el.removeEventListener(e, el._event, false);
      });
    },
  } as ObjectDirective<Element & { _event: any }, (e: MouseEvent) => void> & { name: string };
}

//<button v-throttle:1000.click="handler">点击</button>
export default creator(throttle);
