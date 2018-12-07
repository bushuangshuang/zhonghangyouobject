/**
 *
 * index.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018/11/4
 *
 * @内容 作用
 * @内容 作用
 */
import { combineEpics } from 'redux-observable'
// import { AutoLogEpic } from './LogEpics/LogEpics'

import { getFlightEpics, getFlightListErrorEpics } from './FlightEpics/FlightEpics'
import { getStaffEpics } from './StaffEpics/StaffEpics'
import { getTaskListEpics, delTaskEpics, delTaskEpicsError, delTaskEpicsSucess } from './TaskEpics/TaskEpics'
import { getThisFlightEpics, getThisFlightListErrorEpics } from './ThisFlightEpics/ThisFlightEpics'
import { getFlightTitleEpics } from './FlightTitleEpics/FlightTitleEpics'
import {LoginEpics,LoginErrorEpics} from "./LogEpics/LogEpics"
import {addOilPlantsEpics} from './AddOilplantsEpics/AddOilplantsEpics'
import {addTaskModalEpics} from './AddTaskModalEpics/AddTaskModalEpics'
import { WheelScrollOnViewEpic } from './ScrollEpics/UIEpics/UIEpics'
import { flightDetailEpics } from './FlightDetailEpics/FlightDetailEpics'
import { editTaskModalEpics } from './EditTaskModalEpics/EditTaskModalEpics'
export const rootEpic = combineEpics(
  // AutoLogEpic,
  getFlightEpics,
  getFlightListErrorEpics,
  getTaskListEpics,
  getStaffEpics,
  getThisFlightEpics,
  getThisFlightListErrorEpics,
  getFlightTitleEpics,
  delTaskEpics,
  delTaskEpicsSucess,
  delTaskEpicsError,
  LoginEpics,
  LoginErrorEpics,
  addTaskModalEpics,
  addOilPlantsEpics,
  WheelScrollOnViewEpic,
  flightDetailEpics,
  editTaskModalEpics,
)
