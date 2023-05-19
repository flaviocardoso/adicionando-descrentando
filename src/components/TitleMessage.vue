<template>
    <div class="titlemessage text-center">
      <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts">
  
  import { defineComponent, ref } from 'vue'
   
  interface I {
    msg: string
  }
  
  const TitleMessage = defineComponent({
    name: "TitleMessage",
    props: {
      msg: { 
        type: String,
        required: true
      }
    }
  });
  
  export default TitleMessage;
  
  </script>