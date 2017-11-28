import * as actionTypes from './types'

export default (state = { value: 0 }, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return ++state.value

    case actionTypes.DECREMENT:
      return --state.value

    default:
      return state
  }
}