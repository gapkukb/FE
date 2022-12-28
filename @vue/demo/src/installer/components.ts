import type { App } from "vue";
import { each } from "lodash-es";

/** 需要在types/components.d.ts下同时定义类型 */
export default function components(app: App) {
  const _components: any[] = [];

  each(_components, (directive) => {
    app.component(directive.name, directive);
  });
}
