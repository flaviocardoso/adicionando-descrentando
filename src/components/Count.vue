<template>
  <div class="count">
    <h1>{{ msg }}</h1>
    <div class="card">
      <p class="text-center">
        <span class="alert alert-secondary" role="alert">{{ countStore.count }}</span>
      </p>
      <p class="text-center">
        <button type="button" class="btn btn-success" @click="add">incrementa</button>
      </p>
      <p class="text-center">
        <button type="button" class="btn btn-danger bg-danger" @click="less">decrementa</button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import { useCount } from '@/stores/count'
 
interface I {
  msg: string
}

const Count = defineComponent({
  name: "Count",
  props: {
    msg: { 
      type: String,
      required: true
    }
  },
  setup() {
    const countStore = useCount()

    function add() {
      countStore.increment()
    }

    function less() {
      countStore.decrement()
    }

    return {
      countStore,
      add,
      less,
    }
  }
});

export default Count;

</script>