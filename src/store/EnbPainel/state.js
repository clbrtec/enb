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
    caracter: [],
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
    },
    {
      active: false,
      childrens: [],
      name: 'Camisetas'
    }
  ],
  CategoriasImoveis: [
    {
      active: false,
      childrens: [],
      name: 'Apartamento'
    },
    {
      active: false,
      childrens: [],
      name: 'Casa'
    },
    {
      active: false,
      childrens: [],
      name: 'Sala'
    },
    {
      active: false,
      childrens: [],
      name: 'Loja'
    },
    {
      active: false,
      childrens: [],
      name: 'Sítio'
    },
    {
      active: false,
      childrens: [],
      name: 'Terreno'
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
  Gifts: [],
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
      text: 'Usuários',
      path: '/painel/users',
      icon: 'UserIcon'
    },
    {
      text: 'Cupons',
      path: '/painel/gift',
      icon: 'GiftIcon'
    },
    {
      text: 'Preferências',
      path: '/painel/preference',
      icon: 'ConfigIcon'
    },
    {
      text: 'Loja',
      path: '/loja',
      icon: 'StoreIcon01'
    }
  ]
}
