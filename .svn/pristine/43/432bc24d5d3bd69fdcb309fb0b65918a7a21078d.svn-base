import {map,ignoreElements,switchMap,catchError,take} from 'rxjs/operators'
import {from} from 'rxjs/observable/from'
import{notification} from 'antd'
import {EMPTY} from 'rxjs'
import {ActionsObservable,ofType} from "redux-observable";
import {
  getTaskList,
  getTaskListSuccess,
  getTaskListError,
  delTast,
  delTastSucces,
  delTastError
} from "../../reducers/TaskReducer/action";
import TaskDao from '../../dao/TaskDao';


export const getTaskListEpics = action$ =>
  action$.pipe(
    ofType(getTaskList.type),
    switchMap(()=>{
      return from(TaskDao.getTaskList()).pipe(map(({data})=>{
          return getTaskListSuccess(data)
        }
      ),catchError((e)=>{
        return ActionsObservable.of(getTaskListError(e))
      }))
    })
  )

/**
 * 取消任务
 * @param action$
 * @returns {*}
 */
export const delTaskEpics = action$ =>
  action$.pipe(
    ofType(delTast.type),
    map((action) => {
      console.log("exp:",action.payload.delTaskIdObj)
      return {
        delTaskObj:action.payload.delTaskIdObj
      }
    }),
    switchMap((delTaskObj)=>{
      return from(TaskDao.cancelTask(delTaskObj.delTaskObj.delTaskId)).pipe(map(({data})=>{
          return delTastSucces(data)
        }
      ),catchError((e)=>{
        return ActionsObservable.of(delTastError(e))
      }))
    })
  )

export const delTaskEpicsSucess = action$ =>
  action$.pipe(
    ofType(delTastSucces.type),
    switchMap((action)=>{
      notification.success({
        message:'任务已经取消',
        description:action.payload.error.message
      })

    }),take(0)
  )

export const delTaskEpicsError = action$ =>
  action$.pipe(
    ofType(delTastError.type),
    switchMap((action)=>{
      notification.error({
        message:'取消任务失败',
        description:action.payload.error.message
      })

    }),take(0)
)
