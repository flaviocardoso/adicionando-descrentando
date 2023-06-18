<template>
  <main class="MainStyle">
    <br>
    <MyNavegation />
    <br>
    <!-- <router-view></router-view> -->
    <router-view
      v-slot="{Component}"
    >
      <transition name="fade" mode="out-in">
        <component
          :is="Component"
          :key="$route.path">
        </component>
      </transition>
    </router-view>
  </main>
</template>
<script setup lang="ts">
import MyNavegation from '../MyNavegation';
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
