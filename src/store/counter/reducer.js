import * as actionTypes from './types'

export default (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return ++state

    case actionTypes.DECREMENT:
      return --state

    default:
      return state
  }
}