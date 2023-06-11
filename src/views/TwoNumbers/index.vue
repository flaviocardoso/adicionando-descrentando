
import TwoNumbers from '@/components/shared/TwoNumbers';

<template>
  <TwoNumbers />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TwoNumbers from '@/components/shared/TwoNumbers';
export default defineComponent({
  name: "TwoNumbers-View",
  components: { TwoNumbers }
});
</script>
