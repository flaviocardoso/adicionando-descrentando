import { createApp } from 'vue';
import { createPinia, setActivePinia } from 'pinia';
import routers from '@/router';
import '@/style.scss';
import App from '@/App.vue';

const pinia = createPinia();
setActivePinia(pinia);

createApp(App)
  .use(pinia)
  .use(routers)
  .mount('#app')
