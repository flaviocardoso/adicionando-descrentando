<template>
  <nav>
    <router-link
      v-for="rota in getRotas"
      :key="rota.id"
      :to="{ name: 'parametros.mostrar', params: { id: rota.id, slug: rota.name } }"
    >
    &nbsp;{{ rota.name }}&nbsp;
    </router-link>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import sourceData from '@/data.json';

const rotas = sourceData.filter(d => d.name === "parametros");

export default defineComponent({
  name: "Parametros-View",
  computed: {
    getRotas() {
      const { lista } = sourceData.filter(d => d.slug === "parametros")[0]
      return lista;
    }
  }
});
</script>
