import { FunctionDirective } from 'vue';

function inputable(el: any): el is HTMLInputElement | HTMLTextAreaElement {
  return el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;
}

export default function focus(el: Element) {
  if (!inputable(el)) {
    el = el.querySelector('input') || el.querySelector('textarea');
  }
  console.log(inputable(el));

  if (inputable(el)) {
    el.focus();
  }
}
