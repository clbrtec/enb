import { createRouter, createWebHistory } from 'vue-router'
import LoginPainel from '../views/LoginPainel.vue'
import EnbPainel from '../views/EnbPainel.vue'
import MyStore from '../views/MyStore.vue'
import Theme01 from './Theme01'

const routes = [
  {
    path: '/',
    name: 'LoginPainel',
    component: LoginPainel
  },
  {  
    path: '/painel',
    name: 'Painel',
    component: EnbPainel,
    children: []
  },
  {
    path: '/mystore',
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
