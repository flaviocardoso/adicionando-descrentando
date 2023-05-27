<template>
  <Card>
    <template #title>
      <TextCenter>TWO NUMBERS</TextCenter>
    </template>
    <template #content>
      <Block> - FIRST - </Block>
      <Block> - OPERATION - </Block>
      <Block> - SECOND - </Block>
      <Block> - EQUAL - </Block>
    </template>
    <template #footer>
      <Block>RESULT</Block>
    </template>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Block from '../Block';
  import Card from '../Card';
  import TextCenter from '../TextCenter';

  export default defineComponent({
    name: "TwoNumbers",
    components: {
      TextCenter,
      Block,
      Card
    }
  });
</script>
