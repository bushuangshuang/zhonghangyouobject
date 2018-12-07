import { map, ignoreElements, switchMap, catchError, take } from 'rxjs/operators'
import { from } from 'rxjs/observable/from'
import { notification } from 'antd'
import { EMPTY } from 'rxjs'
import { ActionsObservable, ofType } from 'redux-observable'
import {
  login,
  loginError,
  loginSuccess
} from '../../reducers/LoginReducer/action'
import LoginDao from '../../dao/LoginDao'

// 登录
export const LoginEpics = action$ =>
  action$.pipe(
    ofType(login.type),
    map((action)=>{
      console.log('12334',action.payload.login)
      return {
        login:action.payload.login
      }
    }),
    switchMap((login) => {
      return from(LoginDao.login(login)).pipe(map(({ data }) => {
          return loginSuccess(data)
        }
      ), catchError((e) => {
        return ActionsObservable.of(loginError(e))
      }))
    })
  )
// 失败
export const LoginErrorEpics = action$ => {
  return action$.pipe(ofType(loginError.type),
    switchMap((action) => {
      notification.error({
        message:'登录失败',
        description:action.payload.error.message
      })
    }), take(0))
}
