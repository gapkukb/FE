import type { ObjectDirective, DirectiveBinding } from 'vue';
import Observer from 'intersection-observer';

const io: IntersectionObserver = new Observer((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement;
      img.src = img.dataset.src!;
      img.removeAttribute('data-src');
      io.unobserve(img);
    }
  });
});

export default {
  name: 'lazy',
  created(el, binding: DirectiveBinding) {
    binding.value !== false && io.observe(el);
  },
  beforeUnmount(el) {
    io.unobserve(el);
  },
} as ObjectDirective & { [key: string]: any };
