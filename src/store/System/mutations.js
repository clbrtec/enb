export default {
  'PUSH_MSG' (state, payload) {
    state.EnbMsg.push({
      id: Math.round(Math.random() * 1000000),
      msg: payload.msg,
      color: payload.color
    })
  },
  'DEL_MSG' (state, payload) {
    state.EnbMsg = state.EnbMsg.filter(m => m.id !== payload)
  },
  'GET_LOGIN' (state, payload) {
    state.Profile = payload
  },
  'GET_LOGOUT' (state) {
    state.Profile = {
      logged: false,
      admin: false
    }
  },
  'PUSH_PROPPROD' (state, payload) {
    state.SelectedProdEdit[0].atributos.push(payload)
  }
}
