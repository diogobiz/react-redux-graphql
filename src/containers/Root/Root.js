import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>OK</div>
      </MuiThemeProvider>
    )
  }
}

export default Root