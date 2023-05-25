<template>
  <div class="BlockStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: "Content"
  });
</script>
<style scope lang="scss">
  @import './Block.module.scss';
</style>
