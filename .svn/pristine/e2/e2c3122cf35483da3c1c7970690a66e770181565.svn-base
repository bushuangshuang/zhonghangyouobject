import Immutable from 'immutable'
import {
  getThisFlightListSuccess
} from './action'

const initialState = Immutable.fromJS({
  thisFlightList:[]
})

export default function flightReducer (state = initialState, action) {
  switch (action.type) {
    case getThisFlightListSuccess.type: {
      return state.update('thisFlightList', val => {
        return Immutable.List(action.payload.thisFlightList)
      })
    }
    default:
      return state
  }
}
