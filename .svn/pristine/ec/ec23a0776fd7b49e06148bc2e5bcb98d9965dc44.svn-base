import axios from 'axios'
import {config} from '../constant/config'
class LoginDao {
  constructor() {
    this.LoginDaoURL = config.loginIP + "/base/staffController/PCstaffLogin"
  }

// pc登录
  login(obj) {
    console.log("============dao==>",obj.login,config.loginIP)
    return axios({
      url: this.LoginDaoURL,
      method: 'POST',
      data:obj.login
    })
      .then(resolve => {
        console.log("wo ",resolve)
      })
      .catch(e => {
        console.log("dos==>",e)
      })
  }

// pc登出
  loginout(username, password, url) {
    return axios({
      url: url || this.dispatchTaskURL,
      method: 'POST',
      data: {
        id: ID,

      }
    })
  }

}
const
  Dao = new LoginDao();
export
default
Dao;
