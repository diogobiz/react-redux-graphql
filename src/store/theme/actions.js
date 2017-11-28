import * as actionTypes from './types'

const updateTheme = (theme) => ({
  type: actionTypes.UPDATE_THEME,
  payload: theme
})

export default {
  updateTheme
}