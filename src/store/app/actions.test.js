import actions from './actions'
import * as actionTypes from './types'

describe('[store] App actions', () => {
  it('should return toggle drawer action', () => {
    expect(
      actions.toggleDrawer()
    ).toEqual({
      type: actionTypes.TOGGLE_DRAWER
    })
  })
})
