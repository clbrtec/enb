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
  }
}
