import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

export const themes = [
  {
    id: 'light',
    source: lightBaseTheme
  },
  {
    id: 'dark',
    source: darkBaseTheme
  }
]

const getThemeSource = (themeId) => {
  const theme = themes.find((t) => t.id === themeId)

  return !!theme ? theme.source : darkBaseTheme
}

export default getThemeSource