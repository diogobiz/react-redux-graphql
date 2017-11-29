import React from 'react'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiThemeable from 'material-ui/styles/muiThemeable'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

configure({ adapter: new Adapter() })

// Create the MuiThemeProvider to retrieve context for wrapping around.
export const muiProvider = new MuiThemeProvider({ muiTheme: getMuiTheme(darkBaseTheme) })
export const { muiTheme } = muiProvider.getChildContext()

const nodeWithMuiProp = (node) => React.cloneElement(node, { muiTheme })

export const shallowWithMui = (node, { context } = {}) => shallow(
  nodeWithMuiProp(node),
  {
    context: Object.assign({}, context, { muiTheme })
  }
)