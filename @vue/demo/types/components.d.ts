/** 用于声明vue的全局组件,全局 */
import Demo from "@components/demo";
declare module "vue" {
  /** 扩展组件选项 */
  interface ComponentCustomOptions {}

  /** 定义全局组件 */
  interface GlobalComponents {
    Demo: typeof Demo;
  }
}
