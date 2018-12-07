import Immutable from 'immutable'
import {
  loginSuccess
} from './action'

const initialState = Immutable.fromJS({
  login:{}
})
export default function loinreducer (state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case loginSuccess.type: {

      return state.update('login', val => {
        return Immutable.List(action.payload.login)
      })
    }
    default:
      return state
  }
}
