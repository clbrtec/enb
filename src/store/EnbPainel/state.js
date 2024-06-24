export default {
  LinkSidebar: [
    {
      text: 'Minha conta'
    },
    {
      text: 'Clientes'
    },
    {
      text: 'Produtos'
    },
    {
      text: 'Componentes',
      path: '',
      child: [
        {
          text: 'Navegação',
          path: '/painel/comptop'
        },
        {
          text: 'Menu',
          path: ''
        },
        {
          text: 'Item',
          path: ''
        },
        {
          text: 'Vitrine',
          path: ''
        },
        {
          text: 'Rodapé',
          path: ''
        },
        {
          text: 'Carrinho',
          path: ''
        }
      ]
    },
    {
      text: 'Minha Loja',
      path: '/minhaloja'
    }
  ]
}
