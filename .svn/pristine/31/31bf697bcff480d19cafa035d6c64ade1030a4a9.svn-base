import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  DatePicker,
  Select,
  Input
} from 'antd'
import moment from 'moment'
import './AddTaskModal.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTask } from '../../reducers/AddTaskModalReducer/action'
const Option = Select.Option
const dateFormat = 'YYYY-MM-DD HH:mm:ss'
let time = new Date()

let tempData = {
  flgtFlop:  moment(time).format('YYYY-MM-DD HH:mm:ss'), // 航班日
  flgtFlno: '', // 航班号
  flgtAdid: 'D', // 进离港
  flgtFlti: 'D', // 国内/国际航班标志
  flgtRegn: '', // 飞机注册号
  flgtAlcname: '', // 航空公司名称
  flgtOrg3c: '', // 始发地机场IATA代码
  flgtOrgnm: '', // 始发地名称
  flgtDes3c: '', // 目的地机场IATA代码
  flgtDesnm: '', // 目的地名称 ------
  flgtAEtot: '', // 预计到达时间
  flgtAAtot: '', // 实际到达时间
  flgtDEtot: '', // 预计起飞时间
  flgtDAtot: '', // 实际起飞时间
  flgtPlacecode: '', // 机位号
  flgtGame: 'Y', // 是否本场
  flgtIfsr: 'N', // 是否为货机
  // -------------------
}
const mapDispatcherToProps = (dispatch) => {
  return bindActionCreators({
    addTask: addTask
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

  // 航班日
  flgtFlopChange (date, dateString) {
    console.log('flgtFlop---', dateString)
    tempData.flgtFlop = dateString
  }
  // 航班号
  flgtFlnoChange (e) {
    console.log('flgtFlno---', e.target.value)
    tempData.flgtFlno = e.target.value
  }
  // 进离港
  flgtAdidChange (value) {
    console.log(`flgtAdid--- ${value}`)
    tempData.flgtAdid = value
  }
  // 国内/国际航班标志
  flgtFltiChange (value) {
    console.log(`flgtFlti--- ${value}`)
    tempData.flgtFlti = value
  }
  // 飞机注册号
  flgtRegnChange (e) {
    console.log('flgtRegn---', e.target.value)
    tempData.flgtRegn = e.target.value
  }
  // 航空公司名称
  flgtAlcNameChange (e) {
    console.log('flgtAlcname---', e.target.value)
    tempData.flgtAlcname = e.target.value
  }
  // 始发地机场IATA代码
  flgtOrg3cChange (e) {
    console.log('flgtOrg3c---', e.target.value)
    tempData.flgtOrg3c = e.target.value
  }
  // 始发地名称
  flgtOrgnmChange (e) {
    console.log('flgtOrgnm---', e.target.value)
    tempData.flgtOrgnm = e.target.value
  }
  // 目的地机场IATA代码
  flgtDes3cChange (e) {
    console.log('flgtDes3c---', e.target.value)
    tempData.flgtDes3c = e.target.value
  }
  // 目的地名称
  flgtDesnmChange (e) {
    console.log('flgtDesnm---', e.target.value)
    tempData.flgtDesnm = e.target.value
  }
  // 预计到达时间
  flgtAEtotChange (value) {
    console.log('flgtAEtot--- change', moment(value).format('YYYY-MM-DD HH:mm:ss'))
    tempData.flgtAEtot = moment(value).format('YYYY-MM-DD HH:mm:ss')
  }
  flgtAEtotOk (value) {
    console.log('flgtAEtot---', moment(value).format('YYYY-MM-DD HH:mm:ss'))
    tempData.flgtAEtot = moment(value).format('YYYY-MM-DD HH:mm:ss')
  }
  // 实际到达时间
  flgtAAtotChange (value) {
    console.log('flgtAAtot--- change', moment(value).format('YYYY-MM-DD HH:mm:ss'))
    tempData.flgtAAtot = moment(value).format('YYYY-MM-DD HH:mm:ss')
  }
  flgtAAtotOk (value) {
    console.log('flgtAAtot--- change', moment(value).format('YYYY-MM-DD HH:mm:ss'))
    tempData.flgtAAtot = moment(value).format('YYYY-MM-DD HH:mm:ss')
  }
  // 预计起飞时间
  flgtDEtotChange (value) {
    console.log('flgtDEtot--- change', moment(value).format('YYYY-MM-DD HH:mm:ss'))
    tempData.flgtDEtot = moment(value).format('YYYY-MM-DD HH:mm:ss')
  }
  flgtDEtotOk (value) {
    console.log('flgtDEtot--- change', moment(value).format('YYYY-MM-DD HH:mm:ss'))
    tempData.flgtDEtot = moment(value).format('YYYY-MM-DD HH:mm:ss')
  }
  // 实际起飞时间
  flgtDAtotChange (value) {
    console.log('flgtDAtot--- change', moment(value).format('YYYY-MM-DD HH:mm:ss'))
    tempData.flgtDAtot = moment(value).format('YYYY-MM-DD HH:mm:ss')
  }
  flgtDAtotOk (value) {
    console.log('flgtDAtot--- change', moment(value).format('YYYY-MM-DD HH:mm:ss'))
    tempData.flgtDAtot = moment(value).format('YYYY-MM-DD HH:mm:ss')
  }
  // 机位号
  flgtPlaceCodeChange (e) {
    console.log('flgtPlacecode---', e.target.value)
    tempData.flgtPlacecode = e.target.value
  }
  // 是否本场
  flgtGameChange (value) {
    console.log(`flgtGame--- ${value}`)
    tempData.flgtGame = value
  }
  // 是否货机
  flgtIfsrChange (value) {
    console.log(`flgtIfsr--- ${value}`)
    tempData.flgtIfsr = value
  }
  onOk () {
    console.log(tempData)
    this.props.addTask(tempData)
    this.props.handleCancel()
  }

  render () {
    return (
      <div className="add-task-wrapper">
        <Modal
          visible={this.props.visible}
          onCancel={this.props.handleCancel}
          onOk={this.onOk}
          cancelText={'取消'}
          okText={'保存'}
          title={'新建航班'}
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
                      format={dateFormat}
                      placeholder='选择日期'
                      defaultValue={moment(time, dateFormat)}
                      onChange={this.flgtFlopChange}
                    />
                  </div>
                </div>
                <div className='new-flight-item-inner'>
                  <span>国内/国际航班标志</span>
                  <Select className="add-task-select" defaultValue={tempData.flgtFlti} onChange={this.flgtFltiChange} style={{ width: '180px' }}>
                    <Option className="add-task-select-item" value='D'>国内</Option>
                    <Option className="add-task-select-item" value='I'>国际</Option>
                    <Option className="add-task-select-item" value='R'>地区</Option>
                    <Option className="add-task-select-item" value='M'>混合</Option>
                    <Option className="add-task-select-item" value='U'>未知</Option>
                  </Select>
                </div>
                <div className='new-flight-item-inner'>
                  <span>始发地机场IATA代码</span>
                  <Input placeholder='TSN' onChange={this.flgtOrg3cChange} style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>目的地名称</span>
                  <Input placeholder='广州' onChange={this.flgtDesnmChange} style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>预计起飞时间</span>
                  <div>
                    <DatePicker
                      showTime
                      format='YYYY-MM-DD HH:mm:ss'
                      placeholder='请选择时间'
                      style={{ width: '180px' }}
                      onChange={this.flgtDEtotChange}
                      onOk={this.flgtDEtotOk}
                    />
                  </div>
                </div>
                <div className='new-flight-item-inner'>
                  <span>是否本场</span>
                  <Select className="add-task-select" defaultValue={tempData.flgtGame} onChange={this.flgtGameChange} style={{ width: '180px' }}>
                    <Option className="add-task-select-item" value='Y'>本场</Option>
                    <Option className="add-task-select-item" value='N'>空</Option>
                  </Select>
                </div>
              </div>
              <div className='new-flight-item'>
                <div className='new-flight-item-inner'>
                  <strong className='mark-star'>*</strong>
                  <span>航班号</span>
                  <Input placeholder='TSN-CAN' onChange={this.flgtFlnoChange} style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>飞机注册号</span>
                  <Input placeholder='B7890' defaultValue={tempData.flgtRegn} onChange={this.flgtRegnChange} style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>始发地名称</span>
                  <Input placeholder='天津' onChange={this.flgtOrgnmChange} style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>预计到达时间</span>
                  <div>
                    <DatePicker
                      showTime
                      format='YYYY-MM-DD HH:mm:ss'
                      placeholder='请选择时间'
                      style={{ width: '180px' }}
                      onChange={this.flgtAEtotChange}
                      onOk={this.flgtAEtotOk}
                    />
                  </div>
                </div>
                <div className='new-flight-item-inner'>
                  <span>实际起飞时间</span>
                  <div>
                    <DatePicker
                      showTime
                      format='YYYY-MM-DD HH:mm:ss'
                      placeholder='请选择时间'
                      style={{ width: '180px' }}
                      onChange={this.flgtDAtotChange}
                      onOk={this.flgtDAtotOk}
                    />
                  </div>
                </div>
                <div className='new-flight-item-inner'>
                  <span>是否货机</span>
                  <Select className="add-task-select" defaultValue={tempData.flgtIfsr} onChange={this.flgtIfsrChange} style={{ width: '180px' }}>
                    <Option className="add-task-select-item" value='Y'>是</Option>
                    <Option className="add-task-select-item" value='N'>否</Option>
                  </Select>
                </div>
              </div>
              <div className='new-flight-item'>
                <div className='new-flight-item-inner'>
                  <span>进离港</span>
                  <Select className="add-task-select" defaultValue={tempData.flgtAdid} onChange={this.flgtAdidChange} style={{ width: '180px' }}>
                    <Option className="add-task-select-item" value='A'>进港</Option>
                    <Option className="add-task-select-item" value='D'>出港</Option>
                  </Select>
                </div>
                <div className='new-flight-item-inner'>
                  <span>航空公司名称</span>
                  <Input placeholder='国航' defaultValue={tempData.flgtAlcname} onChange={this.flgtAlcNameChange} style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <strong className='mark-star'>*</strong>
                  <span>目的地机场IATA代码</span>
                  <Input placeholder='CAN' onChange={this.flgtDes3cChange} style={{ width: '180px' }} />
                </div>
                <div className='new-flight-item-inner'>
                  <span>实际到达时间</span>
                  <div>
                    <DatePicker
                      showTime
                      format='YYYY-MM-DD HH:mm:ss'
                      placeholder='请选择时间'
                      style={{ width: '180px' }}
                      onChange={this.flgtAAtotChange}
                      onOk={this.flgtAAtotOk}
                    />
                  </div>
                </div>
                <div className='new-flight-item-inner'>
                  <span>机位号</span>
                  <Input placeholder='201' onChange={this.flgtPlaceCodeChange} style={{ width: '180px' }} />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

// export const AddTaskModal = ({ visible, onOk, handleCancel }) => (
//   <div>
//     <Modal
//       visible={visible}
//       onCancel={handleCancel}
//       onOk={onOk}
//       cancelText={'取消'}
//       okText={'保存'}
//       title={'新建航班'}
//       className='task-modal'
//     >
//       <div className='new-flight'>
//         <div className='new-flight-con'>
//           <div className='new-flight-item'>
//             <div className='new-flight-item-inner'>
//               <span>航班日</span>
//               <Input
//                 placeholder='Basic usage'
//                 style={{ width: '152px' }}
//                 onChange={this.handelChange}
//                 defaultValue={this.state.inpValu} />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>国内/国际航班标志</span>
//               <select className='select-item' name='国内' id=''>
//                 <option className='select-item-con' value='国内'>国内</option>
//                 <option className='select-item-con' value='国内'>国际</option>
//                 <option className='select-item-con' value='国内'>地区</option>
//                 <option className='select-item-con' value='国内'>混合</option>
//                 <option className='select-item-con' value='国内'>未知</option>
//               </select>
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>飞机注册号</span>
//               <input type='text' placeholder='B7890' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>航班状态</span>
//               <select className='select-item' name='正常' id=''>
//                 <option className='select-item-con' value='国内'>正常</option>
//                 <option className='select-item-con' value='国内'>取消</option>
//                 <option className='select-item-con' value='国内'>延误</option>
//                 <option className='select-item-con' value='国内'>返航</option>
//                 <option className='select-item-con' value='国内'>备降</option>
//                 <option className='select-item-con' value='国内'>滑回</option>
//               </select>
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>始发地名称</span>
//               <input type='text' placeholder='天津' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>计划进港/出港</span>
//               <div>
//                 <DatePicker
//                   showTime
//                   format='YYYY-MM-DD HH:mm:ss'
//                   placeholder='Select Time'
//                   onChange={onChange}
//                   onOk={onOk}
//                 />
//               </div>
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>延误原因</span>
//               <input type='text' placeholder='' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>要客类型</span>
//               <select className='select-item' name='未知' id=''>
//                 <option className='select-item-con' value='国内'>未知</option>
//                 <option className='select-item-con' value='国内'>未知</option>
//               </select>
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>航线英文</span>
//               <input type='text' placeholder='TSN-CAN' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>起飞油量</span>
//               <input type='text' placeholder='' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>机组到位时间</span>
//               <div>
//                 <DatePicker
//                   showTime
//                   format='YYYY-MM-DD HH:mm:ss'
//                   placeholder='Select Time'
//                   onChange={onChange}
//                   onOk={onOk}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className='new-flight-item'>
//             <div className='new-flight-item-inner'>
//               <strong className='mark-star'>*</strong>
//               <span>航班号</span>
//               <input type='text' placeholder='CA1317' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>航班飞行性质</span>
//               <input type='text' placeholder='W/Z' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>机型名称</span>
//               <input type='text' placeholder='B738' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>机型ICAO代码</span>
//               <input type='text' placeholder='' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <strong className='mark-star'>*</strong>
//               <span>目的地机场IATA代码</span>
//               <input type='text' placeholder='CAN' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <strong className='mark-star'>*</strong>
//               <span>预计进港/出港</span>
//               <div>
//                 <DatePicker
//                   showTime
//                   format='YYYY-MM-DD HH:mm:ss'
//                   placeholder='Select Time'
//                   onChange={onChange}
//                   onOk={onOk}
//                 />
//               </div>
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>机位号</span>
//               <input type='text' placeholder='201' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>行李转盘1</span>
//               <input type='text' placeholder='' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>航线中文</span>
//               <input type='text' placeholder='天津-广州' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>是否本场</span>
//               <select className='select-item' name='本场' id=''>
//                 <option className='select-item-con' value='国内'>本场</option>
//                 <option className='select-item-con' value='国内'>空</option>
//               </select>
//             </div>
//           </div>
//           <div className='new-flight-item'>
//             <div className='new-flight-item-inner'>
//               <span>进离港</span>
//               <select className='select-item' name='进港' id=''>
//                 <option className='select-item-con' value='国内'>进港</option>
//                 <option className='select-item-con' value='国内'>出港</option>
//               </select>
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>航班性质</span>
//               <input type='text' placeholder='正班' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>航空公司名称</span>
//               <input type='text' placeholder='国航' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>始发地机场IATA代码</span>
//               <input type='text' placeholder='TSN' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>目的地名称</span>
//               <input type='text' placeholder='广州' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>实际进港/出港</span>
//               <div>
//                 <DatePicker
//                   showTime
//                   format='YYYY-MM-DD HH:mm:ss'
//                   placeholder='Select Time'
//                   onChange={onChange}
//                   onOk={onOk}
//                 />
//               </div>
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>登机口名称</span>
//               <input type='text' placeholder='201' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>行李转盘2</span>
//               <input type='text' placeholder='' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>是否加油</span>
//               <input type='text' placeholder='是' />
//             </div>
//             <div className='new-flight-item-inner'>
//               <span>离境</span>
//               <input type='text' placeholder='' />
//             </div>
//
//           </div>
//         </div>
//       </div>
//     </Modal>
//   </div>
// )

AddTaskModal.PropTypes = {
  visible: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}

export default AddTaskModal
