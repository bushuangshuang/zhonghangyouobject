import { createActionCreator } from '../utils/createActionCreator'
import {
  FLIGHT_RIGHT_HIDE,
  FLIGHT_RIGHT_SHOW,
  GET_FLIGHT_LIST,
  GET_FLIGHT_LIST_ERROR,
  GET_FLIGHT_LIST_SUCCESS,
  ADD_FLIGHT,
  ADD_FLIGHT_ERROR,
  ADD_FLIGHT_SUCCESS
} from '../../constant/actionTypes'
// 获取航班列表
export const getflightlist = createActionCreator(GET_FLIGHT_LIST)
export const getflightlistSuccess = createActionCreator(GET_FLIGHT_LIST_SUCCESS, function (data) {
  return {
    flightList:data.data
  }
})
export const getflightlistError = createActionCreator(GET_FLIGHT_LIST_ERROR, function (e) {
  return {
    error:e
  }
})
// 新建航班
export const addFlight = createActionCreator(ADD_FLIGHT)
export const addFlightSuccess = createActionCreator(ADD_FLIGHT_SUCCESS, function (data) {
  return {
    flightList:data.data
  }
})
export const addFlightError = createActionCreator(ADD_FLIGHT_ERROR, function (e) {
  return {
    error:e
  }
})
// 右击时 弹框显示
export const setFlightRightShow = createActionCreator(FLIGHT_RIGHT_SHOW, function (data) {
  return {
    rightShow: data
  }
})

export const setFlightRightHide = createActionCreator(FLIGHT_RIGHT_HIDE, function () {
})
