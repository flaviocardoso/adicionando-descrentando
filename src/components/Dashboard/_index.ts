import { defineComponent } from 'vue';

import Header from '@/components/Header/index.vue';
import Main from '@/components/Main/index.vue';
import Footer from '@/components/Footer/index.vue';

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
