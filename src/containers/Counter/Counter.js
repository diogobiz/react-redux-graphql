import { connect } from 'react-redux'

import counterActions from '../../store/counter/actions'

import { Counter } from '../../components/Counter'

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch(counterActions.increment()),
  dec: () => dispatch(counterActions.decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
