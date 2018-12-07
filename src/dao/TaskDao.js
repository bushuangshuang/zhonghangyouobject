import axios from 'axios'
import {config} from '../constant/config'

class TaskDao {
  constructor() {
    this.dispatchTaskURL = config.ServerIP + "/flight/taskController/updateTaskInfo"
    this.getTaskListURL = config.ServerIP + "flight/taskController/getTaskAlready"
    this.delTaskURL = config.ServerIP + "flight/taskController/updateTaskCancel"
  }
  // 获取任务信息
  getTaskList() {
    return axios({
      url: this.getTaskListURL,
      method: 'POST',
      data: {
        "loginUserIn":{"staffAirportCode":"111","staffAptareaCode":"111"}
      }
    })
  }
  // flight/taskController/getTaskAndFlight
  getTask(a,b,c,d,url){
    return axios({
      url:url||this.dispatchTaskURL,
      method:'PUT',
      data:{
        id:ID,
        // "staffId":"aaa"
      }
    })
  }
  // 任务取消
  cancelTask(taskId){
    console.log("quxiao==>dao:",taskId)
    return axios({
      url: this.delTaskURL,
      method:'PUT',
      data:{
        'loginUserIn':{
          'staffAirportCode':'111',
          'staffAptareaCode':'111',
          'taskId':taskId
        },
        'taskId':taskId
      }
    })
  }

  // 任务修改
  updateTask(a,b,c,d,url){
    return axios({
      url:url||this.dispatchTaskURL,
      method:'POST',
      data:{
        id:ID,

      }
    })
  }
  // 任务下发
  dispatchTask(taskId,staffId,taskOpeStaffId,taskContent,url){
    return axios({
      url:url||this.dispatchTaskURL,
      method:'PUT',
      data:{
        taskId:taskId,
        taskCreStaffId:taskOpeStaffId,
        taskOpeStaffId:staffId,
        taskContent:taskContent,
        taskStatus:"1"
      }
    })
  }

}

const Dao = new TaskDao();
export default Dao;
