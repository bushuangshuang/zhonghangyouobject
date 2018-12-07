import { map, ignoreElements, switchMap, catchError, take } from 'rxjs/operators'
import { from } from 'rxjs/observable/from'
import { notification } from 'antd'
import { EMPTY } from 'rxjs'
import { ActionsObservable, ofType } from 'redux-observable'
import AddTaskDao from '../../dao/AddTaskDao'
// import { showTaskListDrawer, hideTaskListDrawer } from '../../reducers/TaskListDrawerReducer/action'

export const addTaskModalEpics = action$ =>
  action$.pipe(
    ofType(showTaskListDrawer.type),
    map((action) => {
      return {
        addTaskObj: action.payload.addTaskObj
      }
    }),
    switchMap((addTaskObj) => {
      return from(AddTaskDao.addTaskApi(addTaskObj)).pipe(map(({ data }) => {
          return addTaskSuccess(data)
        }
      ), catchError((e) => {
        return ActionsObservable.of(addTaskError(e))
      }))
    })
  )
