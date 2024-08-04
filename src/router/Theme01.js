import EnbItens01 from '@/components/Theme01/Itens/EnbItens01'
import EnbItemView01 from '@/components/Theme01/Itens/EnbItemView01'
import EnbCheckoutView01 from '@/components/Theme01/Checkout/EnbCheckoutView01'
import CompletePurchase from '@/components/Theme01/Client/CompletePurchase'
import EnbPedidos01 from '@/components/Theme01/Pedidos/EnbPedidos01'
import PedidoView from '@/components/Theme01/Pedidos/PedidoView'
export default [
  {
    path: '/',
    name: 'Produtos01',
    component: EnbItens01
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: EnbItens01
  },
  {
    path: '/itemview',
    name: 'Produto',
    component: EnbItemView01
  },
  {
    path: '/checkout',
    name: 'Carrinho',
    component: EnbCheckoutView01
  },
  {
    path: '/complete',
    name: 'Finalizar compra',
    component: CompletePurchase
  },
  {
    path: '/loja',
    name: 'Loja',
    component: EnbItens01
  },
  {
    path: '/pedidos',
    name: 'Pedidos Loja',
    component: EnbPedidos01
  },
  {
    path: '/pedidos/view',
    name: 'Pedido View',
    component: PedidoView
  }
]
