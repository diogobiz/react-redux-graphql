import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { shallowWithIntl, mountWithIntl, intl } from './intl-enzyme-test-helper'
import { shallowWithMui, muiTheme } from './mui-enzyme-test-helper'

configure({ adapter: new Adapter() })

const nodeWithMuiAndIntlProp = (node) => React.cloneElement(node, { muiTheme, intl })

export const shallowWithMuiAndIntl = (node, { context } = {}) => shallow(
  nodeWithMuiAndIntlProp(node),
  {
    context: Object.assign({}, context, { muiTheme, intl })
  }
)