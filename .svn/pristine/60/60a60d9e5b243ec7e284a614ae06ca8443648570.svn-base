import Immutable from 'immutable'
import {
  getFlightTitleSuccess,
} from './action'

const initialState = Immutable.fromJS({
  flightTitle:[]
})

export default function flighttitlereducer (state = initialState, action) {
  switch (action.type) {
    case getFlightTitleSuccess.type: {
      // console.log("我是reducer",getStaffListSuccess.type,action.payload)
      return state.update('flightTitle', val => {
        return Immutable.List(action.payload.flightTitle)
      })
    }
    default:
      return state
  }
}
