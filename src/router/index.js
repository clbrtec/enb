import { createRouter, createWebHistory } from 'vue-router'
import LoginPainel from '../views/LoginPainel.vue'

const routes = [
  {
    path: '/',
    name: 'LoginPainel',
    component: LoginPainel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
