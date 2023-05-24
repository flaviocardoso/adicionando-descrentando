<template>
  <div class="count">
    <h1>{{ msg }}</h1>
    <p class="text-center">
    <span class="alert alert-secondary" role="alert">{{ store.getCount }}</span>
    </p>
    <div class="card">
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
    const store = useCount()

    function add() {
      store.increment()
    }

    function less() {
      store.decrement()
    }

    return {
      store,
      add,
      less,
    }
  }
});

export default Count;
</script>
