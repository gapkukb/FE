import { createApp } from "vue";
import { createPinia } from "pinia";
import copy from "@vue/shared/direactives/copy";
import focus from "@vue/shared/direactives/focus";
import throttle from "@vue/shared/direactives/throttle";
import debounce from "@vue/shared/direactives/debounce";
// import lazy from "@vue/shared/direactives/lazy";
import expand from "@vue/shared/direactives/expand";
import { amount, price } from "@vue/shared/direactives/format";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive(copy.name, copy);
app.directive(focus.name, focus);
app.directive(throttle.name, throttle);
app.directive(debounce.name, debounce);
app.directive(amount.name, amount);
app.directive(price.name, price);
// app.directive(lazy.name, lazy);
app.directive(expand.name, expand);
app.mount("#app");
