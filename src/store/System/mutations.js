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
  'PUSH_MULTI_SELECT' (state, payload) {
    if(typeof state[payload.store] === 'undefined') {
      state[payload.store] = []
    }
    state[payload.store].push(payload.data)
  },
  'DEL_MULTI_SELECT' (state, payload) {
    let newList = state[payload.store].filter(i => i.id !== payload.data.id)
    state[payload.store] = newList
  }
}
