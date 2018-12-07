import { createActionCreator } from '../utils/createActionCreator'
import {
  FLIGHT_DETAIL,
  FLIGHT_DETAIL_ERROR,
  FLIGHT_DETAIL_SUCCESS
} from '../../constant/actionTypes'

// 航班详情
export const flightDetail = createActionCreator(FLIGHT_DETAIL, function (data) {
  return {
    flgtId: data
  }
})
export const flightDetailSuccess = createActionCreator(FLIGHT_DETAIL_SUCCESS, function (data) {
  return {
    flightDetail: data.data
  }
})
export const flightDetailError = createActionCreator(FLIGHT_DETAIL_ERROR, function (e) {
  return {
    error:e
  }
})
