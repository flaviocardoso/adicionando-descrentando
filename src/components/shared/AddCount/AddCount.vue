<template>
  <div class="addcount d-grid">
      <button type="button" class="btn btn-success bg-success btn-lg" @click="add">{{ data.titulo }}</button>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCount } from '@/stores/count'

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
      store,
      add,
    }
  }
});

export default AddCount;

</script>
