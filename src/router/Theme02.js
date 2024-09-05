import EnbProdutos02 from '@/components/Theme02/Produtos/EnbProdutos02'
import EnbCheckout02 from '@/components/Theme02/Checkout/EnbCheckout02'
import CompletePurchase from '@/components/Theme02/Client/CompletePurchase'
import EnbPedidos from '@/components/Theme02/Pedidos/EnbPedidos'
import PedidoView from '@/components/Theme02/Pedidos/PedidoView'
import EnbItemView02 from '@/components/Theme02/Produtos/EnbItemView02'
import SearchResult from '@/components/Theme02/Search/SearchResult'

export default [
  {
    path: '/',
    name: 'Produtos02',
    component: EnbProdutos02
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: EnbProdutos02
  },
  {
    path: '/loja',
    name: 'Loja',
    component: EnbProdutos02
  },
  {
    path: '/checkout',
    name: 'Carrinho',
    component: EnbCheckout02
  },
  {
    path: '/complete',
    name: 'Finalizar compra',
    component: CompletePurchase
  },
  {
    path: '/pedidos',
    name: 'Pedidos Loja',
    component: EnbPedidos
  },
  {
    path: '/pedidos/view',
    name: 'Pedido View',
    component: PedidoView
  },
  {
    path: '/itemview',
    name: 'Produto',
    component: EnbItemView02
  },
  {
    path: '/search',
    name: 'Pesquisa',
    component: SearchResult
  }
]
