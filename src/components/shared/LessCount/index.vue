<template>
  <Block class="LessCountStyle">
    <Button type="danger" @click="diminuir">{{ data.titulo }}</Button>
  </Block>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCount } from '@/stores/count'
import Button from '../Button';
import Block from '../Block';

const data = { titulo: "Diminua" }

const LessCount = defineComponent({
  name: "LessCount",
  data() {
    return {
      data
    }
  },
  setup() {
    const store = useCount();

    function diminuir() {
      store.decrement();
    }

    return {
      diminuir,
    }
  },
  components: {
    Button,
    Block
  }
});

export default LessCount;

</script>
