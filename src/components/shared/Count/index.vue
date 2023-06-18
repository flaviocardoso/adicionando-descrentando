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
<script setup lang="ts">
import Card from '../Card';
import ShowCount from '../ShowCount';
import AddCount from '../AddCount';
import ClearCount from '../ClearCount';
import LessCount from '../LessCount';
</script>
