/**
 *
 * UIEpics.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018/11/4
 *
 * @内容 作用
 * @内容 作用
 */

import {ActionsObservable,ofType} from "redux-observable";
import {debounceTime,switchMap} from 'rxjs/operators'
import {wheelScrollOnView,cancelWheelScrollOnView} from '../../../action/UIActions'
export const WheelScrollOnViewEpic=(action$, store)=>{
  return action$.pipe(ofType(wheelScrollOnView.type),
    debounceTime(2000),
    switchMap((action)=>{
      return ActionsObservable.of(cancelWheelScrollOnView(action.payload.viewName))
    })
  )
}
