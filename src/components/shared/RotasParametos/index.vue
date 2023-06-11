<template>
  <div>
    <h2>Rota {{ $route.params.id }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Paramentos",
  computed: {
    getId() {
      const { id } = this.$route.params;
      return parseInt(id as string)
    }
  }
});
</script>
