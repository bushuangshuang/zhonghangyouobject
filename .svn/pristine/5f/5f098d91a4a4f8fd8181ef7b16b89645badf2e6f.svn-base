import { map, ignoreElements, switchMap, catchError, take } from 'rxjs/operators'
import { from } from 'rxjs/observable/from'
import { notification } from 'antd'
import { EMPTY } from 'rxjs'
import { ActionsObservable, ofType } from 'redux-observable'
import AddTaskDao from '../../dao/AddTaskDao'
import { addTask, addTaskError, addTaskSuccess } from '../../reducers/AddTaskModalReducer/action'

export const addTaskModalEpics = action$ =>
  action$.pipe(
    ofType(addTask.type),
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
