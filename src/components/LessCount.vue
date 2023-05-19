<template>
    <div class="lesscount">
        <p class="text-center">
        <button type="button" class="btn btn-danger bg-danger" @click="less">decrementa</button>
        </p>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCount } from '@/stores/count'
 
interface I {
  msg: string
}

const LessCount = defineComponent({
  name: "LessCount",
  setup() {
    const store = useCount()

    function less() {
      store.decrement()
    }

    return {
      store,
      less,
    }
  }
});

export default LessCount;

</script>