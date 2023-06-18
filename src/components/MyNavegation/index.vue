<template>
  <nav>
    <AppLink to="/">Home</AppLink> >
    <AppLink
      v-for="info in source"
      :key="info.id"
      :to="`/${info.slug}`">
         {{ info.name }} &nbsp;
    </AppLink>
    <AppLink to="https://google.com.br">Google</AppLink>
  </nav>
</template>
<script setup lang="ts">
import source from '@/data.json';
</script>
