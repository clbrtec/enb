export default {
  EnbModal: { component: '', active: false },
  UploadImg: [],
  SelectedProdEdit: {
    id: '',
    code: '',
    tipo: '',
    name: '',
    preco: '',
    oferta: '',
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
    individual: false
  },
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
  LinkSidebar: [
    {
      text: 'Conta'
    },
    {
      text: 'Produtos',
      path: '/painel/produtos'
    },
    {
      text: 'Clientes'
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
