<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  interface ICard {
    title?: string,
    content?: string,
    footer?: string
  }

  const Card = defineComponent({
    name: "Card"
  });
  export default Card;
</script>
<template>
  <div class="card">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
      <slot name="notification"></slot>
      <span class="visually-hidden">unread messages</span>
    </span>
    <h1>
      <slot name="title"></slot>
    </h1>
    <div class="card-body">
      <slot name="content"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import url(./Card.module.scss);
</style>
