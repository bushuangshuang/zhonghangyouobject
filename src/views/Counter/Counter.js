import { connect } from 'react-redux'
import { increment, doubleAsync } from '../../reducers/Counter/actions'
import React from 'react'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import CounterComponent from './components/CounterComponent'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */
import {CounterHoc} from '../../hoc/CounterHoc'
const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter : state.counter
})

@connect(mapStateToProps,mapDispatchToProps)
class Counter extends React.Component {
  componentDidMount () {
  }

  render () {
    return (
      <CounterComponent
        counter={this.props.counter}
        increment={this.props.increment}
        doubleAsync={this.props.doubleAsync}
      />
    )
  }
}

export default (Counter)
