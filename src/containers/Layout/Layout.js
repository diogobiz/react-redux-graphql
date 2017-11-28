import React, { Component } from 'react'

import { connect } from 'react-redux'

import { withRouter, Switch } from 'react-router-dom'

import muiThemeable from 'material-ui/styles/muiThemeable'
import { ResponsiveDrawer } from 'material-ui-responsive-drawer'

import { DrawerHeader, DrawerContent } from '../../containers/Drawer'
import { Scrollbar } from '../../components/Scrollbar'
import { Routes } from '../../components/Routes'

import { Auxiliary } from '../../hoc/Auxiliary'

export class Layout extends Component {
  render() {
    const { muiTheme, history } = this.props
    const path = history.location.pathname

    return (
      <Auxiliary>
        <ResponsiveDrawer width={260} responsiveDrawer>
          <Scrollbar>
            <DrawerHeader />
            <DrawerContent path={path} history={history} />
          </Scrollbar>
        </ResponsiveDrawer>

        <Switch>
          {Routes.map((Route, i) => React.cloneElement(Route, { key: `@routes/${i}` }))}
        </Switch>
      </Auxiliary>
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