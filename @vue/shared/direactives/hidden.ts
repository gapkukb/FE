import { DirectiveBinding } from 'vue';
export default function hidden(el: HTMLElement, binding: DirectiveBinding) {
  el.style.visibility = binding.value ? 'hidden' : '';
}
