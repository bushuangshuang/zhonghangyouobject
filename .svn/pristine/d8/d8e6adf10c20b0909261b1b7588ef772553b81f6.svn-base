import { map, ignoreElements, switchMap, catchError, take } from 'rxjs/operators'
import { from } from 'rxjs/observable/from'
import { notification } from 'antd'
import { EMPTY } from 'rxjs'
import { ActionsObservable, ofType } from 'redux-observable'
import OilPlantsDao from '../../dao/OilPlantsDao'
import { addOilPlants, addOilPlantsError, addOilPlantsSuccess } from '../../reducers/AddOilModalReducer/action'
export const addOilPlantsEpics = action$ =>
  action$.pipe(
    ofType(addOilPlants.type),
    map((action) => {
      console.log('___________',action.payload.addOilPlantsObj)
      return {
        addOilPlantsObj: action.payload.addOilPlantsObj
      }
    }),
    switchMap((addOilPlantsObj) => {
      return from(OilPlantsDao.addPlants(addOilPlantsObj)).pipe(map(({ data }) => {
          return addOilPlantsSuccess(data)
        }
      ), catchError((e) => {
        return ActionsObservable.of(addOilPlantsError(e))
      }))
    })
  )
