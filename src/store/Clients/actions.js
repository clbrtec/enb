export default {
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
      cep: payload.cep,
      endereco: payload.endereco,
      numero: payload.numero,
      cidade: payload.cidade,
      uf: payload.uf
    }
    commit('PUSH_CLIENT', newClient)
    resolve()
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
