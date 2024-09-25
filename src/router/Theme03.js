import EnbProdutos from '@/components/Theme03/Produtos/EnbProdutos'
import ProdutoView from '@/components/Theme03/Produtos/ProdutoView/ProdutoView'

export default [
  {
    path: '/loja',
    name: 'Loja',
    component: EnbProdutos
  },
  {
    path: '/',
    name: 'Produtos',
    component: EnbProdutos
  },
  {
    path: '/produtoview',
    name: 'Produtos View',
    component: ProdutoView
  }
]
