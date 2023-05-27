<template>
  <div class="ShowCountStyle">
    <TextCenter>
      {{ numero.count }}
    </TextCenter>
  </div>
</template>

<script lang="ts">

  import { defineComponent, ref, onMounted } from 'vue';
  import { useCount } from '@/stores/count';
  import TextCenter from '../TextCenter/index.vue';

  const ShowCount = defineComponent({
    name: "ShowCount",
    setup() {
      const count = useCount()
      let numero = ref(count);

      return {
        numero
      }
    },
    components: {
      TextCenter
    },
  });

  export default ShowCount;

</script>
<style scoped lang="scss">
  @import './_.scss';
</style>
