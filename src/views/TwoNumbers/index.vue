<template>
  <GridCenter><TwoNumbers /></GridCenter>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TwoNumbers from '@/components/shared/TwoNumbers';
import GridCenter from '@/components/shared/GridCenter';
export default defineComponent({
  name: "TwoNumbers-View",
  components: { TwoNumbers, GridCenter }
});
</script>
