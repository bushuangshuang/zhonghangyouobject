import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import moment from 'moment'

// 引入对应的图片路径
import logoImg from '../../static/img/logo/logo3.png'
import oilImg from '../../static/img/header/油单@2x.png'
import FlightImg from '../../static/img/header/航班@2x.png'
import taskImg from '../../static/img/header/任务@2x.png'
import newImg from '../../static/img/header/新建@2x.png'
import oil2Img from '../../static/img/header/油单@2x.png'
import setImg from '../../static/img/header/设置@2x.png'
import loginoutImg from '../../static/img/header/退出@2x.png'
import AddTaskModal from '../../views/AddTaskModal/AddTaskModal'
import AddOilModal from '../../views/AddOilModal/AddOilModal'
import TaskListDrawer from '../../views/Dispatcher/components/TaskTableDrawer/TaskTableDrawer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hideAddTaskModal, showAddTaskModal } from '../../reducers/AddTaskModalReducer/action'
import { hideAddOilModal, showAddOilModal } from '../../reducers/AddOilModalReducer/action'
import {hideTaskListDrawer,showTaskListDrawer} from '../../reducers/TaskListDrawerReducer/action'
const mapDispatcherToProps = (dispatch) => {
  return bindActionCreators({
    showAddTaskModal: showAddTaskModal,
    hideAddTaskModal: hideAddTaskModal,
    showAddOilModal: showAddOilModal,
    hideAddOilModal: hideAddOilModal,
    hideTaskListDrawer:hideTaskListDrawer,
    showTaskListDrawer:showTaskListDrawer,
  }, dispatch)
}
const mapStatetoProps = (state) => {
  return {
    addTaskModal: state.addTaskModalReducer.get('addTaskModal'),
    addOilModal: state.addOilModalReducer.get('addOilModal'),
    TaskListDrawer: state.TaskListDrawerReducer.get('showTaskListDrawer'),

  }
}
@connect(mapStatetoProps, mapDispatcherToProps)
class PageLayout extends React.PureComponent {
  constructor () {
    super()
    this.state = { visible: false, Oil:false }

  }

  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }
  componentDidMount () {
    console.log(this.props.TaskListDrawer)
  }
  // TaskDrawer(){
  //   console.log(1)
  //    console.log(showTaskListDrawer,'状态');
  //   this.props.showTaskListDrawer( this.props.TaskListDrawer)
  //   console.log("sss")
  // }
  render () {
    // if(true){
    //   return  (<div className='page-layout__viewport'>
    //                  {this.props.children}
    //         </div>)
    // }
    let queryDate = new Date().toLocaleTimeString()
    let now = new Date()
    let year = now.getFullYear() // 获取年份
    let month = now.getMonth() + 1 // 获取月份 月份要+1
    let date = now.getDate() // 获取日期
    let queryTime = moment(new Date()).format('hh:mm')
    return (
      <div className='text-center'>
        <div className='pageLayout-head'>
          <div className='head-logo'>
            <img src={logoImg} alt='' />
          </div>
          <div className='head-nav-bar'>
            <IndexLink to='/' className='nav-item' activeClassName='page-layout__nav-item--active'>
              <div className='title-img'>
                <img src={oilImg} alt='' />
              </div>
              <span>油单信息</span>
            </IndexLink>
            <Link to='/dispatcher' className='nav-item' activeClassName='page-layout__nav-item--active'>
              <div className='title-img'>
                <img src={FlightImg} alt='' />
              </div>
              <span>航班信息</span>
            </Link>
            <div className='nav-item' onClick={this.props.showTaskListDrawer.bind(this,this.props.TaskListDrawer)}>
              <div className='title-img'>
                <img src={taskImg} alt='' />
              </div>
              <span >任务列表</span>
            </div>
            <div className='nav-item' onClick={this.props.showAddTaskModal}>
              <div className='title-img'>
                <img src={newImg} alt='' />
              </div>
              <span>新建任务</span>
            </div>
            <div className='nav-item' onClick={this.props.showAddOilModal}>
              <div className='title-img'>
                <img src={oil2Img} alt='' />
              </div>
              <span>油料参数</span>
            </div>
            <div className='nav-item'>
              <div className='title-img'>
                <img src={setImg} alt='' />
              </div>
              <span>设置</span>
            </div>
            <div className='nav-item'>
              <div className='title-img'>
                <img src={loginoutImg} alt='' />
              </div>
              <span>退出</span>
            </div>
          </div>
          <div className='head-time'>
            <h3 className='head-date-right'>{queryTime}</h3>
            <span className='head-time-right'>{`${year}- ${month}- ${date}`}</span>
          </div>
        </div>
        <div className='page-layout__viewport'>
          {this.props.children}
        </div>
        <AddOilModal visible={this.props.addOilModal} handleCancel={this.props.hideAddOilModal} />
        <AddTaskModal visible={this.props.addTaskModal}  handleCancel={this.props.hideAddTaskModal} />
        <TaskListDrawer visible={this.props.TaskListDrawer}  handleCancel={this.props.hideTaskListDrawer}></TaskListDrawer>
      </div>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
