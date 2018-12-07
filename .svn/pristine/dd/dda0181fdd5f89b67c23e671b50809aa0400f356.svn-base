import { map, ignoreElements, switchMap, catchError, take } from 'rxjs/operators'
import { from } from 'rxjs/observable/from'
import { notification } from 'antd'
import { EMPTY } from 'rxjs'
import { ActionsObservable, ofType } from 'redux-observable'
import {
  getThisFlightList,
  getThisFlightListSuccess,
  getThisFlightListError
} from '../../reducers/ThisFlightReducer/action'
import ThisFlightDao from '../../dao/ThisFlightDao'

// 获取本场航班列表
export const getThisFlightEpics = action$ =>
  action$.pipe(
    ofType(getThisFlightList.type),
    switchMap(() => {
      return from(ThisFlightDao.getThisFlight('admin')).pipe(map(({ data }) => {
        return getThisFlightListSuccess(data)
      }
      ), catchError((e) => {
        return ActionsObservable.of(getThisFlightListError(e))
      }))
    })
  )
export const getThisFlightListErrorEpics = action$ => {
  return action$.pipe(ofType(getThisFlightListError.type),
    switchMap((action) => {
      notification.error({
        message:'获取本场航班列表失败',
        description:action.payload.error.message
      })
    }), take(0))
}
