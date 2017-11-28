import React from 'react'

import { Route } from 'react-router-dom'

import asyncComponent from '../../hoc/asyncComponent/asyncComponent'

import { RestrictedRoute } from '../../containers/RestrictedRoute'

// const asyncApp = asyncComponent(() => import('../../containers/App/App'))
// const asyncLogin = asyncComponent(() => import('../../containers/Auth/Login'))
// const asyncLogout = asyncComponent(() => import('../../containers/Auth/Logout'))
// const asyncCounter = asyncComponent(() => import('../../containers/Counter/Counter'))
const asyncPageNotFound = asyncComponent(() => import('../PageNotFound/PageNotFound'))

const Routes = [
  // <RestrictedRoute type="private" path="/" exact component={asyncApp} />,
  // <RestrictedRoute type="private" path="/counter" exact component={asyncCounter} />,
  // <RestrictedRoute type="private" path="/logout" exact component={asyncLogout} />,
  // <RestrictedRoute type="public" path="/login" exact key="appRoute@/signin" component={asyncLogin} />,
  <Route component={asyncPageNotFound} />
]

export default Routes