export default {
  ToggleCheckout01 ({ commit }, payload) {
    commit('TOGGLE_CHEKCOUT01', payload)
  },
  ToggleSearch01 ({ commit }, payload) {
    commit('TOGGLE_SEARCH01', payload)
  },
  PushCheckout01 ({ commit }, payload) {
    commit('PUSH_CHECKOUT01', payload)
  },
  QtdaCheckoutAdd01 ({ commit }, payload) {
    commit('QTDA_CHECKOUTADD01', payload)
  },
  QtdaCheckoutSub01 ({ commit }, payload) {
    commit('QTDA_CHECKOUTSUB01', payload)
  },
  DeleteCheckout01 ({ commit }, payload) {
    commit('DELETE_CHECKOUT01', payload)
  },
  SetItem01: ({ commit }, payload) => new Promise((resolve) => {
    commit('ITEM_SELECTED01', payload)
    resolve()
  }),
  SetModal01 ({ commit }, payload) {
    commit('SET_MODAL01', payload)
  },
  GetLogin01 ({ commit }) {
    commit('GET_LOGIN01')
  },
  GetLogout01 ({ commit }) {
    commit('GET_LOGOUT01')
  },
  SearchProd01 ({ commit }, payload) {
    commit('SEARCH_PROD01', payload)
  },
  DeleteProd: ({ commit }, payload) => new Promise((resolve) => {
    commit('DELETE_PROD', payload)
    resolve()
  }),
  PushProd: ({ commit }, payload) => new Promise((resolve) => {
    let date = new Date()
    let newItem = {
      id: Math.round(Math.random() * 1000000),
      code: payload.code,
      tipo: payload.tipo,
      name: payload.name,
      status: true,
      preco: payload.preco,
      oferta: payload.oferta,
      img: payload.img,
      descricao: payload.descricao,
      dateOfertaStart: payload.dateOfertaStart,
      dateOfertaEnd: payload.dateOfertaEnd,
      categoria: payload.categoria,
      gerEstoque: payload.gerEstoque,
      statusEstoque: payload.statusEstoque,
      estoque: payload.estoque,
      pendencia: payload.pendencia,
      visibilidade: payload.visibilidade,
      visualizacao: payload.visualizacao,
      individual: payload.individual,
      dateCreate: `${date.getDate()}/${('00' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
    }
    commit('PUSH_PROD', newItem)
    resolve(newItem)
  })
}
