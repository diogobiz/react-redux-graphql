import reducer from './reducer'
import * as actionTypes from './types'

describe('Theme reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual('dark')
  })

  it('should update theme to light', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.UPDATE_THEME,
        payload: 'light'
      })
    ).toEqual('light')
  })
})
