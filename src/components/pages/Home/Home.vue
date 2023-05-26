<template>
  <section class="HomeStyle">
    <header class="titulo">Home :></header>
    <CardGrid>
      <Count />
      <TwoNumbers />
    </CardGrid>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CardGrid from '@/components/shared/CardGrid/CardGrid.vue';
import Count from '@/components/shared/Count.vue';
import TwoNumbers from '@/components/shared/TwoNumbers.vue';

  export default defineComponent({
    name: "Home",
    components: {
      CardGrid,
      Count,
      TwoNumbers
    }
  });
</script>
<style scoped lang="scss">
  @import './Home.module.scss';
</style>
