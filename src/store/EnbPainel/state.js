export default {
  EnbModal: { component: '', active: false },
  UploadImg: [],
  StatusProd: true,
  SelectedProdEdit: [{
    id: '',
    code: '',
    tipo: '',
    status: true,
    name: '',
    preco: 0,
    oferta: 0,
    img: [],
    descricao: '',
    dateOfertaStart: '',
    dateOfertaEnd: '',
    categoria: '',
    gerEstoque: false,
    statusEstoque: '',
    estoque: 0,
    pendencia: '',
    visibilidade: '',
    visualizacao: 0,
    atributos: [],
    individual: false
  }],
  Categorias: [
    {
      active: false,
      childrens: [],
      name: ''
    },
    {
      active: false,
      childrens: [],
      name: 'Massas'
    }
  ],
  SelectedGiftEdit: {
    id: '',
    codigo: '',
    tipo: '',
    valor: 0,
    validade: '',
    gastoMin: 0,
    gastoMax: 0,
    produtos: [],
    produtoDel: [],
    categorias: [],
    categoriasDel: [],
    emailsDel: [],
    limiteCupom: 0,
    limiteNprodutos: 0,
    limiteUser: 0,
    freteGratis: false,
    individual: false,
    itensVendaDel: false
  },
  LinkSidebar: [
    {
      text: 'Produtos',
      path: '/painel/produtos',
      icon: 'ProdIcon'
    },
    {
      text: 'Clientes',
      path: '/painel/client',
      icon: 'ClientIcon'
    },
    {
      text: 'Pedidos',
      path: '/painel/pedidos',
      icon: 'ListIcon01'
    },
    {
      text: 'Cupons',
      path: '/painel/gift',
      icon: 'GiftIcon'
    },
    {
      text: 'Loja',
      path: '/loja',
      icon: 'StoreIcon01'
    }
    // {
    //   text: 'Componentes',
    //   path: '',
    //   child: [
    //     {
    //       text: 'Navegação',
    //       path: '/painel/comptop'
    //     },
    //     {
    //       text: 'Menu',
    //       path: ''
    //     },
    //     {
    //       text: 'Item',
    //       path: ''
    //     },
    //     {
    //       text: 'Vitrine',
    //       path: ''
    //     },
    //     {
    //       text: 'Rodapé',
    //       path: ''
    //     },
    //     {
    //       text: 'Carrinho',
    //       path: ''
    //     }
    //   ]
    // }
  ]
}
