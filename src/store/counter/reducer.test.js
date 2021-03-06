import reducer from './reducer'
import * as actionTypes from './types'

describe('[store] Counter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(0)
  })

  it('should increase a number', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.INCREMENT
      })
    ).toEqual(1)
  })

  it('should decrement a number', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.DECREMENT
      })
    ).toEqual(-1)
  })
})
