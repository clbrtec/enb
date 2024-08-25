import { createRouter, createWebHistory } from 'vue-router'
// import LoginPainel from '../views/LoginPainel.vue'
import EnbPainel from '../views/EnbPainel.vue'
import MyStore from '../views/MyStore.vue'
import Theme01 from './Theme01'
import Theme02 from './Theme02'
import Painel from './Painel'
import store from '../store'

function ThemeRoute (theme) {
  let routes = { Theme01, Theme02 }
  return routes[theme]
}

console.log(store.state.System.Theme.route)

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
    children: ThemeRoute(store.state.System.Theme.route)
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
