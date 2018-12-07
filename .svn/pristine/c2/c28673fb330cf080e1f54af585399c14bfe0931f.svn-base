import axios from 'axios'
import {config} from '../constant/config'

class OilPlantsDao {
    constructor() {
        this.addOilPlantsURL = config.BaseIP + "/base/fuelopt/setFuel";


    }
    // 油料列表
    oliPlants(a, b, c, d, url) {
        return axios({
            url: url || this.dispatchTaskURL,
            method: 'POST',
            data: {
                id: ID,

            }
        })
    }
    // 搜索
  searchPlants(a, b, c, d, url) {
    return axios({
      url: url || this.dispatchTaskURL,
      method: 'POST',
      data: {
        id: ID,

      }
    })
  }
  // 添加油料
  addPlants(obj) {
    return axios({
      url:this.addOilPlantsURL,
      method: 'PUT',
      data:obj.addOilPlantsObj
    }).then(res=>{
      console.log(res)
    }).catch(e=>{
      console.log(e)
    })
  }
}

const Dao = new OilPlantsDao();
export default Dao;
