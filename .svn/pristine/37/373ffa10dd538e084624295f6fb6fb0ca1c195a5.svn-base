import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
export const CounterComponent = ({ counter, increment, doubleAsync }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {counter}</h2>
    <Button type={'primary'} onClick={increment}>
      Increment
    </Button>
    {' '}
    <Button type={'primary'} onClick={doubleAsync}>
      Double (Async)
    </Button>
  </div>
)

CounterComponent.PropTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default CounterComponent
