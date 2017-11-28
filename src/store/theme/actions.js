import * as actionTypes from './types'

const updateTheme = (theme) => ({
  type: actionTypes.INCREMENT,
  payload: theme
})

export default {
  updateTheme
}