import { createActionCreator } from '../utils/createActionCreator'
import {
          ADD_OIL_PLANTS,
          ADD_OIL_PLANTS_SUCCESS ,
          ADD_OIL_PLANTS_ERROR,
          HIDE_ADD_OIL_MODAL,
            SHOW_ADD_OIL_MODAL
            } from '../../constant/actionTypes'
import { message } from 'antd/lib/index'

export const showAddOilModal = createActionCreator(SHOW_ADD_OIL_MODAL, function () {
  console.log('=====');
})
export const hideAddOilModal = createActionCreator(HIDE_ADD_OIL_MODAL, function () {
})

// 新建油单
export const addOilPlants = createActionCreator(ADD_OIL_PLANTS, function (data) {
  console.log('传值==', data)
  return {
    addOilPlantsObj: data
  }
})
export const addOilPlantsSuccess = createActionCreator(ADD_OIL_PLANTS_SUCCESS, function (data) {
  message.success('添加成功')
  return {
    addOilPlantsSuccess: data
  }
})
export const addOilPlantsError = createActionCreator(ADD_OIL_PLANTS_ERROR, function (e) {
  message.error('添加失败')
  return {
    error: e
  }
})
