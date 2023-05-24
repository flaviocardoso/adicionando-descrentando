<script lang="ts">
  import { defineComponent } from 'vue';

  const Card = defineComponent({
    name: "Card"
  });
  export default Card;
</script>
<template>
  <div class="CardStyle">
    <h1 class="CardTitle">
      <slot name="title"></slot>
    </h1>
    <div class="CardBody">
      <slot name="content"></slot>
    </div>
    <div class="CardFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import './Card.module.scss';
</style>
