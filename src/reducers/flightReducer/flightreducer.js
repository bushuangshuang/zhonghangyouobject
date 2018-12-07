import Immutable from 'immutable'
import { addFlightSuccess, getFlightId, getflightlistSuccess, setFlightRightHide, setFlightRightShow } from './action'
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  flightList:[],
  flightRightShowObj: {
    rightDisplay: 'none',
    rightTop: '0',
    rightLeft: '0',
    selectId: ''
  }
})

export default function flightreducer (state = initialState, action) {
  switch (action.type) {
    case getflightlistSuccess.type: {
      return state.update('flightList', val => {
        return Immutable.List(action.payload.flightList)
      })
    }
    case setFlightRightShow.type:
      return state.update('flightRightShowObj', val => {
        return Immutable.Map(action.payload.rightShow)
      })
    case setFlightRightHide.type:
      return state.update('flightRightShowObj', val => {
        return initialState.get('flightRightShowObj')
      })
    case addFlightSuccess.type: {
      return state
    }
    default:
      return state
  }
}
