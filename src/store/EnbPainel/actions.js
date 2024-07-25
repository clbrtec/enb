export default {
  SetModal: ({ commit }, payload) => new Promise((resolve) => {
    commit('SET_MODAL', payload)
    resolve()
  }),
  PushImg ({ commit }, payload) {
    commit('PUSH_IMG', payload)
  },
  ChangeProdEdit ({ commit }, payload) {
    commit('CHANGE_PRODEDIT', payload)
  },
  ToFileProd: ({ commit }, payload) => new Promise((resolve) => {
    commit('TOFILE_PROD', payload)
    resolve()
  }),
  ChangeStatusProd ({ commit }, payload) {
    commit('CHANGESTATUS_PROD', payload)
  },
  UpdateProdCateg ({ commit }, payload) {
    commit('UPDATE_PRODCATEG', payload)
  },
  PushCateg ({ commit }, payload) {
    commit('PUSH_CATEG', payload)
  },
  PushProdEdit: ({ commit }, payload) => new Promise((resolve) => {
    commit('PUSH_PRODEDIT', payload)
    resolve()
  }),
  DeleteProdEdit ({ commit }, payload) {
    commit('DELETE_PRODEDIT', payload)
  },
  ClearProdEdit: ({ commit }) => new Promise((resolve) => {
    commit('CLEAR_PRODEDIT')
    resolve()
  }),
  PushAllEdit ({ commit }, payload) {
    commit('PUSH_ALLEDIT', payload)
  },
  CopyProd ({ commit }, payload) {
    commit('COPY_PROD', payload)
  }
}
