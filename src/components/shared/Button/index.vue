<template>
  <button
    class="ButtonStyle"
    :class="type"
    :disabled="disabled"
    @click="callback"
    >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">

import { PropType } from 'vue';
const props = defineProps({
  type: String,
  disabled: Boolean,
  callback: Function as PropType<(e: any) => void>
})

</script>
<style scoped lang="scss">
  @import "./_.scss";
</style>
