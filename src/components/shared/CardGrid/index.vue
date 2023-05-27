<template>
  <section class="CardGridStyle">
    <slot></slot>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Count from '../Count';
  import TwoNumbers from '../TwoNumbers';

  export default defineComponent({
    name: "CardGridVue",
    components: {
      Count,
      TwoNumbers
    }
  });
</script>
<style scoped lang="scss">
  @import './_.scss';
</style>
