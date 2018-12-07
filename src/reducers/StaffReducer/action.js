import { createActionCreator } from '../utils/createActionCreator'
import dao from '../../dao/StaffDao'
import {
  GET_STAFF_LIST,
  GET_STAFF_LIST_SUCCESS,
  GET_STAFF_LIST_ERROE
} from '../../constant/actionTypes'

/* export const getStaffList=createActionCreator(GET_STAFF_LIST, async (taskOpeStaffId,taskAirportCode,taskAptareaCode)=> {
  let staffList;
  await dao.getStaff(taskOpeStaffId,taskAirportCode,taskAptareaCode).then(res => {
    staffList = res.data
  }).catch(e => {
    console.log(e)
  })
  // return getStaffListSuccess(staffList)
  return staffList
}) */
export const getStaffList = createActionCreator(GET_STAFF_LIST)
export const getStaffListSuccess = createActionCreator(GET_STAFF_LIST_SUCCESS, function (data) {
  return {
    staffList:data.data
  }
})
export const getStaffListError = createActionCreator(GET_STAFF_LIST_ERROE, function (e) {
  return {
    error:e
  }
})
