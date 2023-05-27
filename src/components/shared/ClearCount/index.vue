<template>
  <Block class="ClearCountStyle">
    <Button class="info" @click="limpar">{{ data.titulo }}</Button>
  </Block>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCount } from '@/stores/count'
import Button from '../Button';
import Block from '../Block';

const data = { titulo: "Limpar" }

const ClearCount = defineComponent({
  name: "ClearCount",
  data() {
    return {
      data
    }
  },
  setup() {
    const store = useCount()

    function limpar() {
      store.clear();
    }
    return {
      limpar,
    }
  },
  components: {
    Button,
    Block
  }
});

export default ClearCount;

</script>
