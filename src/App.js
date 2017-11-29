import React, { Component } from 'react'

import { Provider } from 'react-redux'

import { Root } from './containers/Root'

import configStore from './store'

import locales, { addLocalizationData } from './i18n'

addLocalizationData(locales)

const store = configStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App