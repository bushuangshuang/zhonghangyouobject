import Immutable from 'immutable'
import { getTaskListSuccess, setRightHide, setRightShow, delTast, delTastSucces, delTastError } from './action'
import {
  add_flight_took_off_on_the_field,
  cancel_dispatched_task,
  change_dispatched_task_status, change_flight_took_off_on_the_field,
  on_task_dispatched
} from '../../action/WebsocketActions'

const initialState = Immutable.fromJS({
  taskList:[],
  rightShowObj: {
    rightDisplay: 'none',
    rightTop: '0',
    rightLeft: '0',
    selectTaskId: ''
  },
  delTaskIdObj: {
    delTaskId: ''
  }
})

export default function taskListreducer (state = initialState, action) {
  switch (action.type) {
    case getTaskListSuccess.type: {
      // console.log("我是reducer-taskList",getTaskListSuccess.type,action.payload)
      return state.update('taskList', val => {
        return Immutable.List(action.payload.taskList)
      })
    }
    case setRightShow.type: {
      return state.update('rightShowObj', val => {
        return Immutable.Map(action.payload.rightShow)
      })
    }
    case setRightHide.type: {
      return state.update('rightShowObj', val => {
        return initialState.get('rightShowObj')
      })
    }
    case delTast.type: {
      return state.update('delTaskIdObj', val => {
        return Immutable.Map(action.payload.delTaskIdObj)
      })
    }
    /*case delTastSucces.type: {
      message.success('任务已经取消')
      return ""
    }
    case delTastError.type: {
      message.error('取消任务失败')
      return action.payload.error
    }*/
    // websocket redux
    case change_dispatched_task_status.type: {

    }
    case cancel_dispatched_task.type: {

    }
    case on_task_dispatched.type: {

    }
    case add_flight_took_off_on_the_field.type: {

    }
    case change_flight_took_off_on_the_field.type: {

    }
    default:
      return state
  }
}
