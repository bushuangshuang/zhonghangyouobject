import {
        GET_OIL_LIST,
        UPDATE_OIL,
        UPDATE_OIL_SUCCESS,
        UPDATE_OIL_ERROR,
        SEARCH_OIL,
        SEARCH_OIL_RROR,
        SEARCH_OIL_SUCCESS
  } from '../constant/actionTypes'
import  {dao} from '../dao/OilDao'
//油单获取
function oillist(payload){
  return{
    type:GET_OIL_LIST,
    payload:payload
  }
}
export function oillist(id){
  return (dispatch)=>{
    dao.getOli(id).then((res)=>{
      console.log(res)
      dispatch(oillist(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
//油单查询
function searchoil(payload){
  return{
    type:SEARCH_OIL,
    payload:payload
  }
}
export function searchoil(id){
  return (dispatch)=>{
    dao.searchOil(id).then((res)=>{
      console.log(res)
      dispatch(searchoil(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}

// 查询成功
function oilsearchsuccess(payload){
  return{
    type:SEARCH_OIL_SUCCESS,
    payload:payload
  }
}
export function oilsearchsuccess(id){
  return (dispatch)=>{
    dao.searchOil(id).then((res)=>{
      console.log(res)
      dispatch(oilsearchsuccess(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
// 查询失败
function oilsearcherror(payload){
  return{
    type:SEARCH_OIL_RROR,
    payload:payload
  }
}
export function oilsearcherror(id){
  return (dispatch)=>{
    dao.searchOil(id).then((res)=>{
      console.log(res)
      dispatch(oilsearcherror(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
// 油单修改
function updateoil(payload){
  return{
    type:UPDATE_OIL,
    payload:payload
  }
}
export function updateoil(id){
  return (dispatch)=>{
    dao.updateOil(id).then((res)=>{
      console.log(res)
      dispatch(updateoil(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
// 修改成功
function oilupdatesuccess(payload){
  return{
    type:UPDATE_OIL_SUCCESS,
    payload:payload
  }
}
export function oilupdatesuccess(id){
  return (dispatch)=>{
    dao. updateOilSuccess(id).then((res)=>{
      console.log(res)
      dispatch(oilupdatesuccess(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
// 修改失败
function oilupdateerror(payload){
  return{
    type:UPDATE_OIL_ERROR,
    payload:payload
  }
}
export function oilsearcherror(id){
  return (dispatch)=>{
    dao.updateOilError(id).then((res)=>{
      console.log(res)
      dispatch(oilsearcherror(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
