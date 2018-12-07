import {createActionCreator} from "../utils/createActionCreator";
import {
  ON_DISPATCHED_TASK_STATUS_CHANGE,
  ON_VIEW_WHEEL_SCROLL,
  ON_VIEW_WHEEL_SCROLL_CANCEL
} from "../constant/actionTypes";

/**
 *
 * UIActions.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018/11/4
 *
 * @内容 作用
 * @内容 作用
 */
export const wheelScrollOnView=createActionCreator(ON_VIEW_WHEEL_SCROLL,
  function(viewName){
    return {
      viewName
    };
  });
export const cancelWheelScrollOnView=createActionCreator(ON_VIEW_WHEEL_SCROLL_CANCEL,
  function (viewName) {
    return {
      viewName
    }
  }
)
