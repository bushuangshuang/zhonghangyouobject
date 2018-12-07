import * as types from './actionTypes';
// import {GET_FLIGHT_LIST_SUCCESS}from '../../constant/actionTypes'

// ------------------------------------
// Reducer
// ------------------------------------
// const initialState = {
//
// }
// function HandFilght(state,payload){
//      console.log(state,payload)
// }
export default function counterReducer (state = initialState, action) {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return state + action.payload
    case types.COUNTER_DOUBLE_ASYNC:
      return state + 2
    //航班信息
    // case GET_FLIGHT_LIST_SUCCESS:{
    //   return HandFilght(state,action.payload)
    // }
    default:
      return state
  }
}
