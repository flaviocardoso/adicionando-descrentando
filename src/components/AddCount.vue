<template>
    <div class="addcount">
        <p class="text-center">
        <button type="button" class="btn btn-success bg-success" @click="add">incrementa</button>
        </p>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCount } from '@/stores/count'
 
interface I {
  msg: string
}

const AddCount = defineComponent({
  name: "AddCount",
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