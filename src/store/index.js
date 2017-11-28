import { createStore, compose } from 'redux'

import reducers from './reducers'
import initState from './init'

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose

const configStore = () => {
  return createStore(
    reducers,
    initState,
    composeEnhancers()
  )
}

export default configStore
