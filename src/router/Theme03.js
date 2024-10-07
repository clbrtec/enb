import EnbProdutos from '@/components/Theme03/Produtos/EnbProdutos'
import ProdutoView from '@/components/Theme03/Produtos/ProdutoView/ProdutoView'
import SearchResult from '@/components/Theme03/Search/SearchResult'
import EnbProfile from '@/components/Theme03/Profile/EnbProfile'

export default [
  {
    path: '/loja',
    name: 'Loja',
    component: EnbProdutos
  },
  {
    path: '/',
    name: 'Produtos03',
    component: EnbProdutos
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: EnbProdutos
  },
  {
    path: '/produtoview',
    name: 'Produtos View',
    component: ProdutoView
  },
  {
    path: '/search',
    name: 'Pesquisa',
    component: SearchResult
  },
  {
    path: '/profile',
    name: 'Profile',
    component: EnbProfile
  }
]
