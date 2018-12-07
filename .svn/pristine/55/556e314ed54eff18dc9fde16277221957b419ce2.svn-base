import axios from 'axios'
import { config } from '../constant/config'

class StaffDao {
  constructor () {
    this.StaffDaoURL = config.BaseIP + 'base/staffvehi/findstaffvehi'
  }

  /**
   * 获取人员信息
   * @param taskOpeStaffId 加油员ID
   * @param taskAirportCode 机场代码
   * @param taskAptareaCode 机场区域代码
   * @returns {AxiosPromise}
   */
  getStaff (taskOpeStaffId = 'admin', taskAirportCode = '111', taskAptareaCode = '111') {
    return axios({
      url: this.StaffDaoURL,
      method: 'POST',
      data: {
        'loginUserIn':{
          'staffAirportCode':'111',
          'staffAptareaCode':'111',
          'taskOpeStaffId': taskOpeStaffId, // 加油员ID
          'taskAirportCode':taskAirportCode, // 机场代码
          'taskAptareaCode': taskAptareaCode// 机场区域代码
        },
        'taskOpeStaffId': taskOpeStaffId, // 加油员ID
        'taskAirportCode':taskAirportCode, // 机场代码
        'taskAptareaCode': taskAptareaCode// 机场区域代码
      }
    }).then(res => {
          // console.log("dao:",res)
      return res
    }).catch(e => {
      console.log('我bug了', e)
    })
  }
}

const Dao = new StaffDao()
export default Dao
