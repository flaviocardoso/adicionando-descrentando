<template>
  <main class="MainStyle">
    <Home />
  </main>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Home from '@/layouts/Home';

  export default defineComponent({
    name: "Main",
    components: {
      Home
    }
  });
</script>
