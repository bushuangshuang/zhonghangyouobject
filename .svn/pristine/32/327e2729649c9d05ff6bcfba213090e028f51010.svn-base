import {
  DRAG_TASK,
  OVER_TASK,
  ON_DISPATCHER_TASK_TYPE,
  DISPACTER_TASK_SUCCESS,
  DISPACTER_TASK_ERROR, DISPACTER_TASK,
  ON_DISPATCHER_TASK_CANCEL
} from '../../constant/actionTypes'
import { SHOW_FLIGHT_FILTER_BOX, HIDE_FLIGHT_FILTER_BOX } from './actionType'
import { createActionCreator } from '../utils/createActionCreator'
import TaskDao from '../../dao/TaskDao'
import { notification, message } from 'antd'
export const onDragFlightStart = createActionCreator(DRAG_TASK, function (taskId) {
  return {
    taskId
  }
})
/**
 *
 * @type {actionCreator}
 */
export const onDragFligtEnd = createActionCreator(OVER_TASK, function (staffId) {
  return {
    staffId
  }
})
export const onDispatcherTaskCancel = createActionCreator(ON_DISPATCHER_TASK_CANCEL)
export const ondispatcherTaskTypeChange = createActionCreator(ON_DISPATCHER_TASK_TYPE, function (taskType) {
  return {
    taskType
  }
})
export const onTaskDispatcher = function () {
  return (dispatch, getState) => {
    const taskID = getState().UIReducer.get('taskId') //任务ID
    const staffID = getState().UIReducer.get('staffId') //加油员ID
    const dispatcherTaskType = getState().UIReducer.get('dispatcherTaskType') //任务内容
    TaskDao.dispatchTask(taskID, staffID, 'admin', dispatcherTaskType).then(() => {
      message.info('任务下发成功')
      dispatch(onTaskDispatcherSuccess())
    }).catch((e) => {
      notification.error({
        title:'任务下发失败',
        description:'...'
      })
      dispatch(onTaskDispatcherError())
    })
  }
}
export const onTaskDispatcherSuccess = createActionCreator(DISPACTER_TASK_SUCCESS,function() {
})
export const onTaskDispatcherError = createActionCreator(DISPACTER_TASK_ERROR,function() {
})
export const showFlightFilterBox = createActionCreator(SHOW_FLIGHT_FILTER_BOX)
export const hideFlightFilterBox = createActionCreator(HIDE_FLIGHT_FILTER_BOX)
