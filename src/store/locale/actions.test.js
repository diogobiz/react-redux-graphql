import actions from './actions'
import * as actionTypes from './types'

describe('Locale actions', () => {
  it('should return update locale action', () => {
    expect(
      actions.updateLocale('br')
    ).toEqual({
      type: actionTypes.UPDATE_LOCALE,
      payload: 'br'
    })
  })
})
