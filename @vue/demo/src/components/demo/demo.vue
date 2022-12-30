<template>
  <div>test</div>
</template>
<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  title: {
    type: String as PropType<"abc">,
    required: true,
  },
});

const emits = defineEmits<{
  (e: "emits", data: number): void;
  (e: "ws", data: string): void;
}>();
</script>
<script>
export default {
  name: "logo-1",
};
</script>
