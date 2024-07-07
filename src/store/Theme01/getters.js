export default {
  LinksTheme01: state => state.LinksTheme01,
  Produtos01: state => state.Produtos01,
  ShowCheckout: state => state.ShowCheckout,
  ShowSearch01: state => state.ShowSearch01,
  CheckoutItens01: state => state.CheckoutItens01,
  CheckoutTotal01: state => state.CheckoutItens01.map(i => i.preco * i.qtda).reduce((t, n) => t + n, 0).toFixed(2).replace('.', ','),
  ItemSelected01: state => state.ItemSelected01,
  Modal01: state => state.Modal01,
  Profile01: state => state.Profile01,
  ResultSearch01: state => state.ResultSearch01
}
