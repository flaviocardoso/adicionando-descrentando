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
<script setup lang="ts"></script>
<style scoped lang="scss">
  @import './_.scss';
</style>
