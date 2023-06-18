
import TODO from '@/components/shared/TODO/TODO.vue';

<template>
  <div class="HomeStyle">
    <section class="HomeStyle">
      <CardGrid>
        <Count />
        <TwoNumbers />
      </CardGrid>
    </section>
    <section class="HomeStyle">
      <TODO />
    </section>
  </div>
</template>
<script setup lang="ts">
import CardGrid from '@/components/shared/CardGrid';
import Count from '@/components/shared/Count';
import TwoNumbers from '@/components/shared/TwoNumbers';
import TODO from '@/components/shared/TODO';
</script>
<style src="./_.scss" scoped lang="scss"></style>
