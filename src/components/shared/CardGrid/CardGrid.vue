<template>
  <section class="CardGridStyle">
    <slot></slot>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Count from '@/components/shared/Count.vue';
  import TwoNumbers from '@/components/shared/TwoNumbers.vue';

  export default defineComponent({
    name: "Home",
    components: {
      Count,
      TwoNumbers
    }
  });
</script>
<style scoped lang="scss">
  @import './CardGrid.module.scss';
</style>
