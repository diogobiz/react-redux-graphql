import { combineReducers } from 'redux'

import { responsiveStateReducer } from 'redux-responsive'

import responsiveDrawer from 'material-ui-responsive-drawer/lib/store/reducer'

import counter from './counter/reducer'
import theme from './theme/reducer'
import locale from './locale/reducer'

export default combineReducers({
  browser: responsiveStateReducer,
  responsiveDrawer,
  counter,
  theme,
  locale
})
