import { createActionCreator } from '../utils/createActionCreator'
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../../constant/actionTypes";
export const login=createActionCreator(LOGIN,function (username,password) {
  console.log('++++++++',username,password)
  return {
    login:{
      staffId:username,
      staffPwd:password
    }
  }
})
export const loginSuccess=createActionCreator(LOGIN_SUCCESS,function (data) {
  return {
    data:data
  }
})
export const loginError=createActionCreator(LOGIN_ERROR,function (e) {
  return {
    error:e
  }
})
