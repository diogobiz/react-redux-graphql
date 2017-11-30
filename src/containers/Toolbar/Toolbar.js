import React, { Component } from 'react'

import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'

import appActions from '../../store/app/actions'

class Toolbar extends Component {
  render() {
    const { title, toggleDrawer } = this.props

    return (
      <AppBar
        title={title}
        onLeftIconButtonTouchTap={toggleDrawer} />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(appActions.toggleDrawer())
})

export default connect(null, mapDispatchToProps)(Toolbar)
