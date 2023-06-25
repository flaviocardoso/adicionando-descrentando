<template>
  <nav class="Nav_Style">
    <span class="home">
      <AppLink to="/">Home</AppLink>
    </span>
    <div class="interno">
      <AppLink
        v-for="info in source"
        :key="info.id"
        :to="`/${info.slug}`">
           {{ info.name }}
      </AppLink>
    </div>
    <div class="externo">
      <AppLink to="https://google.com.br">Google</AppLink>
    </div>
  </nav>
</template>
<script setup lang="ts">
import source from '@/data.json';
</script>
<style scoped lang="scss">
@import './_.scss';
</style>
