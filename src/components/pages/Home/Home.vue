<template>
  <section class="HomeStyle">
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
    <Card>
      <template #title>
        <TextCenter>TWO NUMBERS</TextCenter>
      </template>
      <template #content>
        <Block>FIRST</Block>
        <Block>OPERATION</Block>
        <Block>SECOND</Block>
      </template>
      <template #footer>
        <Block>RESULT</Block>
      </template>
    </Card>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Card from '@/components/shared/Card/Card.vue';
  import ShowCount from '@/components/shared/ShowCount/ShowCount.vue';
  import AddCount from '@/components/shared/AddCount/AddCount.vue';
  import LessCount from '@/components/shared/LessCount/LessCount.vue';
  import ClearCount from '@/components/shared/ClearCount/ClearCount.vue';
  import Button from '@/components/shared/Button/Button.vue';
  import TextCenter from '@/components/shared/TextCenter/TextCenter.vue';
  import Block from '@/components/shared/Block/Block.vue';

  export default defineComponent({
    name: "Home",
    components: {
      Card,
      ShowCount,
      AddCount,
      LessCount,
      ClearCount,
      Button,
      TextCenter,
      Block
    }
  });
</script>
<style scoped lang="scss">
  @import './Home.module.scss';
</style>
