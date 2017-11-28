import actions from './actions'
import * as actionTypes from './types'

describe('Counter actions', () => {
  it('should return increment action', () => {
    expect(
      actions.increment()
    ).toEqual({
      type: actionTypes.INCREMENT
    })
  })

  it('should return decrement action', () => {
    expect(
      actions.decrement()
    ).toEqual({
      type: actionTypes.DECREMENT
    })
  })
})
