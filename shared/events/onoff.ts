export function on(el: HTMLElement, ...[type, listeners, option = false]: Parameters<HTMLElement['addEventListener']>) {
  el.addEventListener(type, listeners, option);

  return function _off() {
    el.removeEventListener(type, listeners, option);
  };
}

export function off(el: HTMLElement, [type, listeners, option = false]: Parameters<HTMLElement['removeEventListener']>) {
  el.removeEventListener(type, listeners, option);
}
