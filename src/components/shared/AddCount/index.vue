<template>
  <Block class="AddCountStyle">
    <Button type="success" @click="add">{{ data.titulo }}</Button>
  </Block>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useCount } from '@/stores/count';
import Button from '../Button';
import Block from '../Block';

const data = ref({ titulo: "Acrescente" })
const store = useCount()

const add = (): void => {
  store.increment()
}

</script>
