export default {
  PushPedido: ({ commit }, payload) => new Promise((resolve) => {
    let date = new Date()
    let newPedido = {
      id: Math.round(Math.random() * 1000000),
      status: 0,
      usuario: payload.usuario,
      itens: payload.itens,
      data: `${date.getDate()}/${('00' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
    }
    commit('PUSH_PEDIDO', newPedido)
    resolve(newPedido)
  }),
  ChangeClientEdit ({ commit }, payload) {
    commit('CHANGE_CLIENTEDIT', payload)
  },
  PushClient: ({ commit }, payload) => new Promise((resolve) => {
    let newClient = {
      id: Math.round(Math.random() * 1000000),
      usuario: payload.usuario,
      email: payload.email,
      nome: payload.nome,
      sobrenome: payload.sobrenome,
      cpf: payload.cpf,
      celular: payload.celular,
      cep: payload.cep,
      endereco: payload.endereco,
      bairro: payload.bairro,
      numero: payload.numero,
      cidade: payload.cidade,
      uf: payload.uf,
      senha: payload.senha
    }
    commit('PUSH_CLIENT', newClient)
    resolve(newClient)
  }),
  SetClientEdit: ({ commit }, payload) => new Promise((resolve) => {
    commit('SET_CLIENTEDIT', payload)
    resolve()
  }),
  SetClientView: ({ commit }, payload) => new Promise((resolve) => {
    commit('SET_CLIENTVIEW', payload)
    resolve()
  })
}
