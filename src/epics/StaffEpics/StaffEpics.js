import {map,ignoreElements,switchMap,catchError,take} from 'rxjs/operators'
import {from} from 'rxjs/observable/from'
import{notification} from 'antd'
import {EMPTY} from 'rxjs'
import {ActionsObservable,ofType} from "redux-observable";
import {
  getStaffList,
  getStaffListSuccess,
  getStaffListError
} from "../../reducers/StaffReducer/action";
import StaffDao from '../../dao/StaffDao';


export const getStaffEpics = action$ =>
  action$.pipe(
    ofType(getStaffList.type),
    switchMap(()=>{
      return from(StaffDao.getStaff('admin')).pipe(map(({data})=>{
          return getStaffListSuccess(data)
        }
      ),catchError((e)=>{
        return ActionsObservable.of(getStaffListError(e))
      }))
    })
  )
