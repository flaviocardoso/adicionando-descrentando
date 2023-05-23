<template>
  <div class="showcount text-center">
      <span>{{ count.getCount }}</span>
  </div>
</template>

<script lang="ts">

  import { defineComponent, ref } from 'vue'
  import { useCount } from '@/stores/count'

  interface I {
    msg: string
  }

  const ShowCount = defineComponent({
    name: "ShowCount",
    setup() {
      const count = useCount()

      return {
        count
      }
    }
  });

  export default ShowCount;

  </script>
