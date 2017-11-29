import reducers from './reducers'

import initState from './init'

describe('[store] reducers', () => {
  it('should return initial state', () => {
    expect(
      reducers(initState, {
        type: 'TYPE_NOT_FOUND'
      })
    ).toEqual(initState)
  })
})
