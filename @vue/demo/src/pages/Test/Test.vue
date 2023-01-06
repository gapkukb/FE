<template>
  <div class="test">{{ demo }}</div>
</template>

<script lang="ts" setup>
const demo = ref(0);

return {
  demo,
};
</script>

<script lang="ts">
export default {
    name:'test''
}
</script>

<style lang="stylus">
.test{

}
</style>
