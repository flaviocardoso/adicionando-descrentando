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
import Card from './Card/Card.vue';
import ShowCount from './ShowCount/ShowCount.vue';
import AddCount from './AddCount/AddCount.vue';
import ClearCount from './ClearCount/ClearCount.vue';
import LessCount from './LessCount/LessCount.vue';

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
