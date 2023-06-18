<template>
  <header class="HeaderStyle">
    <h1 class="HeaderTitulo">{{ data.titulo }}</h1>
  </header>
</template>
<script setup lang="ts">

import { ref } from 'vue';

const data = ref({
  titulo: "Flavio Cardoso"
})

</script>
<style src="./_index.scss" scoped lang="scss"></style>
