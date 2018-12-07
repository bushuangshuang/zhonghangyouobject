import axios from 'axios'
import {config} from '../constant/config'
class OilDao {
  constructor() {
    // 油单获取
    this.getoilURL = config.ServerIP + "/flight/recpt/findfuel"
    // 油单查询
    this.searchoilURL = config.ServerIP + ""
    // 油单详情
    this.detailoilURL = config.ServerIP + ""
    // 油单修改
    this.updateURL = config.ServerIP + ""
    // 修改成功
    this.updateSuccesslURL = config.ServerIP + ""
    // 修改失败
    this.updateErrorlURL = config.ServerIP + ""

  }
  // 油单获取
  getOli(staffId,taffAirportCode,staffAptareaCode, url) {
    return axios({
      url: url || this.getoilURL,
      method: 'POST',
      data: {
        staffId:staffId,
        taffAirportCode:taffAirportCode,
        staffAptareaCode:staffAptareaCode

      }
    })
  }
  // 油单查询
  searchOil(a, b, c, d, url) {
    return axios({
      url: url || this.searchoilURL,
      method: 'POST',
      data: {
        id: ID,

      }
    })
  }
  // 油单详情
  detailOil(a, b, c, d, url) {
    return axios({
      url: url || this.detailoilURL,
      method: 'POST',
      data: {
        id: ID,
      }
    })
  }
  // 油单修改
  updateOil(a, b, c, d, url) {
    return axios({
      url: url || this.updateURL,
      method: 'POST',
      data: {
        id: ID,
      }
    })
  }
  // 修改成功
  updateOilSuccess(a, b, c, d, url) {
    return axios({
      url: url || this.updateSuccesslURL,
      method: 'POST',
      data: {
        id: ID,
      }
    })
  }
  // 修改失败
  updateOilError(a, b, c, d, url) {
    return axios({
      url: url || this.updateErrorlURL,
      method: 'POST',
      data: {
        id: ID,
      }
    })
  }
}
const Dao = new OilDao();
export default Dao;
