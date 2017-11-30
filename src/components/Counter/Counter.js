import React from 'react'

import { Toolbar } from '../../containers/Toolbar'

import { Auxiliary } from '../../hoc/Auxiliary'

const Counter = ({ counter, inc, dec }) => (
  <Auxiliary>
    <Toolbar title="Counter" />

    <h2>{counter}</h2>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
  </Auxiliary>
)

export default Counter
