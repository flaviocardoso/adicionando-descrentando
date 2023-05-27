<template>
  <div class="TextCenterStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: "TextCenter"
  });
</script>
<style scoped lang="scss">
  @import './_.scss';
</style>
