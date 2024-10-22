export default {
  LinksTheme01: state => state.LinksTheme01,
  Produtos01: state => state.Produtos01,
  ProdutosTotal01: state => state.Produtos01[0].concat(state.Produtos01[1]),
  ShowCheckout: state => state.ShowCheckout,
  ShowSearch01: state => state.ShowSearch01,
  CheckoutItens01: state => state.CheckoutItens01,
  CheckoutTotal01: state => state.CheckoutItens01.map(i => i.preco * i.qtda).reduce((t, n) => t + n, 0),
  ItemSelected01: state => state.ItemSelected01,
  Modal01: state => state.Modal01,
  ResultSearch01: state => state.ResultSearch01,
  ResultFilterCateg: state => state.ResultFilterCateg,
  CategSelected: state => state.CategSelected
}
