import * as actionTypes from './types'

export default (state = 'en', action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOCALE:
      return action.payload

    default:
      return state
  }
}