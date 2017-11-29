/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */
import React from 'react'

import { IntlProvider, intlShape } from 'react-intl'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
import messages from '../../i18n/en'

// Create the IntlProvider to retrieve context for wrapping around.
export const intlProvider = new IntlProvider({ locale: 'en', messages }, {})
export const { intl } = intlProvider.getChildContext()

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
const nodeWithIntlProp = (node) => React.cloneElement(node, { intl })

export const shallowWithIntl = (node, { context } = {}) => shallow(
  nodeWithIntlProp(node),
  {
    context: Object.assign({}, context, { intl })
  }
)

export const mountWithIntl = (node, { context, childContextTypes } = {}) => mount(
  nodeWithIntlProp(node),
  {
    context: Object.assign({}, context, { intl }),
    childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes)
  }
)