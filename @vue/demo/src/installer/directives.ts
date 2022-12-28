import type { App } from "vue";
import { each } from "lodash-es";

import copy from "@vue/shared/direactives/copy";
import focus from "@vue/shared/direactives/focus";
import throttle from "@vue/shared/direactives/throttle";
import debounce from "@vue/shared/direactives/debounce";
import lazy from "@vue/shared/direactives/lazy";
import expand from "@vue/shared/direactives/expand";
import { amount, price } from "@vue/shared/direactives/format";
import clickOutside from "@vue/shared/direactives/click-outside";

/** 需要在types/directives.d.ts下同时定义类型 */
export default function directives(app: App) {
  const _direactives = [
    copy,
    focus,
    throttle,
    debounce,
    lazy,
    expand,
    amount,
    price,
    clickOutside,
  ];

  each(_direactives, (directive) => {
    app.directive(directive.name, directive);
  });
}
