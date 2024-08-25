import img from './img'
import img2 from './img2'
export default {
  Modal01: {
    component: 'EnbLogin01',
    active: false
  },
  ItemSelected01: {},
  CheckoutItens01: [],
  ShowCheckout: false,
  ShowSearch01: false,
  LinksTheme01: [
    {
      text: 'Produtos',
      path: '/',
      icon: 'StoreIcon01'
    },
    {
      text: 'Carrinho',
      path: '/checkout',
      icon: 'CartShopIcon01'
    },
    {
      text: 'Finalizar Compra',
      path: '/complete',
      icon: 'LikeIcon01'
    },
    {
      text: 'Meus Pedidos',
      path: '/pedidos',
      icon: 'ListIcon01'
    }
  ],
  Produtos01: [[
    {
      id: 15248,
      code: '',
      tipo: 'Simples',
      name: 'Massa Lasanha Vilma 500gr',
      status: true,
      preco: 1.99,
      oferta: 0.99,
      img: [img],
      descricao: 'No mundo atual, o desenvolvimento contínuo de distintas formas de atuação causa impacto indireto na reavaliação das diretrizes de desenvolvimento para o futuro',
      dateOfertaStart: '',
      dateOfertaEnd: '',
      categoria: 'Massas',
      gerEstoque: false,
      statusEstoque: 'Em estoque',
      estoque: 0,
      pendencia: '',
      visibilidade: '',
      visualizacao: 0,
      atributos: [],
      estoqueVariavel: [],
      dateCreate: '28/07/2024'
    },
    {
      id: 15249,
      code: '',
      tipo: 'Simples',
      name: 'Camiseta Masculina básica paris casual Estampada T-shirt',
      status: true,
      preco: 1.99,
      oferta: 0.99,
      img: [img2],
      descricao: 'No mundo atual, o desenvolvimento contínuo de distintas formas de atuação causa impacto indireto na reavaliação das diretrizes de desenvolvimento para o futuro',
      dateOfertaStart: '',
      dateOfertaEnd: '',
      categoria: 'Massas',
      gerEstoque: false,
      statusEstoque: 'Em estoque',
      estoque: 0,
      pendencia: '',
      visibilidade: '',
      visualizacao: 0,
      atributos: [],
      estoqueVariavel: [],
      dateCreate: '28/07/2024'
    }
  ], []],
  ResultSearch01: [],
  ResultFilterCateg: []
}
