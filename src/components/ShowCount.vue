<template>
    <div class="showcount">
        <p class="text-center">
        <span class="badge rounded-pill bg-secondary">{{ count.getCount }}</span>
        </p>
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