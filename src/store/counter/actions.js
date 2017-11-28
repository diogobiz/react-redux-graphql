import * as actionTypes from './types'

const increment = () => ({
  type: actionTypes.INCREMENT
})

const decrement = () => ({
  type: actionTypes.DECREMENT
})

export default {
  increment,
  decrement
}