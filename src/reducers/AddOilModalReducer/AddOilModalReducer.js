import Immutable from 'immutable'
import {
  addOilPlants,
  addOilPlantsSuccess,
  hideAddOilModal,
  showAddOilModal
} from './action'

const initialState = Immutable.fromJS({
  addOilModal: false,
  addOilPlantsSuccess: '',
  addOilPlantsObj: {}
})

export default function addOilModalReducer (state = initialState, action) {
  switch (action.type) {
    case showAddOilModal.type:
      return state.update('addOilModal', val => {
        return true
      })
    case hideAddOilModal.type:
      return state.update('addOilModal', val => {
        return false
      })
    case addOilPlants.type:
      return state.update('addOilPlantsObj', val => {
        return Immutable.Map(action.payload.addOilPlantsObj)
      })
    case addOilPlantsSuccess.type:
      return state.update('addOilPlantsSuccess', val => {
        return action.payload.addOilPlantsSuccess
      })
    default:
      return state
  }
}
