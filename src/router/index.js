import { createRouter, createWebHistory } from 'vue-router'
import LoginPainel from '../views/LoginPainel.vue'
import EnbPainel from '../views/EnbPainel.vue'
import CompTop from '@/components/EnbPainel/CompTop.vue'
import EnbMystore from '@/views/EnbMystore.vue'

const routes = [
  {
    path: '/',
    name: 'LoginPainel',
    component: LoginPainel
  },
  {
    path: '/minhaloja',
    name: 'Minha Loja',
    component: EnbMystore
  },
  {  
    path: '/painel',
    name: 'Painel',
    component: EnbPainel,
    children: [
      {
        path: '/painel/comptop',
        name: 'Barra de Navegação',
        component: CompTop
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
