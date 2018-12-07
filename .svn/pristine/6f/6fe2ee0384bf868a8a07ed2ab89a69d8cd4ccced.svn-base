import axios from 'axios'
import { config } from '../constant/config'
class ThisFlightDao {
  constructor () {
    // 获取本场航班信息
    this.getThisFlightURL = config.ServerIP + 'flight/flightController/getFlightTaskDateThis'
  }

  // 获取本场航班信息
  getThisFlight (staffId) {
    return axios({
      url: this.getThisFlightURL,
      method: 'POST',
      data: {
        'loginUserIn': {
          'staffId':staffId,
          'staffAirportCode':'111',
          'staffAptareaCode':'111',
        }
      }
    })
  }
}
const Dao = new ThisFlightDao()
export default Dao
