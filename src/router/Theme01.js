import EnbItens01 from '@/components/Theme01/Itens/EnbItens01'
import EnbItemView01 from '@/components/Theme01/Itens/EnbItemView01'
import EnbCheckoutView01 from '@/components/Theme01/Checkout/EnbCheckoutView01'
export default [
  {
    path: '/mystore',
    name: 'Produtos',
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
  }
]
