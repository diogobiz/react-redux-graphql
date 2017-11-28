import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import getThemeSource from '../../theme'

class Root extends Component {
  render() {
    const { muiTheme } = this.props

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>Test</div>
      </MuiThemeProvider>
    )
  }
}

Root.propTypes = {
  muiTheme: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  const { theme } = state

  const source = getThemeSource(theme)
  const muiTheme = getMuiTheme(source)

  return {
    muiTheme
  }
}

export default connect(mapStateToProps)(Root)