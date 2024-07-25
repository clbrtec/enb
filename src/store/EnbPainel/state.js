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
