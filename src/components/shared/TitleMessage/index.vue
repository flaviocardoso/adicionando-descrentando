<template>
    <div class="titlemessage text-center">
      <h1>{{ msg }}</h1>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
  msg: {
      type: String
    }
});

</script>
