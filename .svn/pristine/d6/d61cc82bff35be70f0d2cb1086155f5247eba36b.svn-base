import { createActionCreator } from '../utils/createActionCreator'
import dao from '../../dao/FlightTitleDao'
import {
  GET_FLIGHT_TITLE,
  GET_FLIGHT_TITLE_SUCCESS,
  GET_FLIGHT_TITLE_ERROR
} from '../../constant/actionTypes'

export const getFlightTitle = createActionCreator(GET_FLIGHT_TITLE,function(data){
  return data
})

export const getFlightTitleSuccess = createActionCreator(GET_FLIGHT_TITLE_SUCCESS,function(data) {
  return {
    flightTitle: data.data
  }
})

export const getFlightTitleError = createActionCreator(GET_FLIGHT_TITLE_ERROR,function(e){
  console.log("getFlightTitleError",e)
  return {
    error: e
  }
})
