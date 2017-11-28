import * as actionTypes from './types'

export default (state = 'dark', action) => {
  switch (action.type) {
    case actionTypes.UPDATE_THEME:
      return action.payload

    default:
      return state
  }
}