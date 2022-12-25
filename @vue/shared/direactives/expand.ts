import { bind } from 'lodash-es';
import { DirectiveBinding } from 'vue';
const stylesheet = document.createElement('style');
stylesheet.type = 'text/css';
const rules = `.__expand__::before{content:"";position:absolute;top:var(--expand-top,-10px);bottom:var(--expand-bottom,-10px);right:var(--expand-right,-10px);left:var(--expand-left,-10px);};`;
stylesheet.innerHTML = rules;

document.head.appendChild(stylesheet);

function PX(n: number) {
  if (n === void 0) return;
  return -n + 'px';
}
export default function expand(el: HTMLElement, binding: DirectiveBinding) {
  if (binding.value && binding.value.length) {
    const [top, right, bottom, left] = binding.value;
    el.style.setProperty('--expand-top', PX(top));
    el.style.setProperty('--expand-bottom', PX(bottom ?? top));
    el.style.setProperty('--expand-left', PX(left ?? right ?? top));
    el.style.setProperty('--expand-right', PX(right ?? top));
  }
  el.classList.add('__expand__');
  el.style.position = getComputedStyle(document.body)['position'] === 'static' ? 'relative' : '';
}
