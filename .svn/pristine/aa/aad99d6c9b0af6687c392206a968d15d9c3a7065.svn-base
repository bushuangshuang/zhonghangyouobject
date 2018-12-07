import * as types from './actionTypes';

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {

}
export default function DispatcherReducer (state = initialState, action) {
  switch (action.type) {
    case types.DISPATCHER_INCREMENT:
      return state + action.payload
    case types.DISPATCHER_DOUBLE_ASYNC:
      return state + 2
    default:
      return state
  }
}
