<script lang="ts">
  import { defineComponent } from 'vue';

  import Header from '@/components/Header/Hearder.vue'
  import Footer from '@/components/Footer/Footer.vue'

  interface ICard {
    title?: string,
    content?: string,
    footer?: string
  }

  import TitleMessage from '@/components/TitleMessage.vue'
  import ShowCount from '@/components/ShowCount/ShowCount.vue'
  import LessCount from '@/components/LessCount/LessCount.vue'
  import ClearCount from '@/components/ClearCount/ClearCount.vue'
  import AddCount from '@/components/AddCount/AddCount.vue'
  import Card from '@/components/Card/Card.vue';

  const Dashboard = defineComponent({
    data() {
      return {
        data: { msg: "Aumentando e Diminuindo" },
      }
    },
    components: {
      Header,
      Footer,
      TitleMessage,
      ShowCount,
      LessCount,
      AddCount,
      ClearCount,
      Card
    }
  })
  export default Dashboard;
</script>

<template>
  <div class="DashboardStyle">
    <Header />
    <main class="content">
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
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
  @import url(./Dashboard.module.scss);
</style>
