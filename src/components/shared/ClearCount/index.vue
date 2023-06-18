<template>
  <Block class="ClearCountStyle">
    <Button class="info" @click="limpar">{{ data.titulo }}</Button>
  </Block>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useCount } from '@/stores/count'
import Button from '../Button';
import Block from '../Block';

const data = ref({ titulo: "Limpar" })
const store = useCount()

const limpar = (): void => {
  store.clear();
}

</script>
