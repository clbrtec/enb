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
    state.PropsProd.push(payload)
  },
  'CHANGE_PROPPROD' (state, payload) {
    let upProp = state.PropsProd.filter(p => p.id === payload.id)[0]
    for(let key in payload.prop) {
      upProp[key] = payload.prop[key]
    }
  },
  'SYNC_PROPS' (state, payload) {
    for(let key in payload.SelectedProdEdit.atributos) {
      payload.PropsProd.filter(p => p.id === payload.SelectedProdEdit.atributos[key].id)[0] = payload.SelectedProdEdit.atributos[key]
    }
  }
}
