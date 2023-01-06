import type { DirectiveBinding } from 'vue';
import Observer from 'shared/lazy';

const bodyObserver = new Observer();
const observerMap = new WeakMap<HTMLElement, Observer>();

//v-lazy:30.parent?="callback"
export default {
  name: 'lazy',
  created(el: HTMLElement, { value, modifiers, arg }: DirectiveBinding) {
    if (value === false) return;
    (el as any).onAppear = value;
    if (modifiers.parent) {
      const parent = el.parentElement!;
      let io = observerMap.get(parent);
      if (!io) {
        io = new Observer({
          root: el.parentElement,
          rootMargin: arg,
          destoryOnEmpty: true,
        });
        observerMap.set(parent, io);
      }
      io.observe(el);
    } else {
      bodyObserver.observe(el);
    }
  },
  beforeUnmount(el: HTMLElement, { modifiers }: DirectiveBinding) {
    const parent = el.parentElement!;
    if (modifiers.parent) {
      const io = observerMap.get(parent);
      if (io) {
        io.unobserve(el);
        //如果已经没有任务了，那么清除掉
        if (io.count === 0) {
          observerMap.delete(parent);
        }
      }
    } else {
      bodyObserver.unobserve(el);
    }
  },
};
