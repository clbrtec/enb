export default {
  'CHANGE_CLIENTEDIT' (state, payload) {
    for (let key in payload) {
      state.SelectedClientEdit[key] = payload[key]
    }
  },
  'PUSH_CLIENT' (state, payload) {
    state.Clients.push(payload)
  },
  'SET_CLIENTEDIT' (state, payload) {
    state.SelectedClientEdit = payload
  },
  'SET_CLIENTVIEW' (state, payload) {
    state.ClientView = payload
  },
  'PUSH_PEDIDO' (state, payload) {
    state.Pedidos.push(payload)
  }
}
