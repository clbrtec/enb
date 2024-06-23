export default {
  'UPDATE_THEME_TOP' (state, payload) {
    let themes = state.Themes
    for(let k in themes) {
      themes[k].selected = false
    }
    for(let k in themes) {
      if(themes[k].name === payload) {
        themes[k].selected = true
      }
    }
    state.Themes = themes
  }
}
