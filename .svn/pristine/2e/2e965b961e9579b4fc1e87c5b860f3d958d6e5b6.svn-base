import { combineReducers } from 'redux'
import GlobalReducer from './GlobalReducer'
// import locationReducer from './location'
import flightReducer from './flightReducer/flightreducer'
import thisFlightReducer from './ThisFlightReducer/thisFlightReducer'
import staffReducer from './StaffReducer/staffReducer'
import taskListReducer from './TaskReducer/taskReducer'
import flightTitleReducer from './FlightTitleReducer/flightTitleReducer'
import UIReducer from './UIReducer'
import addTaskModalReducer from './AddTaskModalReducer/addTaskModalReducer'
import addOilModalReducer from './AddOilModalReducer/AddOilModalReducer'
import editTaskModalReducer from './EditTaskModalReducer/editTaskModalReducer'
import flightDetailReducer from './FlightDetailReducer/flightDetailReducer'
import TaskListDrawerReducer from './TaskListDrawerReducer/TaskListDrawerReducer'
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
    flightReducer,
    staffReducer,
    taskListReducer,
    UIReducer,
    flightTitleReducer,
    GlobalReducer,
    thisFlightReducer,
    addTaskModalReducer,
    addOilModalReducer,
    editTaskModalReducer,
    flightDetailReducer,
    TaskListDrawerReducer
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
