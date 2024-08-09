export default {
  SetModal: ({ commit }, payload) => new Promise((resolve) => {
    commit('SET_MODAL', payload)
    resolve()
  }),
  PushImg ({ commit }, payload) {
    commit('PUSH_IMG', payload)
  },
  ChangeProdEdit ({ commit }, payload) {
    commit('CHANGE_PRODEDIT', payload)
  },
  ToFileProd: ({ commit }, payload) => new Promise((resolve) => {
    commit('TOFILE_PROD', payload)
    resolve()
  }),
  ChangeStatusProd ({ commit }, payload) {
    commit('CHANGESTATUS_PROD', payload)
  },
  UpdateProdCateg ({ commit }, payload) {
    commit('UPDATE_PRODCATEG', payload)
  },
  PushCateg ({ commit }, payload) {
    commit('PUSH_CATEG', payload)
  },
  PushProdEdit: ({ commit }, payload) => new Promise((resolve) => {
    commit('PUSH_PRODEDIT', payload)
    resolve()
  }),
  DeleteProdEdit ({ commit }, payload) {
    commit('DELETE_PRODEDIT', payload)
  },
  ClearProdEdit: ({ commit }) => new Promise((resolve) => {
    commit('CLEAR_PRODEDIT')
    resolve()
  }),
  PushAllEdit ({ commit }, payload) {
    commit('PUSH_ALLEDIT', payload)
  },
  CopyProd ({ commit }, payload) {
    commit('COPY_PROD', payload)
  },
  UpdatePropProd: ({ commit }, payload) => new Promise((resolve) => {
    commit('UPDATE_PROPPROD', payload)
    resolve()
  }),
  PushPropProd: ({ commit }, payload) => new Promise((resolve) => {
    let newProp = {
      id: Math.round(Math.random() * 1000000),
      active: false,
      name: payload.name,
      values: payload.values
    }
    commit('PUSH_PROPPROD', newProp)
    resolve()
  }),
  UpdateValueProp: ({ commit }, payload) => new Promise((resolve) => {
    commit('UPDATE_VALUEPROP', payload)
    resolve()
  }),
  ChangeGiftEdit: ({ commit }, payload) => new Promise((resolve) => {
    commit('CHANGE_GIFT_EDIT', payload)
    resolve()
  }),
  PushGift: ({ commit }, payload) => new Promise((resolve) => {
    let newGift = {
      id: Math.round(Math.random() * 1000000),
      codigo: payload.gift.codigo,
      tipo: payload.gift.tipo,
      valor: payload.gift.valor,
      validade: payload.gift.validade,
      gastoMin: payload.gift.gastoMin,
      gastoMax: payload.gift.gastoMax,
      produtos: payload.produtos,
      produtoDel: payload.produtoDel,
      categorias: payload.categorias,
      categoriasDel: payload.categoriasDel,
      emailsDel: payload.gift.emailsDel,
      limiteCupom: payload.gift.limiteCupom,
      limiteNprodutos: payload.gift.limiteNprodutos,
      limiteUser: payload.gift.limiteUser,
      freteGratis: payload.gift.freteGratis,
      individual: payload.gift.individual,
      itensVendaDel: payload.gift.itensVendaDel
    }
    commit('PUSH_GIFT', newGift)
    resolve()
  }),
  SetGiftEdit: ({ commit }, payload) => new Promise((resolve) => {
    commit('SET_GIFT_EDIT', payload)
    resolve()
  }),
  DeleteGift: ({ commit }, payload) => new Promise((resolve) => {
    commit('DELETE_GIFT', payload)
    resolve()
  })
}
