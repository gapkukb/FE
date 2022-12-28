import type { App } from "vue";

/** 需要在types/properties.d.ts下同时定义类型 */
export default function properties(app: App) {
  // 必须以$开头
  // 函数必须是没有上下文的纯函数
  const _properties: Record<`$${string}`, any> = {
    $adsf: 123,
  };

  Object.assign(app.config.globalProperties, _properties);
}
