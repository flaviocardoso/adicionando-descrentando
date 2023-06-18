import { defineComponent } from 'vue';

import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

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
