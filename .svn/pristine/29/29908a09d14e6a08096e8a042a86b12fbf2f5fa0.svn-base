import axios from 'axios'
import { config } from '../constant/config'
class AddTaskDao {
  constructor () {
    this.addFlightURL = config.ServerIP + 'flight/flightController/addFlightAndTask'
  }

  // 新建任务
  addTaskApi (obj) {
    return axios({
      url: this.addFlightURL,
      method: 'POST',
      data: obj.addTaskObj
    })
  }
}
const Dao = new AddTaskDao()
export default Dao
