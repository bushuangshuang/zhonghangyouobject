/**
 *
 * SocketComp 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018-11-22
 *
 * @内容 作用
 * @内容 作用
 */
'use strict'
import React, { PureComponent } from 'react'
import ws from 'reconnecting-websocket'
import { config } from '../constant/config'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  on_task_dispatched,
  change_dispatched_task_status,
  cancel_dispatched_task,
  personnel_login, personnel_exit, personnel_car_binding,
  changeWebsocketError, changeWebsocketSuccess
} from '../action/WebsocketActions'

const options = {
  automaticOpen: true, //是否应该在实例化时立即尝试连接
  reconnectInterval: 1000, //尝试重新连接之前延迟的毫秒数
  maxReconnectInterval: 30000,//延迟重新连接尝试的最大毫秒数
  maxReconnectAttempts: 3,//最大重新连接尝试次数
  debug: false  //记录调试消息
};

@connect((state, ownProps) => {

}, (dispatch) => {
  return bindActionCreators({
    on_task_dispatched:on_task_dispatched,
    change_dispatched_task_status:change_dispatched_task_status,
    cancel_dispatched_task:cancel_dispatched_task,
    personnel_login,
    personnel_exit,
    personnel_car_binding,
    changeWebsocketError,
    changeWebsocketSuccess
  }, dispatch)
})
class SocketComp extends PureComponent {
  counter = 0

  componentDidMount () {

    // todo 根据情况修改地址
    this.ws = new ws(config.socketIP,null,options)
    this.ws.onerror = (e) => {
      if(this.counter++ == options.maxReconnectAttempts) {
        this.counter = 0
        this.props.changeWebsocketError(e)
      }
    }

    this.ws.onopen = () => {
      this.counter = 0
    }

    this.ws.onmessage = (e) => {
      // todo 根据最新协议修改
      const obj = JSON.parse(e.data)
      /**
       * 处理任务相关Websocket事件
       */
      // if (obj.flg == 1) {
        if (obj.type == 3) {
          // todo 当任务下发
          console.log("socket:",obj.content)
          this.props.on_task_dispatched(obj.content)
        }
        if (obj.type == 5) {
          // todo 当任务状态改变
          this.props.change_dispatched_task_status(obj.content)
        }
        if (obj.type == 6) {
          // todo 当任务取消
          console.log("当任务取消:",obj.content)
          this.props.cancel_dispatched_task(obj.content)
        }
      // }
      // if (obj.flg == 0) {
        if (obj.type == 0) {
          this.props.personnel_login(obj.content)
        }
        if (obj.type == 1) {
          this.props.personnel_exit(obj.content)
        }
        if (obj.type == 2) {
          this.props.personnel_car_binding(obj.content)
        }
      // }
    }
  }
  componentDidCatch (error, errorInfo) {
    console.log(errorInfo)
  }

  componentWillUnmount () {
    this.ws.close(1000, 'close by unmounted')
    this.ws = null
  }

  render () {
    return (
      <div />
    )
  }
}

export default SocketComp
