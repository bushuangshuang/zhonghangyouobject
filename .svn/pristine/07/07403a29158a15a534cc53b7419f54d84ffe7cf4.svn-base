import React from 'react'
import PropTypes from 'prop-types'
import "./TaskTables.scss"
import "../../../Dispatcher/Dispatcher.scss"
import { connect } from 'react-redux' ;
import {bindActionCreators} from "redux";
import {wheelScrollOnView} from "../../../../action/UIActions";
import { getTaskList,setRightShow,setRightHide,delTast } from '../../../../reducers/TaskReducer/action'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setRightHide: setRightHide,
    setRightShow: setRightShow
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    taskList:state.taskListReducer.get('taskList').toJS(),
    rightShow:state.taskListReducer.get('rightShowObj').toJS(),
    flightTitle:state.flightTitleReducer.get('flightTitle').toJS()
  }
}

@connect(mapStateToProps,mapDispatchToProps)
class TaskTable extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      headsfixed:false,
      scrollTop:0
    }
  }

  scrollBarEvent(e){
    let clientHeight = this.refs.getScrollTaskH.clientHeight; //可视区域高度
    let scrollTop  = this.refs.getScrollTaskH.scrollTop;  //滚动条滚动高度
    let scrollHeight = this.refs.getScrollTaskH.scrollHeight; //滚动内容高度
    if(scrollHeight > 0){
      this.setState({
        headsfixed:true,
        scrollTop:scrollTop,
        isShowSearchIpt:false,
        hiddenSearchIcon:true
      })
    }
  }
  prohibitedRight(e) {
    //停止事件冒泡
    let stopPropagation = (event) => {
      var e = event || window.event;
      if (e.stopPropagation)
        e.stopPropagation();
      e.cancelBubble = true;
    }
    //停止默认事件
    let preventDefault = (event) => {
      var e = event || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;
    }

    stopPropagation(e)
    preventDefault(e)
    e.persist()
    this.props.setRightShow({
      rightDisplay: "",
      rightTop: e.pageY + "px",
      rightLeft: e.pageX + "px",
      selectTaskId: e.target.getAttribute("taskid")
    })
    let _this = this
    document.onclick = () => {
      this.props.setRightHide()
    }
  }
  componentDidMount () {
  }
  render () {
    return (
      <div className={'flightList_box'}>
        <div className="list-nav">
          <h3>任务</h3>
          <i></i>
        </div>
        <div onWheel={()=>{
          this.props.wheelScrollOnView('TaskTable')
        }} className={`list-all ${this.props.ScrollVisible?"":'hidden-scroll'} scroll-bar-text`} ref="getScrollTaskH" onScroll={(e)=>{}} >
          <div className={`list-header ${this.state.headsfixed?'list-head-small-fixed':''}`} style={{top:this.state.scrollTop}}>
            {this.props.title.map((item,index)=>{
              return <div className="list-header-item-small" key={index}>{item}</div>
            })}
          </div>
          <div className={`list-content ${this.state.headsfixed?"list-content-margintop":''}`}>
            {this.props.taskData.map((taskItem,taskIndex)=>{
              /*return  <div className={'list-content-item-small'} key={taskIndex}>
                {Object.values(taskItem).map((value,keys)=>{
                  return <div key={keys}>{value}</div>
                })}
              </div>*/
              return (
                <div ref={taskIndex} className={'list-content-item-small'} key={taskItem.taskId} style={{display: "flex"}}
                     onContextMenu={(event)=>{
                       this.prohibitedRight(event)
                     }}>
                  <div taskid={taskItem.taskId}>111</div>
                  <div taskid={taskItem.taskId}>{taskItem.taskFlightNo}</div>
                  <div taskid={taskItem.taskId}>{taskItem.taskOpeStaffId}</div>
                  <div taskid={taskItem.taskId}>
                    {/*{taskItem.taskStatus}*/}
                    {
                      (()=> {
                        switch (taskItem.taskStatus) {
                          case 0:
                            return "未下发"
                            break;
                          case 1:
                            return "待接受"
                            break;
                          case 2:
                            return "申请待批"
                            break;
                          case 3:
                            return "已接受"
                            break;
                          case 4:
                            return "到位"
                            break;
                          case 5:
                            return "加油完成"
                            break;
                          case 6:
                            return "油单待审核"
                            break;
                          case 7:
                            return "任务完成"
                            break;
                          case 8:
                            return "拒绝"
                            break;
                          default:
                            return ""
                            break;
                        }
                      })()
                    }
                    </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

TaskTable.PropTypes = {
  title: PropTypes.array.isRequired,
  taskData: PropTypes.array.isRequired,
}

export default connect(()=>{
  return {}
},(dispatch)=>{
  return  bindActionCreators({
    wheelScrollOnView:wheelScrollOnView
  },dispatch)
})(connect((state)=>{
  const visible =new Set(state.GlobalReducer.scroller).has('TaskTable');
  return {
    // FlightListArr:state.app.taskList.filter((item)=>{
    //   return item.flgtDGame=='本场航班'
    // }),
    ScrollVisible:visible
  }
})(TaskTable)) ;

// export default TaskTable
