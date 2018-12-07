import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  Select,
  Input
} from 'antd'
import './AddOilModal.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addOilPlants} from '../../reducers/AddOilModalReducer/action'
import moment from 'moment'

const dateFormat = 'YYYY-MM-DD HH:mm:ss'
let tempData = {
  fuelTestBillNo : '',//化驗單
  fuelTemp:'',//溫度
  fuelDnst:'' ,//密度
  fuelAirportCode:'111' ,//本場航班
  fuelDate:''//當前的時間
}

const mapDispatcherToProps = (dispatch) => {
  return bindActionCreators({
    addOilPlants:addOilPlants
  }, dispatch)
}
const mapStatetoProps = (state) => {
  return {

  }
}
@connect(mapStatetoProps, mapDispatcherToProps)
class AddTaskModal extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onOk = this.onOk.bind(this)
  }

// 化驗單號
  fuelTestBillNo(e){
    console.log(e.target.value)
    tempData.fuelTestBillNo=e.target.value
  }
//   溫度
  fuelTemp(e){
    console.log(e.target.value)
    tempData.fuelTemp=e.target.value
  }
//   密度
  fuelDnst(e){
    console.log(e.target.value)
    tempData.fuelDnst=e.target.value
  }
  onOk () {

    // tempData.fuelAirportCode=localStorage.getItem('fuelAirportCode')

    tempData.fuelDate=moment(new Date()).format('YYYY-MM-DD HH:mm:ss')

    console.log(tempData)
    this.props.addOilPlants(tempData)
    this.props.handleCancel()


  }
  render () {
    return (
      <div>
        <Modal
          title='油料参数'
          visible={this.props.visible}
          onOk={this.onOk}
          onCancel={this.props.handleCancel}
          maskClosable={false}
          className='oil-modal'
          cancelText='取消'
          okText='确认'
        >
          <div className='Oil-box'>
            <div className='Oil-item'>
              <li className='Oil-title'>2018-10-20 管线车</li>
              <div className='Oil-item-list'>
                <li className='Oil-item-list-li'>
                  管线车化验单 <Input
                                      style={{
                                                width: '50%', color:'#000' ,
                                                background:'#E9EBF3',border:'1px solid #A1AAD0'
                                              }}
                                      placeholder='2018-148'
                                      onChange={this.fuelTestBillNo}
                />
                </li>
                <li className='Oil-item-list-li'>
                  温度（℃） <Input
                                      style={{
                                                width: '50%', color:'#000',
                                                background:'#E9EBF3',border:'1px solid #A1AAD0'
                                      }} placeholder='20.0'
                                      onChange={this.fuelTemp}
                />
                </li>
                <li className='Oil-item-list-li'>
                  密度（克/立方厘米） <Input
                                            style={{
                                                    width: '50%', color:'#000',
                                                    background:'#E9EBF3',border:'1px solid #A1AAD0' }}
                                            placeholder='0.7940'
                                            onChange={this.fuelDnst}
                />
                </li>
              </div>
            </div>
            {/*<div className='Oil-item'>*/}
              {/*<li className='Oil-title' >2018-10-20 油管车</li>*/}
              {/*<div className='Oil-item-list'>*/}
                {/*<li className='Oil-item-list-li'>*/}
                  {/*油管车化验单 <Input style={{ width: '50%', color:'#000',background:'#E9EBF3',border:'1px solid #A1AAD0' }} placeholder='2018-148'/>*/}
                {/*</li>*/}
                {/*<li className='Oil-item-list-li'>*/}
                  {/*温度（℃） <Input style={{ width: '50%', color:'#000',background:'#E9EBF3',border:'1px solid #A1AAD0' }} placeholder='20.0'/>*/}
                {/*</li>*/}
                {/*<li className='Oil-item-list-li'>*/}
                  {/*密度（克/立方厘米） <Input style={{ width: '50%', color:'#000' ,background:'#E9EBF3',border:'1px solid #A1AAD0'}} placeholder='0.7940'/>*/}
                {/*</li>*/}
              {/*</div>*/}
            {/*</div>*/}
          </div>
        </Modal>
      </div>
    )
  }
}
AddTaskModal.PropTypes = {
  visible: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}

export default AddTaskModal
