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
<script lang="ts">

  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: "ButtonVue",
    props: {
      type: String,
      disabled: Boolean,
      callback: Function as PropType<(e: any) => void>
    }
  })

</script>
<style scoped lang="scss">
  @import "./_.scss";
</style>
