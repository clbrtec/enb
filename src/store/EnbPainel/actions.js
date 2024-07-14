export default {
  SetModal ({ commit }, payload) {
    commit('SET_MODAL', payload)
  },
  PushImg ({ commit }, payload) {
    commit('PUSH_IMG', payload)
  },
  ChangeProdEdit ({ commit }, payload) {
    commit('CHANGE_PRODEDIT', payload)
  }
}
