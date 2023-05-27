<template>
  <Card>
    <template #title>
      <ShowCount />
    </template>
    <template #content>
      <AddCount />
      <LessCount />
    </template>
    <template #footer>
      <ClearCount />
    </template>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Card from '../Card';
  import ShowCount from '../ShowCount';
  import AddCount from '../AddCount';
  import ClearCount from '../ClearCount';
  import LessCount from '../LessCount';

  interface I {
    msg: string
  }

  const Count = defineComponent({
    name: "Count",
    components: {
      Card,
      ShowCount,
      AddCount,
      ClearCount,
      LessCount
    }
  });

  export default Count;
</script>
