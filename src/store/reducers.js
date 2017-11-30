import { combineReducers } from 'redux'

import app from './app/reducer'
import counter from './counter/reducer'
import theme from './theme/reducer'
import locale from './locale/reducer'

export default combineReducers({
  app,
  counter,
  theme,
  locale
})
