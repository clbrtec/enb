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
  }),
  SetMultiSelect: ({ commit }, payload) => new Promise((resolve) => {
    commit('SET_MULTI_SELECT', payload)
    resolve()
  }),
  ChangeUserEdit: ({ commit }, payload) => new Promise((resolve) => {
    commit('CHANGE_USER_EDIT', payload)
    resolve()
  }),
  ChangeUserPermission: ({ commit }, payload) => new Promise((resolve) => {
    commit('CHANGE_USER_PERMISSION', payload)
    resolve()
  }),
  PushUser: ({ commit }, payload) => new Promise((resolve) => {
    let newUser = {
      id: Math.round(Math.random() * 1000000),
      status: true,
      usuario: payload.usuario,
      nome: payload.nome,
      sobrenome: payload.sobrenome,
      email: payload.email,
      senha: payload.senha,
      permission: payload.permission
    }
    commit('PUSH_USER', newUser)
    commit('CLEAR_USER_EDIT')
    resolve()
  }),
  UpdateStatusUser: ({ commit }, payload) => new Promise((resolve) => {
    commit('UPDATE_STATUS_USER', payload)
    resolve()
  }),
  DeleteUser: ({ commit }, payload) => new Promise((resolve) => {
    commit('DELETE_USER', payload)
    resolve()
  }),
  SetUserEdit: ({ commit }, payload) => new Promise((resolve) => {
    commit('SET_USER_EDIT', payload)
    resolve()
  }),
  ChangeTheme: ({ commit }, payload) => new Promise((resolve) => {
    commit('CHANGE_THEME', payload)
    resolve()
  }),
  ToggleSearchLoad: ({ commit }, payload) => new Promise((resolve) => {
    commit('TOGGLE_SEARCH_LOAD', payload)
    resolve()
  }),
  UpdateLogo: ({ commit }, payload) => new Promise((resolve) => {
    commit('UPDATE_LOGO', payload)
    resolve()
  })
}
