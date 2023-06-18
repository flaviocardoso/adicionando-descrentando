import { createApp } from 'vue';
import { createPinia, setActivePinia } from 'pinia';
import routers from '@/router';
import AppLink from '@/components/shared/AppLink/index.vue'
import '@/style.scss';
import App from '@/App.vue';

const pinia = createPinia();
setActivePinia(pinia);

createApp(App)
  .component('AppLink', AppLink)
  .use(pinia)
  .use(routers)
  .mount('#app')
