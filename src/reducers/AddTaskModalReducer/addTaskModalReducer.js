import Immutable from 'immutable'
import { addTask, addTaskSuccess, hideAddTaskModal, showAddTaskModal } from './action'

const initialState = Immutable.fromJS({
  addTaskModal: false,
  addSuccess: '',
  addTaskObj: {}
})

export default function addTaskModalReducer (state = initialState, action) {
  switch (action.type) {
    case showAddTaskModal.type:
      return state.update('addTaskModal', val => {
        return true
      })
    case hideAddTaskModal.type:
      return state.update('addTaskModal', val => {
        return false
      })
    case addTask.type:
      return state.update('addTaskObj', val => {
        return Immutable.Map(action.payload.addTaskObj)
      })
    case addTaskSuccess.type:
      return state.update('addSuccess', val => {
        return action.payload.addSuccess
      })
    default:
      return state
  }
}
