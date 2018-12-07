
import * as types from './actionType'
import {
  hideFlightFilterBox,
  onDragFlightStart,
  showFlightFilterBox,
  onDragFligtEnd,
  onTaskDispatcherSuccess,
  onDispatcherTaskCancel,
  onTaskDispatcherError,
  ondispatcherTaskTypeChange
} from './actions'
import {
  changeWebsocketError,
  changeWebsocketSuccess,
  websocketMoudel
} from '../../action/WebsocketActions'
import Immutable from 'immutable'


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  taskId:'',
  staffId:'',
  dispatcherTaskType:'0',
  taskCreStaffId:'',
  flightFilterDisplay:false,
  DragModal:false,
  WebSocketModel: false,
  webSocketModelShow: false
})

export default function DispatcherReducer (state = initialState, action) {
  switch (action.type) {
    case onDragFlightStart.type:
      return state.update('taskId', val => {
        return action.payload.taskId
      })
    case onDragFligtEnd.type:
      return state.update('staffId', val => {
        return action.payload.staffId
      }).update('DragModal', val => {
        return true
      })
    case onTaskDispatcherSuccess.type: {
      return initialState
    }
    case onDispatcherTaskCancel.type: {
      return initialState
    }
    case showFlightFilterBox.type: {
      return state.update('flightFilterDisplay', val => {
        return true
      })
    }
    case ondispatcherTaskTypeChange.type: {
      return state.update('dispatcherTaskType', val => {
        return action.payload.taskType
      })
    }
    case hideFlightFilterBox.type: {
      return state.update('flightFilterDisplay', val => {
        return false
      })
    }
    case changeWebsocketError.type: {
      return state.update('WebSocketModel', val => {
        return true
      }).update('webSocketModelShow', val => {
        return true
      })
    }
    case websocketMoudel.type: {
      return state.update('webSocketModelShow', val => {
        return false
      })
    }
    case changeWebsocketSuccess.type: {
      return state.update('WebSocketModel', val => {
        return false
      })
    }
    default:
      return state
  }
}
