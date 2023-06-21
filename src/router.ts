import { createRouter, RouteRecord , createWebHashHistory, createWebHistory, RouteLocationNormalized, RouteRecordRaw,  } from "vue-router";
import Home from "@/views/Home";
const teste = [
  {
    id: 1,
    name: 'first',
    details: 'Este é a primeira rota'
  },
  {
    id: 2,
    name: 'second',
    details: 'Este é a segunda rota'
  },
  {
    id: 3,
    name: 'third',
    details: 'Este é a terceira rota'
  },
  {
    id: 4,
    name: 'fourth',
    details: 'Este é a quarta rota'
  }
];

const routes : Array<RouteRecordRaw>  = [
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
    component: () => import("@/components/shared/RotasParametos"),
    beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized){
      const exist = teste.find(t => t.id === parseInt(to.params.id as string))
      if (!exist) return {
        name: 'NotFound',
        params: { pathMatch: to.path.split('/').slice(1) },
        query: to.query,
        hash: to.hash
      }
    }
  },
  {
    path: '/calculadora',
    name: 'Calculadora',
    component: () => import(/* webpackChunckName: "parametros" */"@/views/Calculadora")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunckName: "paramentos_filho" */"@/views/NotFound")
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
