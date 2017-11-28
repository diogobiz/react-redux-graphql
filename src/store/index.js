import { createStore, compose } from 'redux'
import { responsiveStoreEnhancer } from 'redux-responsive'

import reducers from './reducers'
import initState from './init'

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose

const enhancer = composeEnhancers(
  responsiveStoreEnhancer
)

const configStore = () => {
  return createStore(
    reducers,
    initState,
    enhancer
  )
}

export default configStore
