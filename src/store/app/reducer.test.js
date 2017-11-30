import reducer from './reducer'
import * as actionTypes from './types'

describe('[store] App reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ drawerOpen: false })
  })

  it('should toggle drawer to open', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.TOGGLE_DRAWER
      })
    ).toEqual({ drawerOpen: true })
  })
})
