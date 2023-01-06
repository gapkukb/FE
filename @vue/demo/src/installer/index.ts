import type { App } from "vue";
import directives from "./directives";
import components from "./components";

/** 安装全局指令 组件 属性 */
export default function install(app: App) {
  directives(app);
  components(app);
}
