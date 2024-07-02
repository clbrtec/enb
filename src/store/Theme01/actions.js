export default {
  ToggleCheckout01 ({ commit }, payload) {
    commit('TOGGLE_CHEKCOUT01', payload)
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
  }
}
