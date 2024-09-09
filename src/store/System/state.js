export default {
  Profile: {
    logged: false,
    admin: false
  },
  Themes: [
    {
      name: 'Modelo 01',
      modal: 'EnbModal01',
      checkout: 'CheckoutSide01',
      search: 'SearchCont01',
      nave: 'EnbNave01',
      footer: 'EnbFooter01',
      route: 'Theme01',
      active: true
    },
    {
      name: 'Modelo 02',
      modal: 'EnbModal02',
      checkout: 'CheckoutSide01',
      search: 'SearchCont01',
      nave: 'EnbNave02',
      footer: 'EnbFooter01',
      route: 'Theme02',
      active: false
    },
    {
      name: 'Modelo 03',
      modal: 'EnbModal03',
      checkout: 'CheckoutSide01',
      search: 'SearchCont01',
      nave: 'EnbNave03',
      footer: 'EnbFooter03',
      route: 'Theme03',
      active: false
    }
  ],
  Theme: {
    modal: 'EnbModal01',
    checkout: 'CheckoutSide01',
    search: 'SearchCont01',
    nave: 'EnbNave01',
    footer: 'EnbFooter01',
    route: 'Theme01'
  },
  EnbMsg: [],
  Users: [],
  SelectedUserEdit: {
    usuario: '',
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    permission: [
      {
        id: 1,
        name: 'Produtos',
        nivel: 0,
        seq: 1,
        parent: 0,
        active: false
      },
      {
        id: 2,
        name: 'Cadastro',
        nivel: 1,
        seq: 2,
        parent: 1,
        active: false
      }
    ]
  },
  SearchLoad: false
}
