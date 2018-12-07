import { createActionCreator } from '../utils/createActionCreator'
import {
  SHOW_TASK_LIST_DRAWER,
  HIDE_TASK_LIST_DRAWER,
} from '../../constant/actionTypes'
export const showTaskListDrawer = createActionCreator(SHOW_TASK_LIST_DRAWER, function (data) {
  console.log(data, 111)

  if (data === true) {
    data = false
  } else {
    data = true
  }
  return {
    data
  }
})
export const hideTaskListDrawer = createActionCreator(HIDE_TASK_LIST_DRAWER, function () {
})
