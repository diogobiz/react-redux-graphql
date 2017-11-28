import React, { Component } from 'react'

import { connect } from 'react-redux'

import { withRouter, Switch } from 'react-router-dom'

import muiThemeable from 'material-ui/styles/muiThemeable'
import { ResponsiveDrawer } from 'material-ui-responsive-drawer'

import { DrawerHeader, DrawerContent } from '../../containers/Drawer'
import { Scrollbar } from '../../components/Scrollbar'
import { Routes } from '../../components/Routes'

export class Layout extends Component {
  render() {
    const { muiTheme, history } = this.props
    const path = history.location.pathname

    const styles = {
      backgroundColor: muiTheme.palette.canvasColor,
      height: '100%'
    }

    return (
      <div style={styles}>
        <ResponsiveDrawer width={260} responsiveDrawer>
          <Scrollbar>
            <DrawerHeader />
            <DrawerContent path={path} history={history} />
          </Scrollbar>
        </ResponsiveDrawer>

        <Switch>
          {Routes.map((Route, i) => React.cloneElement(Route, { key: `@routes/${i}` }))}
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { theme } = state

  return {
    theme
  }
}

export default connect(mapStateToProps)(muiThemeable()(withRouter(Layout)))