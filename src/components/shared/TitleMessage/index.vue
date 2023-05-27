<template>
    <div class="titlemessage text-center">
      <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts">

  import { defineComponent, PropType } from 'vue'

  const TitleMessage = defineComponent({
    name: "TitleMessage",
    props: {
      msg: {
        type: String
      }
    }
  });

  export default TitleMessage;

  </script>
