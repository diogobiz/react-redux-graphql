import { createStore, compose } from 'redux'

import reducers from './reducers'
import initState from './init'

export const getComposeEnhancers = (NODE_ENV) => (NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose

const composeEnhancers = getComposeEnhancers(process.env.NODE_ENV)

const configStore = () => createStore(
  reducers,
  initState,
  composeEnhancers()
)

export default configStore