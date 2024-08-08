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
  PushMultiSelect: ({ commit }, payload) => new Promise((resolve) => {
    commit('PUSH_MULTI_SELECT', payload)
    resolve()
  }),
  DelMultiSelect: ({ commit }, payload) => new Promise((resolve) => {
    commit('DEL_MULTI_SELECT', payload)
    resolve()
  })
}
