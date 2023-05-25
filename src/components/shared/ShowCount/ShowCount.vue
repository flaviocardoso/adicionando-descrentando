<template>
  <div class="ShowCountStyle">
    <TextCenter>
      {{ count.getCount }}
    </TextCenter>
  </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import { useCount } from '@/stores/count';
  import TextCenter from '@/components/shared/TextCenter/TextCenter.vue'

  const ShowCount = defineComponent({
    name: "ShowCount",
    setup() {
      const count = useCount()
      return {
        count
      }
    },
    components: {
      TextCenter
    }
  });

  export default ShowCount;

</script>
<style scoped lang="scss">
  @import './ShowCountStyle.scss';
</style>
