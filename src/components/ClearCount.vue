<template>
    <div class="clearcount">
        <p class="text-center">
        <button type="button" class="btn btn-primary" @click="clear">Limpar</button>
        </p>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import { useCount } from '@/stores/count'
 
interface I {
  msg: string
}

const Less = defineComponent({
  name: "ClearCount",
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

export default Less;

</script>