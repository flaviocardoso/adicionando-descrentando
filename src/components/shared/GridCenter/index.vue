<template>
  <section class="GridCenter">
    <slot></slot>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.GridCenter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
