/**
 *
 * GlobalReducer.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018/11/4
 *
 * @内容 作用
 * @内容 作用
 */

import {produce} from 'immer'
import {cancelWheelScrollOnView, wheelScrollOnView} from "../action/UIActions";
/**
 * scroll = enum{
 *    FlightLeft
 *    TaskLeft
 *    ImpNews
 *    TaskList
 *    Personnel
 * }
 * @type {{scroller: Array}}
 */
const INITIAL_STATE = {
  scroller:[]
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case  wheelScrollOnView.type: {
      return produce(state,draftState => {
        const set = new Set(draftState.scroller);
        set.add(action.payload.viewName);
        draftState.scroller=Array.from(set);
      })
    }
    case cancelWheelScrollOnView.type:{
      return produce(state,draftState => {
        const set = new Set(draftState.scroller);
        set.delete(action.payload.viewName);
        draftState.scroller=Array.from(set);
      })
    }
    default:
      return state;
  }
}
