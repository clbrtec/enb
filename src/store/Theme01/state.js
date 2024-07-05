import produtos from "./produtos"
export default {
  Profile01: {
    logged: false,
    admin: false
  },
  Modal01: {
    component: 'EnbLogin01',
    active: false
  },
  ItemSelected01: {},
  CheckoutItens01: [],
  ShowCheckout: false,
  LinksTheme01: [
    {
      text: 'Produtos',
      path: '/mystore'
    },
    {
      text: 'Carrinho',
      path: '/checkout'
    },
    {
      text: 'Finalizar Compra',
      path: ''
    },
    {
      text: 'Meus Pedidos',
      path: ''
    }
  ],
  Produtos01: produtos
}
