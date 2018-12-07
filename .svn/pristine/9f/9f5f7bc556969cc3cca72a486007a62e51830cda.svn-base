/**
 *
 * WebsocketActions.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018-11-22
 *
 * @内容 作用
 * @内容 作用
 */
import {createActionCreator} from "../utils/createActionCreator";
import {
  ON_DISPATCHED_TASK_CANCEL,
  ON_DISPATCHED_TASK_STATUS_CHANGE,
  ON_FLIGHT_TOOK_OFF_ON_THE_FIELD_ADDED,
  ON_FLIGHT_TOOK_OFF_ON_THE_FIELD_CHANGE,
  ON_PERSONNEL_LOGIN,
  ON_PERSONNEL_EXIT,
  ON_PERSONNEL_CAR_BINDING,
  ON_TASK_DISPATCHED,
  ON_WEBSOCKET_ERROR,
  ON_WEBSOCKET_SUCCESS,
  HIDE_FLIGHT_FILTER_SHOW
} from "../constant/actionTypes";

/**
 * 当人员登录时
 * @type {actionCreator}
 */

export const personnel_login=createActionCreator(ON_PERSONNEL_LOGIN,
  function(data){
    return {
      data
    };
  });
/**
 * 当人员退出时
 * @type {actionCreator}
 */
export const personnel_exit=createActionCreator(ON_PERSONNEL_EXIT,
  function(data){
    return {
      data
    }
  });
/**
 * 当任务下发后，人员与车辆绑定
 * @type {actionCreator}
 */
export const personnel_car_binding=createActionCreator(ON_PERSONNEL_CAR_BINDING,
  function(data){
    return {
      data
    }
  });
/**
 * 当下发任务时
 * @type {actionCreator}
 */
export const on_task_dispatched=createActionCreator(ON_TASK_DISPATCHED,
  function(data){
    return {
      data
    };
  })
/**
 * 当任务状态发生改变的时候
 * @type {actionCreator}
 */
export const change_dispatched_task_status=createActionCreator(ON_DISPATCHED_TASK_STATUS_CHANGE,
  function(data){
    return {
      data
    };
  });
/**
 * 取消任务时
 * @type {actionCreator}
 */
export const cancel_dispatched_task=createActionCreator(ON_DISPATCHED_TASK_CANCEL,
  function(data){
    return {
      data
    }
  })
/**
 * 航班新建-本场起飞
 * @type {actionCreator}
 */
export const add_flight_took_off_on_the_field=createActionCreator(ON_FLIGHT_TOOK_OFF_ON_THE_FIELD_ADDED,
  function(data){
    return data
  })
/**
 * 航班修改-本场起飞
 * @type {actionCreator}
 */
export const change_flight_took_off_on_the_field=createActionCreator(ON_FLIGHT_TOOK_OFF_ON_THE_FIELD_CHANGE,
  function(data){
    return data
  }
)
/**
 * 当websocket链接3次失败时
 * @type {actionCreator}
 */
export const changeWebsocketError = createActionCreator(ON_WEBSOCKET_ERROR,
    function(data) {
      return {
        data
      }
    }
  )

export const changeWebsocketSuccess = createActionCreator(ON_WEBSOCKET_SUCCESS,
    function(data) {
      return {
        data
      }
    }
  )

export const websocketMoudel = createActionCreator(HIDE_FLIGHT_FILTER_SHOW)
