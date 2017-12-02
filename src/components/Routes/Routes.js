import React from 'react'

import { Route } from 'react-router-dom'

import { asyncComponent } from '../../hoc/asyncComponent'

import { RestrictedRoute } from '../../containers/RestrictedRoute'

const asyncCounter = asyncComponent(() => import('../../containers/Counter/Counter'))
const asyncPokemons = asyncComponent(() => import('../../containers/Pokemons/Pokemons'))
const asyncPageNotFound = asyncComponent(() => import('../PageNotFound/PageNotFound'))

const Routes = [
  <RestrictedRoute type="private" path="/counter" exact component={asyncCounter} />,
  <RestrictedRoute type="private" path="/pokemons" exact component={asyncPokemons} />,
  <Route component={asyncPageNotFound} />
]

export default Routes