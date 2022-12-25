<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
function handler(text: string) {
  console.log(text);
}
const text = ref("我是测试数据");
</script>

<template>
  <input type="text" v-focus />
  <div
    v-debounce:1000.mouseup="handler"
    v-expand="[100]"
    v-price="3123123"
  ></div>
  <div v-amount:5="3123123"></div>

  <RouterView />
  <div style="overflow: auto; height: 100px; padding-top: 1000vh">
    <img
      v-lazy
      data-src="https://www.pjgirls.com/models/miabrown/face200.jpg"
      src=""
      alt=""
    />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
