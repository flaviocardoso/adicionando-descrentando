<template>
  <div class="lesscount d-grid">
    <Button class="btn btn-danger bg-danger btn-lg" @click="store.decrement">{{ data.titulo }}</Button>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCount } from '@/stores/count'
import Button from '@/components/shared/Button/Button.vue';

const data = { titulo: "Diminua" }

const LessCount = defineComponent({
  name: "LessCount",
  data() {
    return {
      data
    }
  },
  setup() {
    const store = useCount();
    return {
      store
    }
  },
  components: {
    Button
  }
});

export default LessCount;

</script>
