import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { IntlProvider } from 'react-intl'

import { Router, Route, Switch } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { getLocaleMessages } from '../../i18n'
import getThemeSource from '../../theme'

import { Layout } from '../Layout'

const history = createHistory()

class Root extends Component {
  render() {
    const { muiTheme, locale, messages } = this.props

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <IntlProvider locale={locale} messages={messages}>
          <Router history={history}>
            <Switch>
              <Route children={(props) => <Layout {...props} />} />
            </Switch>
          </Router>
        </IntlProvider>
      </MuiThemeProvider>
    )
  }
}

Root.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  muiTheme: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  const { theme, locale } = state

  const messages = getLocaleMessages(locale)

  const source = getThemeSource(theme)
  const muiTheme = getMuiTheme(source)

  return {
    locale,
    messages,
    muiTheme
  }
}

export default connect(mapStateToProps)(Root)