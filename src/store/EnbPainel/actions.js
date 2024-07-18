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
  },
  PushProdEdit ({ commit }, payload) {
    commit('PUSH_PRODEDIT', payload)
  },
  DeleteProdEdit ({ commit }, payload) {
    commit('DELETE_PRODEDIT', payload)
  },
  ClearProdEdit ({ commit }) {
    commit('CLEAR_PRODEDIT')
  },
  PushAllEdit ({ commit }, payload) {
    commit('PUSH_ALLEDIT', payload)
  },
  CopyProd ({ commit }, payload) {
    commit('COPY_PROD', payload)
  }
}
