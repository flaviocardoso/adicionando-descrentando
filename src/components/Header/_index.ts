import { defineComponent } from 'vue';
const data = {
  titulo: "Flavio Cardoso"
}

const Header = defineComponent({
  data() {
    return {
      data
    }
  }
});
export default  Header;
