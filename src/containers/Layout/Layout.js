import React, { Component } from 'react'

import { connect } from 'react-redux'

import { withRouter, Switch } from 'react-router-dom'

import muiThemeable from 'material-ui/styles/muiThemeable'
import Drawer from 'material-ui/Drawer'

import { DrawerHeader, DrawerContent } from '../../containers/Drawer'
import { Scrollbar } from '../../components/Scrollbar'
import { Routes } from '../../components/Routes'

import { Auxiliary } from '../../hoc/Auxiliary'

export class Layout extends Component {
  state = {
    drawerOpened: false
  }

  openDrawer() {
    this.setState({
      drawerOpened: true
    })
  }

  closeDrawer() {
    this.setState({
      drawerOpened: false
    })
  }

  render() {
    const { drawerOpened } = this.state
    const { history } = this.props
    const path = history.location.pathname

    return (
      <Auxiliary>
        <Drawer
          docked={false}
          width={260}
          open={drawerOpened}
          onRequestChange={this.closeDrawer.bind(this)}>
          <Scrollbar>
            <DrawerHeader />
            <DrawerContent path={path} history={history} close={this.closeDrawer.bind(this)} />
          </Scrollbar>
        </Drawer>

        <button onClick={this.openDrawer.bind(this)}>TOGGLE</button>

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