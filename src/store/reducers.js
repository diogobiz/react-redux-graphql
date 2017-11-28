import { combineReducers } from 'redux'

import counter from './counter/reducer'
import theme from './theme/reducer'

export default combineReducers({
  counter,
  theme
})
