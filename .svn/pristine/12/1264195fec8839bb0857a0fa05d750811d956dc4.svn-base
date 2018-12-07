import Immutable from 'immutable'
import {
  showTaskListDrawer,
  hideTaskListDrawer
} from './action'
const initialState = Immutable.fromJS({
  showTaskListDrawer:false

})
export default function TaskListDrawerReducer (state = initialState, action) {
  switch (action.type) {
    case showTaskListDrawer.type: {
      console.log(action)
      // return state.update('showTaskListDrawer', val => {
      //   return true
      // })
      return state.update('showTaskListDrawer', val => action.payload.data)
    }

    // case hideTaskListDrawer.type:
    //   return state.update('hideTaskListDrawer', val => {
    //     return false
    //   })
    default:
      return state
  }
}
