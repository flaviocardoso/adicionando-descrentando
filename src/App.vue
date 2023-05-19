<script setup lang="ts">
  import TitleMessage from '@/components/TitleMessage.vue'
  import ShowCount from '@/components/ShowCount.vue'
  import LessCount from '@/components/LessCount.vue'
  import ClearCount from '@/components/ClearCount.vue'
  import AddCount from '@/components/AddCount.vue';
</script>

<template>
  <TitleMessage msg="Aumentando e Diminuindo" />
  <ShowCount />
  <AddCount />
  <LessCount />
  <ClearCount />
</template>
