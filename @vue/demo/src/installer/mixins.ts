import type { App, ComponentOptions } from "vue";
import { each } from "lodash-es";

/** 需要在types/mixins.d.ts下同时定义类型 */
export default function mixins(app: App) {
  const _mixins: ComponentOptions<{}, any, any, any, any, any, any, any>[] = [];

  each(_mixins, (mixin) => {
    app.mixin(mixin);
  });
}
