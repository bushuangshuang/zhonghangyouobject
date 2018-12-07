import { createActionCreator } from '../utils/createActionCreator'
import dao from '../../dao/TaskDao'
import { message } from 'antd'
import {
  GET_TASK_LIST,
  GET_TASK_LIST_SUCCESS,
  GET_TASK_LIST_ERROR,
  RIGHT_HIDE,
  RIGHT_SHOW,
  CANCEL_TASK,
  CANCEL_TASK_SUCCESS,
  CANCEL_TASK_ERROR
} from '../../constant/actionTypes'

/* export const getTaskList = createActionCreator(GET_TASK_LIST,() => {
  return (dispatch) => {
    dao.getTaskList()
      .then(resolve => dispatch(getTaskListSuccess(resolve.data)))
      .catch(e => dispatch(getTaskListError(e)))
  }
}) */
/**
 * 获取任务列表
 * @type {actionCreator}
 */
export const getTaskList = createActionCreator(GET_TASK_LIST)

export const getTaskListSuccess = createActionCreator(GET_TASK_LIST_SUCCESS, function (data) {
  return {
    taskList: data.data
  }
})

export const getTaskListError = createActionCreator(GET_TASK_LIST_ERROR, function (e) {
  return {
    error: e
  }
})

/**
 * 右键时
 */
export const setRightShow = createActionCreator(RIGHT_SHOW,function(data){
  return {
    rightShow: data
  }
})

export const setRightHide = createActionCreator(RIGHT_HIDE,function() {
})

/**
 * 任务取消
 */
export const delTast = createActionCreator(CANCEL_TASK,function(data){
  return {
    delTaskIdObj: data
  }
})

export const delTastSucces = createActionCreator(CANCEL_TASK_SUCCESS,function(data) {
  message.success('任务已经取消')
  return {
    delTaskSucces: data.data
  }
})

export const delTastError = createActionCreator(CANCEL_TASK_ERROR,function(e) {
  message.error('取消任务失败')
  return {
    error: e
  }
})

