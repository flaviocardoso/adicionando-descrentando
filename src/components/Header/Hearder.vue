<script lang="ts">
  import { defineComponent } from 'vue';
  const data = {
    titulo: "Flavio Cardoso"
  }

  const Header = defineComponent({
    data() {
      return {
        data
      }
    }
  });
  export default  Header;
</script>
<template>
  <header class="HeaderStyle">
    <h1 class="titulo">{{ data.titulo }}</h1>
  </header>
</template>
<style scoped lang="scss">
  @import "./Header.module.scss";
</style>
