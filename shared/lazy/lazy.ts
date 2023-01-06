import 'intersection-observer';

export default class LazyObserver {
  declare io: IntersectionObserver;
  count = 0;
  destoryOnEmpty = false;
  constructor(options?: IntersectionObserverInit & { destoryOnEmpty?: boolean }) {
    this.destoryOnEmpty = options?.destoryOnEmpty || false;

    this.io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLImageElement;
          el.src = el.dataset.src!;
          el.removeAttribute('data-src');
          this.unobserve(el);
          (el as any).onAppear?.call(el, entry);
        }
      });
    }, options);
  }

  observe(target: Element): void {
    this.io.observe(target);
    this.count++;
  }
  unobserve(target: Element): void {
    this.io.observe(target);
    this.count--;
    if (this.destoryOnEmpty && this.count === 0) {
      this.disconnect();
    }
  }
  disconnect() {
    this.io.disconnect();
    this.io = null as any;
  }
}
