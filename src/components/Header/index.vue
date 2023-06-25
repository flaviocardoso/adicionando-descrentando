<template>
  <header>
    <div class="HeaderStyle">
      <h1 class="HeaderTitulo">
        <AppLink to="/">{{ data.titulo }}</AppLink>
      </h1>
    </div>
    <MyNavegation />
  </header>
</template>
<script setup lang="ts">

import { ref } from 'vue';
import MyNavegation from '../MyNavegation';

const data = ref({
  titulo: "Flavio Cardoso"
})

</script>
<style src="./_index.scss" scoped lang="scss"></style>
