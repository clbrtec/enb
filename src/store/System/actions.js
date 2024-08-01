export default {
  PushMsg: ({ commit }, payload) => new Promise((resolve) => {
    commit('PUSH_MSG', payload)
    resolve()
  }),
  DelMsg: ({ commit }, payload) => new Promise((resolve) => {
    commit('DEL_MSG', payload)
    resolve()
  }),
  GetLogin: ({ commit }, payload) => new Promise((resolve) => {
    commit('GET_LOGIN', payload)
    resolve()
  }),
  GetLogout: ({ commit }) => new Promise((resolve) => {
    commit('GET_LOGOUT')
    resolve()
  }),
  PushPropProd: ({ commit }, payload) => new Promise((resolve) => {
    let newProp = {
      id: Math.round(Math.random() * 1000000),
      active: false,
      name: payload.name,
      values: payload.values
    }
    commit('PUSH_PROPPROD', newProp)
    resolve()
  }),
  ChangePropProd: ({ commit }, payload) => new Promise((resolve) => {
    commit('CHANGE_PROPPROD', payload)
    resolve()
  }),
  SyncProps: ({ commit }, payload) => new Promise((resolve) => {
    commit('SYNC_PROPS', payload)
    resolve()
  })
}
