import React, { Component } from 'react'

import { Provider } from 'react-redux'

import { ApolloProvider } from 'react-apollo'

import { Root } from './containers/Root'

import configApolloClient from './graphql/client'

import configStore from './store'

import locales, { addLocalizationData } from './i18n'

addLocalizationData(locales)

const store = configStore()

const apolloClient = configApolloClient()

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <Root />
        </Provider>
      </ApolloProvider>
    )
  }
}

export default App