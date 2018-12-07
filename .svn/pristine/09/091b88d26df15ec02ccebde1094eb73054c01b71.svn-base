import { connect } from 'react-redux'
import { increment, doubleAsync } from '../../reducers/Counter/actions'
import React from 'react'
import webSocet from 'reconnecting-websocket'
import AllFlightTables from './components/AllFlightTables/AllFlightTables'
import TaskTable from './components/TaskTables/TaskTables'
import FlightTables from './components/FlightTables/FlightTables'
import { notification } from 'antd'
import Message from './components/Message/Message'
import './Dispatcher.scss'
import { bindActionCreators } from 'redux'
import PersonnelTable from './components/Personnel/PersonnelTables'
import Filter from './components/Filter/index'
import { getflightlist, addFlight } from '../../reducers/flightReducer/action'
import { getStaffList } from '../../reducers/StaffReducer/action'
import { delTast, getTaskList, setRightShow } from '../../reducers/TaskReducer/action'
import { getFlightTitle } from '../../reducers/FlightTitleReducer/action'
import { hideFlightFilterBox,
          onDragFligtEnd,
          onTaskDispatcher,
          showFlightFilterBox, onDispatcherTaskCancel, ondispatcherTaskTypeChange,
        } from '../../reducers/UIReducer/actions'
import {
  changeWebsocketError, changeWebsocketSuccess, websocketMoudel
} from '../../action/WebsocketActions'
import { Modal, Select, List, Drawer } from 'antd'
import { getThisFlightList } from '../../reducers/ThisFlightReducer/action'
import SocketComp from '../../components/SocketComp'
const { Option } = Select
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getflightlist:getflightlist,
    getThisFlightList: getThisFlightList, // 左上本场航班列表
    getStaffList: getStaffList, // 右上人员列表
    getTaskList: getTaskList,
    getFlightTitle: getFlightTitle,
    addFlight:addFlight,
    delTast: delTast,
    changeWebsocketError,
    changeWebsocketSuccess,
    websocketMoudel,
    hideFlightFilterBox,
    showFlightFilterBox,
    onDragFligtEnd,
    onDispatcherTaskCancel,
    ondispatcherTaskTypeChange,
    onTaskDispatcher
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    flightList:state.flightReducer.get('flightList').toJS(),
    thisFlightList: state.thisFlightReducer.get('thisFlightList').toJS(), // 左上本场航班列表
    staffList:state.staffReducer.get('staffList').toJS(), // 右上人员列表
    taskList:state.taskListReducer.get('taskList').toJS(),
    rightShow:state.taskListReducer.get('rightShowObj').toJS(),
    flightTitle:state.flightTitleReducer.get('flightTitle').toJS(),
    flightFilterDisplay: state.UIReducer.get('flightFilterDisplay'),
    DragModalShow :state.UIReducer.get('DragModal'),
    ReachWebsocketMaxReconnectAttempts:state.UIReducer.get('WebSocketModel'),
    webSocketModelShow: state.UIReducer.get('webSocketModelShow')
  }
}
const Messagelist = [
  {

  }
]

const noFormText = ['取消任务', '修改任务']

@connect(mapStateToProps, mapDispatchToProps)
class Dispatcher extends React.PureComponent {
  componentDidMount () {
    this.props.getFlightTitle({ 'settAirportCode': '111', 'settStaffId': 'admin' })
    this.props.getflightlist()
    this.props.getThisFlightList() // 初始化本场航班列表
    // sessionStorage获取
    this.props.getStaffList('admin', '111', '111')
    this.props.getTaskList()
  }

  taskOperation (e) {
    e.stopPropagation()
    if (e.target.getAttribute('index')) {
      this.props.delTast({ delTaskId:this.props.rightShow.selectTaskId })
    } else {
      console.log('我是修改', e.target.getAttribute('index'))
    }
  }

  render () {
    return (
      <div className={'dispatch_body'}>
        <div className='dispatcher_left'>
          <div className='dispatcher-flightList'>
            <FlightTables title={['航班号', '预达', '机位', '机型']} FlightData={this.props.thisFlightList} />
          </div>
          <div className='dispatcher-taskList'>
            <TaskTable title={['机位', '航班号', '执行人', '状态']} taskData={this.props.taskList} />
          </div>
        </div>
        <div className='dispatcher_content'>
          <div className={`dispatcher-selectList dispatcher-selectList_hide`}>
            {/* <Filter /> */}
            <Drawer
              title='筛选'
              placement={'left'}
              closable={false}
              onClose={() => {
                if (this.props.flightFilterDisplay) {
                  this.props.hideFlightFilterBox()
                } else {
                  this.props.showFlightFilterBox()
                }
              }}
              visible={this.props.flightFilterDisplay}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
          <div className='dispatcher-allFlightList'>
            <AllFlightTables title={this.props.flightTitle} AllFlightData={this.props.flightList} />
          </div>
        </div>
        <div className='dispatcher_right'>
          <div className='dispatcher-userList'>
            <PersonnelTable onDragFligtEnd={this.props.onDragFligtEnd} title={['在线', '姓名', '航班号', '车辆', '状态']} listData={this.props.staffList} />
          </div>
          <div className='dispatcher-msgList'>
            <Message messageNames={['航班任务', '信息回执']} messageData={Messagelist} />
          </div>
        </div>
        <Modal
          title='下发任务'
          visible={this.props.DragModalShow}
          onOk={() => {
            this.props.onTaskDispatcher()
          }}
          onCancel={() => { this.props.onDispatcherTaskCancel() }}
        >
          <Select defaultValue='0' style={{ width: 120 }} onChange={(value) => { this.props.ondispatcherTaskTypeChange(value) }} className='model-select' >
            <Option value='0' clssName='select-option' style={{ background:'#fff', color:'#2a2b3c' }} >加油</Option>
            <Option value='1' clssName='select-option' style={{ background:'#fff', color:'#2a2b3c' }}>抽油</Option>
          </Select>
        </Modal>
        <div style={{ position: 'absolute', display: this.props.rightShow.rightDisplay, top:this.props.rightShow.rightTop, left: this.props.rightShow.rightLeft }}>
          <List
            size='small'
            bordered
            dataSource={noFormText}
            renderItem={(item, index) => (<List.Item style={{ backgroundColor: '#000', cursor: 'pointer' }} onClick={(event) => this.taskOperation(event)}><div index={index}>{item}</div></List.Item>)}
          />
        </div>
        {this.props.ReachWebsocketMaxReconnectAttempts
          ? <Modal
            title='操作提示：'
            visible={this.props.webSocketModelShow}
            onOk={() => {
              this.props.changeWebsocketSuccess()
            }}
            onCancel={() => {
              this.props.websocketMoudel('e')
            }}
           />
          : <SocketComp />
        }
      </div>
    )
  }
}

export default (Dispatcher)
