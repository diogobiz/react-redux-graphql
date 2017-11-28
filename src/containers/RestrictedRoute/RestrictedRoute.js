import React from 'react'

import { Route, Redirect } from 'react-router'

import { connect } from 'react-redux'

export const RestrictedRoute = ({ type, isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => ((isAuthenticated && type === 'private') || type === 'public' ?
    <Component {...props} /> :
    <Redirect to="/login" />
  )} />
)

const mapStateToProps = (state) => ({
  // TODO: implements authentication
  isAuthenticated: true
})

export default connect(mapStateToProps)(RestrictedRoute)