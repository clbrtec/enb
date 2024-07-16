export default {
  SetModal ({ commit }, payload) {
    commit('SET_MODAL', payload)
  },
  PushImg ({ commit }, payload) {
    commit('PUSH_IMG', payload)
  },
  ChangeProdEdit ({ commit }, payload) {
    commit('CHANGE_PRODEDIT', payload)
  },
  UpdateProdCateg ({ commit }, payload) {
    commit('UPDATE_PRODCATEG', payload)
  },
  PushCateg ({ commit }, payload) {
    commit('PUSH_CATEG', payload)
  }
}
