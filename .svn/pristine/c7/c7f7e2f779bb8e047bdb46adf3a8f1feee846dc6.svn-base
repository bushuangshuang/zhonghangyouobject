import {map,ignoreElements,switchMap,catchError,take} from 'rxjs/operators'
import {from} from 'rxjs/observable/from'
import{notification} from 'antd'
import {EMPTY} from 'rxjs'
import {ActionsObservable,ofType} from "redux-observable";
import {
  getFlightTitle,
  getFlightTitleSuccess,
  getFlightTitleError
} from "../../reducers/FlightTitleReducer/action";
import FlightTitleDao from '../../dao/FlightTitleDao';


export const getFlightTitleEpics = action$ =>
  action$.pipe(
    ofType(getFlightTitle.type),
    map((action)=>{
      return {
        flightTitleObj: action.payload
      }
    }),
    switchMap(({flightTitleObj})=>{
      return from(FlightTitleDao.getFlightTitle(flightTitleObj.settAirportCode,flightTitleObj.settStaffId)).pipe(map(({data})=>{
          return getFlightTitleSuccess(data)
        }
      ),catchError((e)=>{
        return ActionsObservable.of(getFlightTitleError(e))
      }))
    })
  )
