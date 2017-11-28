import actions from './actions'
import * as actionTypes from './types'

describe('Theme actions', () => {
  it('should return update theme action', () => {
    expect(
      actions.updateTheme('light')
    ).toEqual({
      type: actionTypes.UPDATE_THEME,
      payload: 'light'
    })
  })
})
