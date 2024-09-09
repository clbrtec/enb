import { createRouter, createWebHistory } from 'vue-router'
import EnbPainel from '../views/EnbPainel.vue'
import MyStore from '../views/MyStore.vue'
import Theme01 from './Theme01'
import Painel from './Painel'

const routes = [
  {  
    path: '/painel',
    name: 'Painel',
    component: EnbPainel,
    children: Painel
  },
  {
    path: '/',
    name: 'Minha Loja',
    component: MyStore,
    children: Theme01
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
