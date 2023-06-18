<template>
  <a
    v-if="isExternal"
    :="$attrs"
    :href="to"
    target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    :to="to"
    :="$props"
    v-slot="{ isActive, href, navigate }"
    >
    <a
      :="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useLink } from 'vue-router';

const props = defineProps({
  // @ts-ignore
  ...RouterLink.props,
  inactiveClass: String
})

// @ts-ignore
const { navigate, href, route, isActive, isExactActive } = useLink(props);
const isExternal = computed(
  () => typeof props.to === 'string' && props.to.startsWith('http')
)

</script>
