import { createActionCreator } from '../utils/createActionCreator'
import {
  GET_THIS_FLIGHT_LIST,
  GET_THIS_FLIGHT_LIST_SUCCESS,
  GET_THIS_FLIGHT_LIST_ERROR
} from '../../constant/actionTypes'

// 获取本场航班列表
export const getThisFlightList = createActionCreator(GET_THIS_FLIGHT_LIST)
export const getThisFlightListSuccess = createActionCreator(GET_THIS_FLIGHT_LIST_SUCCESS, function (data) {
  return {
    thisFlightList:data.data
  }
})
export const getThisFlightListError = createActionCreator(GET_THIS_FLIGHT_LIST_ERROR, function (e) {
  return {
    error:e
  }
})
