<template>
  <div class="ShowCountStyle">
    <TextCenter>
      {{ numero.count }}
    </TextCenter>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useCount } from '@/stores/count';
import TextCenter from '../TextCenter/index.vue';

const count = useCount()
let numero = ref(count);

</script>
<style scoped lang="scss">
  @import './_.scss';
</style>
