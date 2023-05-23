<template>
  <div class="lesscount d-grid">
    <button type="button" class="btn btn-danger bg-danger btn-lg" @click="less">{{ data.titulo }}</button>
  </div>
</template>

<script lang="ts">

import { defineComponent, render } from 'vue'
import { useCount } from '@/stores/count'

const data = { titulo: "Diminua" }

const LessCount = defineComponent({
  name: "LessCount",
  data() {
    return {
      data
    }
  },
  setup() {
    const store = useCount()

    function less() {
      store.decrement()
    }

    return {
      store,
      less,
    }
  },
  methods: {
    less() {
      this.less()
    }
  }
});

export default LessCount;

</script>
