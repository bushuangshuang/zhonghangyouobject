import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  DatePicker,
  Select,
  Input
} from 'antd'
import moment from 'moment'
import './EditTaskModal.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editTask } from '../../reducers/EditTaskModalReducer/action'
const { MonthPicker, RangePicker } = DatePicker
const Option = Select.Option
const dateFormat = 'YYYY-MM-DD HH:mm:ss'

const mapDispatcherToProps = (dispatch) => {
  return bindActionCreators({
    editTask: editTask
  }, dispatch)
}
const mapStatetoProps = (state) => {
  return {
    showEditModal: state.editTaskModalReducer.get('showEditModal'),
  }
}
@connect(mapStatetoProps, mapDispatcherToProps)
class EditTaskModal extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onOk = this.onOk.bind(this)
    this.changeUpdateFu = this.changeUpdateFu.bind(this)
  }
  changeUpdateFu (att, val) {
    console.log('字段', att, val)
    this.props.detail[att] = val
    console.log(this.props.detail[att])
  }
  onOk () {
    console.log('修改：', this.props.detail)
    this.props.editTask(this.props.detail)
    // this.props.handleCancel()
  }

  render () {
    // console.log('modal==', this.props.detail)
    return (
      <div className='add-task-wrapper'>
        <Modal
          visible={this.props.showEditModal}
          onCancel={this.props.handleCancel}
          onOk={this.onOk}
          cancelText={'取消'}
          okText={'保存'}
          title={'修改航班'}
          maskClosable={false}
          className='task-modal'
        >
          <div className='new-flight'>
            <div className='new-flight-con'>
              <div className='new-flight-item'>
                <div className='new-flight-item-inner'>
                  <span>航班日</span>
                  <div>
                    <DatePicker
                      showTime
                      style={{ width: '180px' }}
                      placeholder='选择日期'
                      defaultValue={moment(this.props.detail.flgtFlop ? this.props.detail.flgtFlop : new Date(), dateFormat)}
                      format={dateFormat}
                      onChange={this.flgtFlopChange}
                    />
                  </div>
                </div>
                <div className='new-flight-item-inner'>
                  <span>国内/国际航班标志</span>
                  <Select
                    className='add-task-select'
                    defaultValue={this.props.detail.flgtFlti}
                    onChange={(value) => this.changeUpdateFu('flgtFlti', value)}
                    style={{ width: '180px' }}>
                    <Option className='add-task-select-item' value='D'>国内</Option>
                    <Option className='add-task-select-item' value='I'>国际</Option>
                    <Option className='add-task-select-item' value='R'>地区</Option>
                    <Option className='add-task-select-item' value='M'>混合</Option>
                    <Option className='add-task-select-item' value='U'>未知</Option>
                  </Select>
                </div>
                <div className='new-flight-item-inner'>
                  <span>始发地机场IATA代码</span>
                  <Input
                    placeholder='TSN'
                    defaultValue={this.props.detail.flgtOrg3c}
                    onChange={(e) => this.changeUpdateFu('flgtOrg3c', e.target.value)}
                    style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>目的地名称</span>
                  <Input
                    placeholder='广州'
                    defaultValue={this.props.detail.flgtDesnm}
                    onChange={(e) => this.changeUpdateFu('flgtDesnm', e.target.value)}
                    style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>预计起飞时间</span>
                  <div>
                    <DatePicker
                      showTime
                      defaultValue={moment(this.props.detail.flgtDEtot ? this.props.detail.flgtDEtot : new Date(), dateFormat)}
                      format={dateFormat}
                      placeholder='请选择时间'
                      style={{ width: '180px' }}
                      // onChange={this.flgtDEtotChange}
                      // onOk={this.flgtDEtotOk}
                    />
                  </div>
                </div>
                <div className='new-flight-item-inner'>
                  <span>是否本场</span>
                  <Select
                    className='add-task-select'
                    defaultValue={this.props.detail.flgtGame}
                    onChange={(value) => this.changeUpdateFu('flgtGame', value)}
                    style={{ width: '180px' }}>
                    <Option className='add-task-select-item' value='Y'>本场</Option>
                    <Option className='add-task-select-item' value='N'>空</Option>
                  </Select>
                </div>
              </div>
              <div className='new-flight-item'>
                <div className='new-flight-item-inner'>
                  <strong className='mark-star'>*</strong>
                  <span>航班号</span>
                  <Input
                    placeholder='TSN-CAN'
                    defaultValue={this.props.detail.flgtFlno}
                    onChange={(event) => this.changeUpdateFu('flgtFlno', event.target.value)}
                    style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>飞机注册号</span>
                  <Input
                    placeholder='B7890'
                    defaultValue={this.props.detail.flgtRegn}
                    onChange={(e) => this.changeUpdateFu('flgtRegn', e.target.value)}
                    style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>始发地名称</span>
                  <Input
                    placeholder='天津'
                    defaultValue={this.props.detail.flgtOrgnm}
                    onChange={(e) => this.changeUpdateFu('flgtOrgnm', e.target.value)}
                    style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>预计到达时间</span>
                  <div>
                    <DatePicker
                      showTime
                      defaultValue={moment(this.props.detail.flgtAEtot ? this.props.detail.flgtAEtot : new Date(), dateFormat)}
                      format={dateFormat}
                      placeholder='请选择时间'
                      style={{ width: '180px' }}
                      // onChange={this.flgtAEtotChange}
                      // onOk={this.flgtAEtotOk}
                    />
                  </div>
                </div>
                <div className='new-flight-item-inner'>
                  <span>实际起飞时间</span>
                  <div>
                    <DatePicker
                      showTime
                      defaultValue={moment(this.props.detail.flgtDAtot ? this.props.detail.flgtDAtot : new Date(), dateFormat)}
                      format={dateFormat}
                      placeholder='请选择时间'
                      style={{ width: '180px' }}
                      onChange={this.flgtDAtotChange}
                      onOk={this.flgtDAtotOk}
                     />
                  </div>
                </div>
                <div className='new-flight-item-inner'>
                  <span>是否货机</span>
                  <Select
                    className='add-task-select'
                    defaultValue={this.props.detail.flgtIfsr}
                    onChange={(value) => this.changeUpdateFu('flgtIfsr', value)}
                    style={{ width: '180px' }}>
                    <Option className='add-task-select-item' value='Y'>是</Option>
                    <Option className='add-task-select-item' value='N'>否</Option>
                  </Select>
                </div>
              </div>
              <div className='new-flight-item'>
                <div className='new-flight-item-inner'>
                  <span>进离港</span>
                  <Select
                    className='add-task-select'
                    defaultValue={this.props.detail.flgtAdid}
                    onChange={(value) => this.changeUpdateFu('flgtAdid', value)}
                    style={{ width: '180px' }}>
                    <Option className='add-task-select-item' value='A'>进港</Option>
                    <Option className='add-task-select-item' value='D'>出港</Option>
                  </Select>
                </div>
                <div className='new-flight-item-inner'>
                  <span>航空公司名称</span>
                  <Input
                    placeholder='国航'
                    defaultValue={this.props.detail.flgtAlcname}
                    onChange={(e) => this.changeUpdateFu('flgtAlcname', e.target.value)}
                    style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <strong className='mark-star'>*</strong>
                  <span>目的地机场IATA代码</span>
                  <Input
                    placeholder='CAN'
                    defaultValue={this.props.detail.flgtDes3c}
                    onChange={(e) => this.changeUpdateFu('flgtDes3c', e.target.value)}
                    style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>实际到达时间</span>
                  <div>
                    <DatePicker
                      showTime
                      defaultValue={moment(this.props.detail.flgtAAtot ? this.props.detail.flgtAAtot : new Date(), dateFormat)}
                      format={dateFormat}
                      placeholder='请选择时间'
                      style={{ width: '180px' }}
                      // onChange={this.flgtAAtotChange}
                      // onOk={this.flgtAAtotOk}
                     />
                  </div>
                </div>
                <div className='new-flight-item-inner'>
                  <span>机位号</span>
                  <Input
                    placeholder='201'
                    defaultValue={this.props.detail.flgtPlacecode}
                    onChange={(e) => this.changeUpdateFu('flgtPlacecode', e.target.value)}
                    style={{ width: '180px' }} />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

EditTaskModal.PropTypes = {
  detail: PropTypes.object.isRequired,
}

export default EditTaskModal
