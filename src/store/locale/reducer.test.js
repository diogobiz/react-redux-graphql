import reducer from './reducer'
import * as actionTypes from './types'

describe('[store] Locale reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual('en')
  })

  it('should update locale to br', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.UPDATE_LOCALE,
        payload: 'br'
      })
    ).toEqual('br')
  })
})
