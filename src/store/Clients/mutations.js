export default {
  'CHANGE_CLIENTEDIT' (state, payload) {
    for (let key in payload) {
      state.SelectedClientEdit[key] = payload[key]
    }
  },
  'PUSH_CLIENT' (state, payload) {
    state.Clients.push(payload)
  }
}
