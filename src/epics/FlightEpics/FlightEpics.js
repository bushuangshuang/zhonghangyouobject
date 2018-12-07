/**
 *
 * LogEpics.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018-11-14
 *
 * @内容 作用
 * @内容 作用
 */
import {map,ignoreElements,switchMap,catchError,take} from 'rxjs/operators'
import {from} from 'rxjs/observable/from'
import{notification} from 'antd'
import {EMPTY} from 'rxjs'
import {ActionsObservable,ofType} from "redux-observable";
import {
  getflightlist,
  getflightlistError,
  getflightlistSuccess,
  addFlightError,
  addFlight, addFlightSuccess
} from "../../reducers/flightReducer/action";
import FlightDao from '../../dao/FlightDao';
export const getFlightEpics = action$ =>
  action$.pipe(
    ofType(getflightlist.type),
    switchMap(()=>{
      return from(FlightDao.getFlight('admin')).pipe(map(({data})=>{
          return getflightlistSuccess(data)
        }
      ),catchError((e)=>{
        return ActionsObservable.of(getflightlistError(e))
      }))
    })
  )
export const getFlightListErrorEpics=action$=>{
  return action$.pipe(ofType(getflightlistError.type),
    switchMap((action)=>{
      notification.error({
        message:'获取航班列表失败',
        description:action.payload.error.message
      })

    }),take(0))
}
const flightobj={
  "flgtAirportCode" : "KMG",
  "flgtFfid" : "26ebefdf624d4de89e7efc720cc74cc6",
  "flgtAdid" : "A",
  "flgtFlno" : "GS6571",
  "flgtFlop" : "2018-11-12 00:00:00",
  "flgtRegn" : "B1659",
  "flgtOrg3c" : "HAK",
  "flgtDes3c" : "KMG",
  "flgtAStot" : "2018-11-12 21:50:00",
  "flgtAEtot" : "2018-11-12 22:56:42",
  "flgtAAtot" : "2018-11-12 22:56:00",
  "flgtAcname" : "A320",
  "flgtAl2c" : "GC",
  "flgtMissionProp" : "W/Z",
  "flgtNature" : "PAX",
  "flgtSubNature" : "J",
  "flgtProxy" : "YAG",
  "flgtFlti" : "D",
  "flgtFtyp" : "S",
  "flgtLinkFlno" : "GS6572",
  "flgtChocksIn" : "2018-11-12 23:06:00",
  "flgtVialc" : "HAK-KMG",
  "flgtPlacecode" : "162"
}


export const addFlightEpics = action$ =>
  action$.pipe(
    ofType(addFlight.type),
    switchMap(()=>{
      return from(FlightDao.addFlight(flightobj)).pipe(map(({data})=>{
          return addFlightSuccess(data)
        }
      ),catchError((e)=>{
        return ActionsObservable.of(addFlight(e))
      }))
    })
  )
export const addFlightErrorEpics=action$=>{
  return action$.pipe(ofType(addFlightError.type),
    switchMap((action)=>{
      notification.error({
        message:'添加航班失败',
        description:action.payload.error.message
      })
    }),take(0))

}
