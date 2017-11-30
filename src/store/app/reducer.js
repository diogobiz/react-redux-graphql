import * as actionTypes from './types'

export default (state = { drawerOpen: false }, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }

    default:
      return state
  }
}