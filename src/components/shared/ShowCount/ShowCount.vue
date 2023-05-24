<template>
  <div class="ShowCountStyle">
      <span>{{ count.getCount }}</span>
  </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import { useCount } from '@/stores/count';

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
<style scoped lang="scss">
  @import './ShowCountStyle.scss';
</style>
