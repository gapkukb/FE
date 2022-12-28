<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
function handler(text: string) {
  show.value = false;
  console.log(text);
}
let show = ref(true);

defineProps<{ name: string }>();
console.log(name);
</script>

<template>
  <input type="text" v-if="show" />
  <!-- <div
    v-debounce:1000.mouseup="handler"
    v-expand="[100]"
    v-price="3123123"
  ></div> -->
  <div v-if="show"></div>

  <RouterView />
  <Demo title="abc" />
  <div style="overflow: auto; height: 100px; padding-top: 1000vh">
    <img
      v-lazy
      data-src="https://www.pjgirls.com/models/miabrown/face200.jpg"
      src=""
      alt=""
    />
  </div>
</template>
