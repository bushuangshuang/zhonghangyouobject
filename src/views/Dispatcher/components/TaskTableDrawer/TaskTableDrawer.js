import { Drawer, Button, Radio } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { taskListDrawer } from '../../../../reducers/TaskListDrawerReducer/action'
import './TaskTable.scss'
const RadioGroup = Radio.Group
const mapDispatcherToProps = (dispatch) => {
  return bindActionCreators({
    taskListDrawer: taskListDrawer
  }, dispatch)
}
const mapStatetoProps = (state) => {
  return {
  }
}
@connect(mapStatetoProps, mapDispatcherToProps)
class TaskTableDrawer extends React.PureComponent {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  };

  onClose = () => {
    this.setState({
      visible: false,
    })
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    })
  }

  render () {
    return (
      <div
        className='task-ant-drawer-content'

      >

        <Drawer
          title='任务列表'
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.props.visible}
          mask={false}
          width='980px'
          height='500px'

        >
          <div className='task-drawer-title'>
            <li>任务日期</li>
            <li>航班号</li>
            <li>加油员</li>
            <li>任务</li>
            <li>派发</li>
            <li>接受</li>
            <li>加油开始</li>
            <li>加油完成</li>
            <li>审批</li>
            <li>调度员</li>
            <li>油单</li>
            <li>油车</li>
            <li>状态</li>
          </div>
          <div className='task-drawer-list-item'>
            <li>2018/11/11</li>
            <li>儿12323</li>
            <li>张一</li>
            <li>加油</li>
            <li>08:28</li>
            <li>08:30</li>
            <li>08:35</li>
            <li>09:00</li>
            <li>10:05</li>
            <li>李四</li>
            <li>22r12332425</li>
            <li>加油完成</li>

            <li>状态</li>
          </div>
          <div className='task-drawer-list-item'>
            <li>2018/11/11</li>
            <li>儿12323</li>
            <li>张一</li>
            <li>加油</li>
            <li>08:28</li>
            <li>08:30</li>
            <li>08:35</li>
            <li>09:00</li>
            <li>10:05</li>
            <li>李四</li>
            <li>22r12332425</li>
            <li>加油完成</li>

            <li>状态</li>
          </div>
          <div className='task-drawer-list-item'>
            <li>2018/11/11</li>
            <li>儿12323</li>
            <li>张一</li>
            <li>加油</li>
            <li>08:28</li>
            <li>08:30</li>
            <li>08:35</li>
            <li>09:00</li>
            <li>10:05</li>
            <li>李四</li>
            <li>22r12332425</li>
            <li>加油完成</li>

            <li>状态</li>
          </div> <div className='task-drawer-list-item'>
            <li>2018/11/11</li>
            <li>儿12323</li>
            <li>张一</li>
            <li>加油</li>
            <li>08:28</li>
            <li>08:30</li>
            <li>08:35</li>
            <li>09:00</li>
            <li>10:05</li>
            <li>李四</li>
            <li>22r12332425</li>
            <li>加油完成</li>

            <li>状态</li>
          </div> <div className='task-drawer-list-item'>
            <li>2018/11/11</li>
            <li>儿12323</li>
            <li>张一</li>
            <li>加油</li>
            <li>08:28</li>
            <li>08:30</li>
            <li>08:35</li>
            <li>09:00</li>
            <li>10:05</li>
            <li>李四</li>
            <li>22r12332425</li>
            <li>加油完成</li>

            <li>状态</li>
          </div> <div className='task-drawer-list-item'>
            <li>2018/11/11</li>
            <li>儿12323</li>
            <li>张一</li>
            <li>加油</li>
            <li>08:28</li>
            <li>08:30</li>
            <li>08:35</li>
            <li>09:00</li>
            <li>10:05</li>
            <li>李四</li>
            <li>22r12332425</li>
            <li>加油完成</li>

            <li>状态</li>
          </div>

        </Drawer>
      </div>
    )
  }
}
TaskTableDrawer.PropTypes = {
  visible:PropTypes.bool.isRequired,
  TaskDrawer:PropTypes.func.isRequired
}
export default TaskTableDrawer
