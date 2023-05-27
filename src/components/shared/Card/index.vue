<template>
  <div class="CardStyle">
    <div class="CardTitle">
      <slot name="title"></slot>
    </div>
    <div class="CardBody">
      <slot name="content"></slot>
    </div>
    <div class="CardFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
  <script lang="ts">
    import { defineComponent } from 'vue';

    const Card = defineComponent({
      name: "CardVue"
    });
    export default Card;
  </script>
<style scoped lang="scss">
  @import './_.scss';
</style>
