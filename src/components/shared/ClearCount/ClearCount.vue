<template>
  <BLock class="ClearCountStyle">
    <Button class="info" @click="store.clear">{{ data.titulo }}</Button>
  </BLock>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCount } from '@/stores/count'
import Button from '@/components/shared/Button/Button.vue';
import BLock from '@/components/shared/Block/Block.vue';

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
    return {
      store
    }
  },
  components: {
    Button,
    BLock
  }
});

export default ClearCount;

</script>
