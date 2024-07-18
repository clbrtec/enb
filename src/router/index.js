import { createRouter, createWebHistory } from 'vue-router'
// import LoginPainel from '../views/LoginPainel.vue'
import EnbPainel from '../views/EnbPainel.vue'
import MyStore from '../views/MyStore.vue'
import Theme01 from './Theme01'
import Produtos from '@/components/EnbPainel/Produtos/Produtos.vue'
import RegisterProd from '@/components/EnbPainel/Produtos/Register/RegisterProd'

const routes = [
  {  
    path: '/painel',
    name: 'Painel',
    component: EnbPainel,
    children: [
      {
        path: '/painel/produtos',
        name: 'Produtos',
        component: Produtos
      },
      {
        path: '/painel/produtos/register',
        name: 'Adicionar produto',
        component: RegisterProd
      },
      {
        path: '/painel/produtos/edit',
        name: 'Editar produto',
        component: RegisterProd
      },
      {
        path: '/painel/produtos/copy',
        name: 'Copiar produto',
        component: RegisterProd
      }
    ]
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
