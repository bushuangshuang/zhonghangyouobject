import { createActionCreator } from '../utils/createActionCreator'
import { message } from 'antd'
import {
  UPDATE_FLIGHT,
  UPDATE_FLIGHT_DETAIL,
  UPDATE_FLIGHT_DETAIL_ERROR,
  UPDATE_FLIGHT_DETAIL_SUCCESS,
  UPDATE_FLIGHT_ERROR,
  UPDATE_FLIGHT_SUCCESS,
} from '../../constant/actionTypes'

// 修改航班详情
export const editFlightDetail = createActionCreator(UPDATE_FLIGHT_DETAIL, function (data) {
  return {
    flgtId: data
  }
})
export const editFlightDetailSuccess = createActionCreator(UPDATE_FLIGHT_DETAIL_SUCCESS, function (data) {
  return {
    editFlightDetail: data.data
  }
})
export const editFlightDetailError = createActionCreator(UPDATE_FLIGHT_DETAIL_ERROR, function (e) {
  // message.error('获取失败')
  return {
    error:e
  }
})

// 修改航班
export const editTask = createActionCreator(UPDATE_FLIGHT, function (data) {
  console.log('传值==', data)
  return {
    editTaskObj: data
  }
})
export const editTaskSuccess = createActionCreator(UPDATE_FLIGHT_SUCCESS, function (data) {
  message.success('修改成功')
  return {
    editSuccess: data
  }
})
export const editTaskError = createActionCreator(UPDATE_FLIGHT_ERROR, function (e) {
  message.error('修改失败')
  return {
    error: e
  }
})
