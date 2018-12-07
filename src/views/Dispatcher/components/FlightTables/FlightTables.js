import React from 'react'
import PropTypes from 'prop-types'
import './FlightTables.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { wheelScrollOnView } from '../../../../action/UIActions'
import {format} from "../../../../utils/dateTime"
import { onDragFlightStart } from '../../../../reducers/UIReducer/actions'
const mapDispatcherToProps = (dispatch) => {
  return bindActionCreators({
    onDragFlightStart
  }, dispatch)
}
const mapStatetoProps = (state) => {
  return {
    flightFilterDisplay:state.UIReducer.get('flightFilterDisplay')
  }
}
@connect(mapStatetoProps, mapDispatcherToProps)
class FlightTable extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      isShowSearchIpt:false,
      hiddenSearchIcon:true,
      headsfixed:false,
      scrollTop:0
    }
  }
  componentDidMount () {
  }
  showSelectIpt () {
    this.setState({
      isShowSearchIpt:true,
      hiddenSearchIcon:false
    })
  }

  scrollBarEvent (e) {
    let clientHeight = this.refs.getScrollFightH.clientHeight // 可视区域高度
    let scrollTop = this.refs.getScrollFightH.scrollTop  // 滚动条滚动高度
    let scrollHeight = this.refs.getScrollFightH.scrollHeight // 滚动内容高度
    if (scrollHeight > 0) {
      this.setState({
        headsfixed:true,
        scrollTop:scrollTop,
        isShowSearchIpt:false,
        hiddenSearchIcon:true
      })
    }
  }

  // showSearch(){
  //   console.log(this.refs.focusIpt.focus);
  //   this.setState({
  //     isShowSearchIpt:true,
  //     hiddenSearchIcon:false
  //   })
  // }
  //
  // searchHidden(){
  //   this.setState({
  //     isShowSearchIpt:false,
  //     hiddenSearchIcon:true
  //   })
  // }
  render () {
    return (
      <div className={'flightList_box'}>
        <div className='list-nav'>
          <h3>航班</h3>
          {/* <div className="search-nav-ipt"> */}
          {/* {this.state.isShowSearchIpt ?  <div className={`search-box ${this.state.isShowSearchIpt ?' search-box-hidden':''}`}> */}
          {/* <input ref="focusIpt" onClick={()=>this.showSearch()} onBlur={()=>this.searchHidden()} type="text" placeholder=""/> */}
          {/* <div className="search-icon"> */}
          {/* /!*<img src={searchImg} alt=""/>*!/ */}
          {/* 搜索 */}
          {/* </div> */}
          {/* </div> : ''} */}
          {/* <div className="search-btn"> */}
          {/* {this.state.hiddenSearchIcon ? <img src={searchImg} alt="" onClick={()=>this.showSelectIpt()}/> :'' } */}
          {/* </div> */}
          {/* </div> */}
          <div className='search-bar-container'>
            <div className='search-box'>
              <input type='text' />
              <span />
            </div>
          </div>
        </div>
        <div onWheel={() => {
          this.props.wheelScrollOnView('FlightTable')
        }} className={`list-all ${this.props.ScrollVisible ? '' : 'hidden-scroll'} scroll-bar-text`} ref='getScrollFightH' onScroll={(e) => this.scrollBarEvent(e)} >
          <div className={`list-header ${this.state.headsfixed ? 'list-head-small-fixed' : ''}`} style={{ top:this.state.scrollTop }}>
            {
              this.props.title.map((item, index) => {
                return <div className={`list-header-item-small`} key={index}>{item}</div>
              })
            }
          </div>
          <div className='list-content' >
            {
              this.props.FlightData.map((taskItem, taskIndex) => {
                return <div
                  className={'list-content-item-small'}
                  key={taskIndex} onDragStart={() => this.props.onDragFlightStart(taskItem.taskId)}
                  draggable='true'
                  onDragOver={function (event) {
                    event.preventDefault()
                  }}>
                  <div>{taskItem.flgtFlno}</div>
                  <div>{format(taskItem.flgtAEtot,"HH:mm")}</div>
                  <div>{taskItem.flgtPlacecode}</div>
                  <div>{taskItem.flgtAcname}</div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

FlightTable.PropTypes = {
  title: PropTypes.array.isRequired,
  FlightData: PropTypes.array.isRequired,
}

export default connect(() => {
  return {}
}, (dispatch) => {
  return bindActionCreators({
    wheelScrollOnView:wheelScrollOnView
  }, dispatch)
})(connect((state) => {
  const visible = new Set(state.GlobalReducer.scroller).has('FlightTable')
  return {
    // FlightListArr:state.app.taskList.filter((item)=>{
    //   return item.flgtDGame=='本场航班'
    // }),
    ScrollVisible:visible
  }
})(FlightTable))
