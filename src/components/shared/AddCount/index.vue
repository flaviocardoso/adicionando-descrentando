<template>
  <Block class="AddCountStyle">
    <Button type="success" @click="add">{{ data.titulo }}</Button>
  </Block>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useCount } from '@/stores/count';
import Button from '../Button';
import Block from '../Block';

const data = { titulo: "Acrescente" }

const AddCount = defineComponent({
  name: "AddCount",
  data() {
    return {
      data
    }
  },
  setup() {
    const store = useCount()

    function add() {
      store.increment()
    }

    return {
      add,
    }
  },
  components: {
    Button,
    Block
  },
});

export default AddCount;

</script>
