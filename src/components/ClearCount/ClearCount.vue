<template>
  <div class="clearcount d-grid">
    <button type="button" class="btn btn-primary" @click="clear">{{ data.titulo }}</button>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCount } from '@/stores/count'

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

    function clear() {
      store.clear()
    }

    return {
      store,
      clear,
    }
  }
});

export default ClearCount;

</script>
