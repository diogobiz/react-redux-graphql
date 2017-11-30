import React, { Component } from 'react'

import { connect } from 'react-redux'

import { withRouter, Switch } from 'react-router-dom'

import muiThemeable from 'material-ui/styles/muiThemeable'
import Drawer from 'material-ui/Drawer'

import { DrawerHeader, DrawerContent } from '../../containers/Drawer'
import { Scrollbar } from '../../components/Scrollbar'
import { Routes } from '../../components/Routes'

import { Auxiliary } from '../../hoc/Auxiliary'

import appActions from '../../store/app/actions'

export class Layout extends Component {
  render() {
    const { history, drawerOpen, toggleDrawer } = this.props
    const path = history.location.pathname

    return (
      <Auxiliary>
        <Drawer
          docked={false}
          width={260}
          open={drawerOpen}
          onRequestChange={toggleDrawer}>
          <Scrollbar>
            <DrawerHeader />
            <DrawerContent path={path} history={history} close={toggleDrawer} />
          </Scrollbar>
        </Drawer>

        <Switch>
          {Routes.map((Route, i) => React.cloneElement(Route, { key: `@routes/${i}` }))}
        </Switch>
      </Auxiliary>
    )
  }
}

const mapStateToProps = (state) => {
  const { theme, app: { drawerOpen } } = state

  return {
    theme,
    drawerOpen
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(appActions.toggleDrawer())
})

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(withRouter(Layout)))