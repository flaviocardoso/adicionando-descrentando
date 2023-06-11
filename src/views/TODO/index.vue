
import TODO from '@/components/shared/TODO';

<template>
  <TODO />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TODO from '@/components/shared/TODO';
export default defineComponent({
  name: "TODO-View",
  components: { TODO }
});
</script>
