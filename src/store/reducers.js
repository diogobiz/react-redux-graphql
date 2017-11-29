import { combineReducers } from 'redux'

import counter from './counter/reducer'
import theme from './theme/reducer'
import locale from './locale/reducer'

export default combineReducers({
  counter,
  theme,
  locale
})
