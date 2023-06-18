<template>
  <div>
    <h2>{{ parametros()?.name }}</h2>
    <div class="parametros-details">
      <p>{{ parametros()?.details }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const teste = [
  {
    id: 1,
    name: 'first',
    details: 'Este é a primeira rota'
  },
  {
    id: 2,
    name: 'second',
    details: 'Este é a segunda rota'
  },
  {
    id: 3,
    name: 'third',
    details: 'Este é a terceira rota'
  },
  {
    id: 4,
    name: 'fourth',
    details: 'Este é a quarta rota'
  }
];

const route = useRoute()
const getId = () => {
  const { id } = route.params;
  return parseInt(id as string)
}
const parametros = () => {
  return teste.find(t => t.id === getId())
}

</script>
