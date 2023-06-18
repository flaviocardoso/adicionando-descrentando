<template>
  <Block class="LessCountStyle">
    <Button type="danger" @click="diminuir">{{ data.titulo }}</Button>
  </Block>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useCount } from '@/stores/count'
import Button from '../Button';
import Block from '../Block';

const data = ref({ titulo: "Diminua" })

const store = useCount();

function diminuir() {
  store.decrement();
}

</script>
