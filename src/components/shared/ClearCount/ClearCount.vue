<template>
  <div class="clearcount d-grid">
    <Button class="btn btn-primary" @click="store.clear">{{ data.titulo }}</Button>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCount } from '@/stores/count'
import Button from '@/components/shared/Button/Button.vue';

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
    Button
  }
});

export default ClearCount;

</script>
