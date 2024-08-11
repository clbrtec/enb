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
  },
  'SET_MULTI_SELECT' (state, payload) {
    state[payload.store] = payload.list
  },
  'CHANGE_USER_EDIT' (state, payload) {
    for(let key in payload) {
      state.SelectedUserEdit[key] = payload[key]
    }
  },
  'CHANGE_USER_PERMISSION' (state, payload) {
    state.SelectedUserEdit.permission.map(p => {
      if(p.id === payload.id) {
        p.active = !p.active
      }
    })
  },
  'PUSH_USER' (state, payload) {
    state.Users.push(payload)
  },
  'UPDATE_STATUS_USER' (state, payload) {
    state.Users.map(u => {
      if(u.id === payload.id) {
        u.status = payload.status
      }
    })
  },
  'DELETE_USER' (state, payload) {
    state.Users = state.Users.filter(u => u.id !== payload.id)
  },
  'SET_USER_EDIT' (state, payload) {
    state.SelectedUserEdit = payload
  }
}
