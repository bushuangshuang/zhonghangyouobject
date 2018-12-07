import Immutable from 'immutable'
import {
  flightDetailSuccess
} from './action'
import moment from 'moment'

const initialState = Immutable.fromJS({
  flightDetail: {
    flgtFlop:  moment(new Date()).format('YYYY-MM-DD HH:mm:ss'), // 航班日
    flgtFlno: '', // 航班号
    flgtAdid: 'D', // 进离港
    flgtFlti: 'D', // 国内/国际航班标志
    flgtRegn: '', // 飞机注册号
    flgtAlcname: '', // 航空公司名称
    flgtOrg3c: '', // 始发地机场IATA代码
    flgtOrgnm: '', // 始发地名称
    flgtDes3c: '', // 目的地机场IATA代码
    flgtDesnm: '', // 目的地名称 ------
    flgtAEtot: '', // 预计到达时间
    flgtAAtot: '', // 实际到达时间
    flgtDEtot: '', // 预计起飞时间
    flgtDAtot: '', // 实际起飞时间
    flgtPlacecode: '', // 机位号
    flgtGame: 'Y', // 是否本场
    flgtIfsr: 'N', // 是否为货机
  },
  showModal:false
})

export default function flightDetailReducer (state = initialState, action) {
  switch (action.type) {
    case flightDetailSuccess.type: {
      return state.update('flightDetail', val => {
        return Immutable.Map(action.payload.flightDetail)
      }).update('showModal', val => {
        return true
      })
    }
    default:
      return state
  }
}
