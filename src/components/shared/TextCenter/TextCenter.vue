<template>
  <div class="TextCenterStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: "TextContent"
  });
</script>
<style scoped lang="scss">
  @import './TextCenter.module.scss';
</style>
