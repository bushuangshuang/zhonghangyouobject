import { map, ignoreElements, switchMap, catchError, take } from 'rxjs/operators'
import { from } from 'rxjs/observable/from'
import { notification } from 'antd'
import { EMPTY } from 'rxjs'
import { ActionsObservable, ofType } from 'redux-observable'
import { flightDetail, flightDetailError, flightDetailSuccess } from '../../reducers/FlightDetailReducer/action'
import FlightDao from '../../dao/FlightDao'

export const flightDetailEpics = action$ =>
  action$.pipe(
    ofType(flightDetail.type),
    map((action) => {
      return {
        flgtId: action.payload.flgtId
      }
    }),
    switchMap(({ flgtId }) => {
      return from(FlightDao.flightDetail(flgtId)).pipe(map(({ data }) => {
        return flightDetailSuccess(data)
      }
      ), catchError((e) => {
        return ActionsObservable.of(flightDetailError(e))
      }))
    })
  )
