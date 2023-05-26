<template>
  <Card>
    <template #title>
      <TextCenter>TWO NUMBERS</TextCenter>
    </template>
    <template #content>
      <BLock>FIRST</Block>
      <Block>OPERATION</Block>
      <Block>SECOND</Block>
    </template>
    <template #footer>
      <Block>RESULT</Block>
    </template>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import BLock from './Block/Block.vue';
import Card from './Card/Card.vue';
  import TextCenter from './TextCenter/TextCenter.vue';

  export default defineComponent({
    name: "TwoNumbers",
    components: {
    TextCenter,
    BLock,
    Card
}
  });
</script>
