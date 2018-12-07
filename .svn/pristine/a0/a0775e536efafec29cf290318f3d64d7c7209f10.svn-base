import {
  GET_STAFF_LIST,
  GET_STAFF_LIST_SUCCESS,
  GET_STAFF_LIST_ERROE
} from '../constant/actionTypes'
import  {dao} from '../dao/StaffAction'
import {createActionCreator} from "../reducers/utils/createActionCreator";

/*export const getStaffList =  createActionCreator(GET_STAFF_LIST_SUCCESS,async () => {
  let staffList = await dao.getStaff(taskOpeStaffId,taskAirportCode,taskAptareaCode).then(res => {
    return res
  }).catch(e => {
    console.log(e)
  })
  return {
    staffList
  }
})*/

/*export const getStaffList = createActionCreator(GET_STAFF_LIST,()=> {

})

export const getStaffListSuccess = createActionCreator(GET_STAFF_LIST_SUCCESS,()=> {

})

export const getStaffListError = createActionCreator(GET_STAFF_LIST_ERROE,() => {

})*/

function getStaffList(payload) {
  return {
    type: GET_STAFF_LIST,
    payload:payload
  }
}

export function getStaffList(taskOpeStaffId,taskAirportCode,taskAptareaCode) {
  return (dispatch)=>{
    dao.getStaff(taskOpeStaffId,taskAirportCode,taskAptareaCode).then((res)=>{
      console.log(res)
      dispatch(getStaffList(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}

