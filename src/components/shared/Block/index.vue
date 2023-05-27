<template>
  <div class="BlockStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: "BlockVue"
  });
</script>
<style scope lang="scss">
  @import './_.scss';
</style>
