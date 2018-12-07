import axios from 'axios'
import {config} from '../constant/config'

class FlightTitleDao {
  constructor() {
    this.getFlightTitleURL = config.BaseIP + "base/setting/settingList"
  }

  /**
   * 获取航班列表表头
   * @param settAirportCode
   * @param settStaffId
   * @returns {AxiosPromise}
   */
  getFlightTitle(settAirportCode="111",settStaffId="admin") {
    return axios({
      url: this.getFlightTitleURL,
      method: "POST",
      data: {
        "loginUserIn":{
          "staffAirportCode":"111",
          "staffAptareaCode":"111",
          "settAirportCode": settAirportCode,
          "settStaffId": settStaffId
        },
        "settAirportCode": settAirportCode,
        "settStaffId": settStaffId
      }
    })
  }
}

const Dao = new FlightTitleDao();

export default Dao
