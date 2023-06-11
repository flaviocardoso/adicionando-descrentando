<template>
  <main class="MainStyle">
    <br>
    <MyNavegation />
    <br>
    <router-view />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MyNavegation from '../MyNavegation';

export default defineComponent({
  name: "Main",
  components: { MyNavegation }
});
</script>
