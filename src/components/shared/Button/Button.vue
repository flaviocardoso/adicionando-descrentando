<template>
  <button
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
    name: "Button",
    props: {
      type: String,
      disabled: Boolean,
      callback: Function as PropType<(e: any) => void>
    }
  })

</script>
