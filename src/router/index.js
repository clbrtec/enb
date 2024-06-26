import { createRouter, createWebHistory } from 'vue-router'
import LoginPainel from '../views/LoginPainel.vue'
import EnbPainel from '../views/EnbPainel.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
