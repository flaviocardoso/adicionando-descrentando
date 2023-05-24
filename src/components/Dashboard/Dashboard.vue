<script lang="ts">
  import { defineComponent } from 'vue';

  import Header from '@/components/Header/Hearder.vue';
  import Main from '@/components/Main/Main.vue';
  import Footer from '@/components/Footer/Footer.vue';

  interface ICard {
    title?: string,
    content?: string,
    footer?: string
  }

  const Dashboard = defineComponent({
    data() {
      return {
        data: { msg: "Aumentando e Diminuindo" },
      }
    },
    components: {
      Header,
      Footer,
      Main
    }
  })
  export default Dashboard;
</script>

<template>
  <div class="DashboardStyle">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
  @import "./Dashboard.module.scss";
</style>
