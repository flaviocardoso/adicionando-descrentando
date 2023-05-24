<template>
  <div class="AddCountStyle BlockButton">
      <Button type="success" @click="add">{{ data.titulo }}</Button>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useCount } from '@/stores/count';
import Button from '@/components/shared/Button/Button.vue';

const data = { titulo: "Acrescente" }

const AddCount = defineComponent({
  name: "AddCount",
  data() {
    return {
      data
    }
  },
  setup() {
    const store = useCount()

    function add() {
      store.increment()
    }

    return {
      store,
      add,
    }
  },
  components: {
    Button
  }
});

export default AddCount;

</script>
