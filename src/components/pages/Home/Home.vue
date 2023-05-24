<template>
  <Card>
    <template #title>
      <h3 class="text-center">Aumente ou Diminua</h3>
    </template>
    <template #notification>
      <ShowCount />
    </template>
    <template #content>
      <div class="d-grid gap-2">
        <AddCount />
        <LessCount />
      </div>
    </template>
    <template #footer>
      <div class="d-grid">
        <ClearCount />
      </div>
    </template>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Card from '@/components/shared/Card/Card.vue';
  import ShowCount from '@/components/shared/ShowCount/ShowCount.vue';
  import AddCount from '@/components/shared/AddCount/AddCount.vue';
  import LessCount from '@/components/shared/LessCount/LessCount.vue';
  import ClearCount from '@/components/shared/ClearCount/ClearCount.vue';

  export default defineComponent({
    name: "Home",
    components: {
      Card,
      ShowCount,
      AddCount,
      LessCount,
      ClearCount
    }
  });
</script>
