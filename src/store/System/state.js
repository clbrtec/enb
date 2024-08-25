export default {
  Profile: {
    logged: false,
    admin: false
  },
  Theme: {
    modal: 'EnbModal02',
    checkout: 'CheckoutSide01',
    search: 'SearchCont01',
    nave: 'EnbNave02',
    footer: 'EnbFooter01',
    route: 'Theme02'
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
  }
}
