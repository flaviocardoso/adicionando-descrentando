<template>
  <main class="MainStyle">
    <MyNavegation />
    <!-- <router-view></router-view> -->
    <div class="conteudo">
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
    </div>
  </main>
</template>
<script setup lang="ts">
import MyNavegation from '../MyNavegation';
</script>
<style scoped lang="scss">
@import './_.scss';
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
