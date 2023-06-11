<template>
  <Count />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Count from '@/components/shared/Count';

export default defineComponent({
  name: "Count-View",
  components: {
    Count
  }
});
</script>
