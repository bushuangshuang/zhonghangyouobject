import axios from 'axios'
import { config } from '../constant/config'
class TaskDao {
  constructor () {
    // 获取航班信息
    // this.getFlightURL=config.ServerIP+"flight/flightController/getFlightThreeDateList"
    /**
     * 修改航班信息api接口地址
     * 2018-11-20
     * @type {string}
     * author: tiny
     */
    this.getFlightURL = config.ServerIP + 'flight/taskController/getTaskAndFlight'
    // 添加航班
    this.addFlightURL = config.ServerIP + 'flight/flightController/addFlightAndTask'
    // 添加成功
    this.addFlightSuccessURL = config.ServerIP + ''
    // 添加失败
    this.addFlightErrorURL = config.ServerIP + ''
    // 航班修改
    this.updateFlightURL = config.ServerIP + 'flight/flightController/updateFlightInfo'
    // 修改成功
    this.updateFlightSuccessURL = config.ServerIP + ''
    // 修改失败
    this.updateFlightErrorURL = config.ServerIP + ''
    // 航班详情
    this.flightDetailURL = config.ServerIP + 'flight/flightController/getFlightInfoById'
  }
  // 获取航班信息
  getFlight (staffId, url) {
    return axios({
      url:url || this.getFlightURL,
      method:'POST',
      data:{
        'loginUserIn':{
          'staffAirportCode':'111',
          'staffAptareaCode':'111',
          'staffId':staffId
        }
      }
    })
  }
  // 获取成功
  getFlightSuccess (staffId, url) {
    return axios({
      url:url || this.getFlightURL,
      method:'POST',
      data:{
        // id:ID,
        'staffId':staffId
      }
    })
  }
  // 获取失败
  getFlightError (staffId, url) {
    return axios({
      url:url || this.getFlightURL,
      method:'POST',
      data:{
        // id:ID,
        'staffId':staffId
      }
    })
  }
  // 航班详情 ---有用
  flightDetail (id) {
    return axios({
      url: this.flightDetailURL,
      method: 'POST',
      data: {
        'flgtId': id
      }
    }).then(res => {
      console.log('成功11')
    }).catch(e => {
      console.log(e)
    })
  }
  // 航班修改 --有用
  updateFlight (obj) {
    console.log('dao:', obj)
    return axios({
      url: this.updateFlightURL,
      method: 'POST',
      data:obj.editTaskObj
    })
  }
  // 修改成功
  updateFlightSuccess (staffId, url) {
    return axios({
      url:url || this.updateFlightSuccessURL,
      method:'POST',
      data:{
        id:ID,
        // "staffId":"aaa"
      }
    })
  }
  // 修改失败
  updateFlightError (staffId, url) {
    return axios({
      url:url || this.updateFlightErrorURL,
      method:'POST',
      data:{
        id:ID,
        // "staffId":"aaa"
      }
    })
  }

  // 添加航班
  addFlight (flightobj, url) {
    return axios({
      url:url || this.addFlightURL,
      method:'POST',
      data:{
        flightobj

      }
    })
  }
  // 添加成功
  addFlightSuccess (staffId, url) {
    return axios({
      url:url || this.addFlightSuccessURL,
      method:'POST',
      data:{
        id:ID,
        // "staffId":"aaa"
      }
    })
  }
  // 添加失败
  addFlightError (staffId, url) {
    return axios({
      url:url || this.addFlightErrorURL,
      method:'POST',
      data:{
        id:ID,
        // "staffId":"aaa"
      }
    })
  }
}
const Dao = new TaskDao()
export default Dao
