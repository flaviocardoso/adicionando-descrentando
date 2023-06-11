import { defineComponent } from 'vue';
import CardGrid from '@/components/shared/CardGrid';
import Count from '@/components/shared/Count';
import TwoNumbers from '@/components/shared/TwoNumbers';
import TODO from '@/components/shared/TODO';

export default defineComponent({
  name: "Home",
  components: {
    CardGrid,
    Count,
    TwoNumbers,
    TODO
  }
});