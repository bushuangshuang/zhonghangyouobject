import Immutable from 'immutable'
import {
  editFlightDetailSuccess,
  editTask, editTaskError,
  editTaskSuccess,
} from './action'
import moment from 'moment/moment'

const initialState = Immutable.fromJS({
  editSuccess: '',
  editTaskObj: {},
  editFlightDetail: {
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
  showEditModal:false
})

export default function editTaskModalReducer (state = initialState, action) {
  switch (action.type) {
    case editFlightDetailSuccess.type:
      return state.update('editFlightDetail', val => {
        return Immutable.Map(action.payload.editFlightDetail)
      }).update('showEditModal', val => {
        return true
      })
    case editTask.type:
      return state.update('editTaskObj', val => {
        return Immutable.Map(action.payload.editTaskObj)
      })
    case editTaskSuccess.type:
      return state.update('editSuccess', val => {
        return action.payload.editSuccess
      }).update('showEditModal', val => {
        return false
      })
    case editTaskError.type:
      return state.update('showEditModal', val => {
        return true
      })
    default:
      return state
  }
}
