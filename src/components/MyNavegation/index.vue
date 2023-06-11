<template>
  <nav>
    <router-link to="/">Home</router-link> >
    <router-link
      v-for="info in source"
      :key="info.id"
      :to="`/${info.slug}`">
         {{ info.name }} &nbsp;
    </router-link>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import sourceData from '@/data.json';
export default defineComponent({
  name: "MyNavegation",
  data() {
    return  {
      source : sourceData
    }
  }
});
</script>
