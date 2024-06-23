export default {
  selectedThemeTop: state => state.Themes.filter(t => t.selected)[0],
  themesTop: state => state.Themes,
  checkThemes: state => state.Themes.map(t => t.selected)
}
