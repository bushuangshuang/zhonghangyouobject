import { createActionCreator } from '../utils/createActionCreator'
import {
  HIDE_ADD_TASK_MODAL,
  SHOW_ADD_TASK_MODAL,
  ADD_FLIGHT,
  ADD_FLIGHT_SUCCESS,
  ADD_FLIGHT_ERROR
} from '../../constant/actionTypes'
import { message } from 'antd'

export const showAddTaskModal = createActionCreator(SHOW_ADD_TASK_MODAL, function () {
})
export const hideAddTaskModal = createActionCreator(HIDE_ADD_TASK_MODAL, function () {
})

// 新建航班
export const addTask = createActionCreator(ADD_FLIGHT, function (data) {
  console.log('传值==', data)
  return {
    addTaskObj: data
  }
})
export const addTaskSuccess = createActionCreator(ADD_FLIGHT_SUCCESS, function (data) {
  message.success('添加成功')
  return {
    addSuccess: data
  }
})
export const addTaskError = createActionCreator(ADD_FLIGHT_ERROR, function (e) {
  message.error('添加失败')
  return {
    error: e
  }
})
