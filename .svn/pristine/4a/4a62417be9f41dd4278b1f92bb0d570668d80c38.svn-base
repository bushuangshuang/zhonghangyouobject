import {LOGIN} from '../constant/actionTypes'

import  {dao} from '../dao/FlightDao'

function LoginTask(payload){
  return{
    type:LOGIN,
    payload:payload
  }
}

export function login(id){
  return (dispatch)=>{
    dao.getFlight(id).then((res)=>{
      console.log(res)
      dispatch(login(res))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
