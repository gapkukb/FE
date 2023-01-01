<template>
  <div class="<FTName | kebabcase>">{{ demo }}</div>
</template>

<script lang="ts" setup>
const demo = ref(0);

return {
  demo,
};
</script>

<script lang="ts">
export default {
    name:'<FTName | kebabcase>''
}
</script>

<style lang="stylus">
.<FTName | kebabcase>{

}
</style>
