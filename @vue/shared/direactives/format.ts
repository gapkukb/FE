import type { DirectiveBinding } from 'vue';
import { number } from 'shared/format';

//<div v-amount:5="3123123"></div> => ￥3,123,123.00000
export function amount(el: HTMLElement, binding: DirectiveBinding) {
  const { value, arg = '' } = binding;
  el.innerText = number.format(value, +arg ?? undefined);
}
//<div v-price:￥="3123123"></div> =>￥3,123,123
export function price(el: HTMLElement, binding: DirectiveBinding) {
  const { value, arg } = binding;
  el.innerText = number.currency(value, arg);
}
