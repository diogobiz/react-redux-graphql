import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

export const themes = [
  {
    id: 'dark',
    source: darkBaseTheme
  },
  {
    id: 'light',
    source: lightBaseTheme
  }
]

export const getTheme = (themeId) => themes.find((theme) => theme.id === themeId) || themes[0]

export const getThemeSource = (themeId) => getTheme(themeId).source

export default getThemeSource