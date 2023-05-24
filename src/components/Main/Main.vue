<template>
  <main class="content">
    <Home />
  </main>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Home from '@/components/pages/Home/Home.vue';

  export default defineComponent({
    name: "Main",
    components: {
      Home
    }
  });
</script>
