<template>
  <nav class="Nav_Style">
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
      <AppLink to="http://192.168.2.101:5173">External</AppLink>
    </div>
  </nav>
</template>
<script setup lang="ts">
import source from '@/data.json';
</script>
<style scoped lang="scss">
@import './_.scss';
</style>
