import { compose } from 'redux'

import configStore, { getComposeEnhancers } from './'

import initState from './init'

describe('[store] Store', () => {
  it('should return initial state', () => {
    const store = configStore()

    expect(
      store.getState()
    ).toEqual(initState)
  })

  it('should return compose if env !== development', () => {
    expect(
      getComposeEnhancers('production')
    ).toEqual(compose)
  })

  it('should return compose if env === development', () => {
    // mock data
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = compose

    expect(
      getComposeEnhancers('development')
    ).toEqual(compose)
  })
})
