export default {
  selectTheme ({ commit }, payload) {
    commit('UPDATE_THEME_TOP', payload)
  },
  selectTopColor ({ commit }, payload) {
    commit('UPDATE_COLOR_TOP', payload)
  }
}
