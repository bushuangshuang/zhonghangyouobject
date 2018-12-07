import { map, ignoreElements, switchMap, catchError, take } from 'rxjs/operators'
import { from } from 'rxjs/observable/from'
import { notification } from 'antd'
import { EMPTY } from 'rxjs'
import { ActionsObservable, ofType } from 'redux-observable'
import FlightDao from '../../dao/FlightDao'
import {
  editFlightDetail, editFlightDetailError, editFlightDetailSuccess, editTask, editTaskError,
  editTaskSuccess
} from '../../reducers/EditTaskModalReducer/action'

export const editTaskModalEpics = action$ =>
  action$.pipe(
    ofType(editFlightDetail.type),
    map((action) => {
      return {
        flgtId: action.payload.flgtId
      }
    }),
    switchMap((flgtId) => {
      console.log('1', flgtId)
      return from(FlightDao.flightDetail(flgtId)).pipe(map(({ data }) => {
        return editFlightDetailSuccess(data)
      }
      ), catchError((e) => {
        return ActionsObservable.of(editFlightDetailError(e))
      }))
    }),
    ofType(editTask.type),
    map((action) => {
      return {
        editTaskObj: action.payload.editTaskObj
      }
    }),
    switchMap((editTaskObj) => {
      return from(FlightDao.updateFlight(editTaskObj)).pipe(map(({ data }) => {
        return editTaskSuccess(data)
      }
      ), catchError((e) => {
        return ActionsObservable.of(editTaskError(e))
      }))
    })
  )
