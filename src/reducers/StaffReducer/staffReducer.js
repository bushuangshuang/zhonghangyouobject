import Immutable from 'immutable'
import {
  getStaffListSuccess,
  getStaffList } from './action'

import { personnel_car_binding, personnel_exit, personnel_login } from '../../action/WebsocketActions'

const initialState = Immutable.fromJS({
  staffList:[]
})

export default function staffreducer (state = initialState, action) {
  switch (action.type) {
    case getStaffListSuccess.type: {
      // console.log("我是reducer",getStaffListSuccess.type,action.payload)
      return state.update('staffList', val => {
        return Immutable.List(action.payload.staffList)
      })
    }
    case personnel_login.type: {
      // const targetIndex = state.findIndex((item) => {
      //   return item.staffId == action.payload.data.staffId;
      // });
      // if (targetIndex > -1) {
      //  return state.updateIn(['staffList',targetIndex],val=>{
      //     return action.payload.data
      // })}
      return state
    }
    case personnel_exit.type: {
      return state
    }

    case personnel_car_binding.type: {
      return state
    }
    default:
      return state
  }
}
