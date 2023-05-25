<template>
  <Block class="LessCountStyle">
    <Button type="danger" @click="store.decrement">{{ data.titulo }}</Button>
  </Block>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCount } from '@/stores/count'
import Button from '@/components/shared/Button/Button.vue';
import Block from '@/components/shared/Block/Block.vue';

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
    return {
      store
    }
  },
  components: {
    Button,
    Block
  }
});

export default LessCount;

</script>
