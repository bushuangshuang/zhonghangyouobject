import {
        GET_FLIGHT_LIST,
        GET_FLIGHT_LIST_SUCCESS,
        GET_FLIGHT_LIST_ERROR,
        UPDATE_FLIGHT,
        UPDATE_FLIGHT_SUCCESS,
        UPDATE_FLIGHT_ERROR,
        ADD_FLIGHT,
        ADD_FLIGHT_SUCCESS,
        ADD_FLIGHT_ERROR
      } from '../constant/actionTypes'
import {DRAG_TASK} from '../constant/DRAG_TASK'
import  {dao} from '../dao/FlightDao'
// 航班获取
function getflight(payload){
  return{
    type:GET_FLIGHT_LIST,
    payload:payload
  }
}

export function getflight(id){
  return (dispatch)=>{
    dao.getFlight(id).then((res)=>{
      console.log(res)
      dispatch(getflight(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
// 航班获取成功
function getflightsuccess(payload){
  return{
    type:GET_FLIGHT_LIST_SUCCESS,
    payload:payload
  }
}

export function getflightsuccess(id){
  return (dispatch)=>{
    dao.getFlightSuccess(id).then((res)=>{
      console.log(res)
      dispatch(getflightsuccess(res))
    }).catch((error)=>{
      console.log(error)
    })3
  }
}
// 航班获取失败
function getflighterror(payload){
  return{
    type:GET_FLIGHT_LIST_ERROR,
    payload:payload
  }
}

export function getflighterror(id){
  return (dispatch)=>{
    dao.getFlightSuccess(id).then((res)=>{
      console.log(res)
      dispatch(getflightsuccess(res))
    }).catch((error)=>{
      console.log(error)
    })3
  }
}

// 添加航班
function addFlight(payload){
  return{
    type:ADD_FLIGHT,
    payload:payload
  }
}
export function addFlight(id){
  return (dispatch)=>{
    dao.addFlight(id).then((res)=>{
      console.log(res)
      dispatch(addFlight(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
// 添加成功
function addFlightSuccess(payload){
  return{
    type:ADD_FLIGHT_SUCCESS,
    payload:payload
  }
}
export function addFlightSuccess(id){
  return (dispatch)=>{
    dao.addFlightSuccess(id).then((res)=>{
      console.log(res)
      dispatch(addFlightSuccess(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
// 添加失败
function addFlightError(payload){
  return{
    type:ADD_FLIGHT_ERROR,
    payload:payload
  }
}
export function addFlightError(id){
  return (dispatch)=>{
    dao.addFlightError(id).then((res)=>{
      console.log(res)
      dispatch(addFlightError(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
// 航班修改
function updateFlight(payload){
  return{
    type:UPDATE_FLIGHT,
    payload:payload
  }
}
export function updateFlight(id){
  return (dispatch)=>{
    dao.updateFlight(id).then((res)=>{
      console.log(res)
      dispatch(updateFlight(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
// 修改成功
function updateFlightSuccess(payload){
  return{
    type:UPDATE_FLIGHT_SUCCESS,
    payload:payload
  }
}
export function updateFlightSuccess(id){
  return (dispatch)=>{
    dao.updateFlightSuccess(id).then((res)=>{
      console.log(res)
      dispatch(updateFlightSuccess(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
//修改失败
function updateFlightError(payload){
  return{
    type:UPDATE_FLIGHT_ERROR,
    payload:payload
  }
}
export function updateFlightError(id){
  return (dispatch)=>{
    dao.updateFlightError(id).then((res)=>{
      console.log(res)
      dispatch(updateFlightError(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
