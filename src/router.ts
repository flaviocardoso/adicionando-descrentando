import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "@/views/Home";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/count',
    name: 'Acrescente e Diminua',
    component: () => import(/* webpackChunckName: "count_numbers" */"@/views/CountNumbers")
  },
  {
    path: '/twonumbers',
    name: 'TwoNumbers',
    component: () => import(/* webpackChunckName: "count_numbers" */"@/views/TwoNumbers")
  },
  {
    path: '/todo',
    name: 'ListaDeAfazeres',
    component: () => import(/* webpackChunckName: "count_numbers" */"@/views/TODO")
  },
  {
    path: '/parametros',
    name: 'Parametros',
    component: () => import(/* webpackChunckName: "parametros" */"@/views/Paramentros")
  },
  {
    path: '/parametros/:id/:slug',
    name: 'parametros.mostrar',
    component: () => import(/* webpackChunckName: "paramentos_filho" */"@/components/shared/RotasParametos")
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
