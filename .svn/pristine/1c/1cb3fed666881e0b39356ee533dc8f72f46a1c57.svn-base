import React from 'react'
import PropTypes from 'prop-types'
import './AllFlightTables.scss'
import '../../../Dispatcher/Dispatcher.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { wheelScrollOnView } from '../../../../action/UIActions'
import FlightImg from '../../../../static/img/header/航班@2x.png'
import { format } from '../../../../utils/dateTime'
import {
  showFlightFilterBox,
  hideFlightFilterBox,
  onDragFlightStart,
} from '../../../../reducers/UIReducer/actions'
import { List } from 'antd'
import {
  setFlightRightHide,
  setFlightRightShow
} from '../../../../reducers/flightReducer/action'
import EditTaskModal from '../../../EditTaskModal/EditTaskModal'
import { editFlightDetail } from '../../../../reducers/EditTaskModalReducer/action'
const rightBox = ['修改航班', '航班详情']

const mapStatetoProps = (state) => {
  return {
    flightFilterDisplay:state.UIReducer.get('flightFilterDisplay'),
    flightRightShow: state.flightReducer.get('flightRightShowObj').toJS(),
    flightDetailItem: state.editTaskModalReducer.get('editFlightDetail').toJS()
  }
}
const mapDispatcherToProps = (dispatch) => {
  return bindActionCreators({
    onDragFlightStart,
    showFlightFilterBox,
    hideFlightFilterBox,
    setFlightRightShow: setFlightRightShow,
    setFlightRightHide: setFlightRightHide,
    editFlightDetail: editFlightDetail,
  }, dispatch)
}
@connect(mapStatetoProps, mapDispatcherToProps)
class AllFlightTable extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      headfixed:false,
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

  searchHidden () {
    this.setState({
      isShowSearchIpt:false,
      hiddenSearchIcon:true
    })
  }

  scrollBarEvent (e) {
    let clientHeight = this.refs.getScrollHeight.clientHeight // 可视区域高度
    let scrollTop = this.refs.getScrollHeight.scrollTop  // 滚动条滚动高度
    let scrollHeight = this.refs.getScrollHeight.scrollHeight // 滚动内容高度
    if (scrollHeight > 0) {
      this.setState({
        headfixed:true,
        scrollTop:scrollTop
      })
    }
  }

  // 右击弹框
  prohibitedRight (e) {
    // 停止事件冒泡
    let stopPropagation = (event) => {
      let e = event || window.event
      if (e.stopPropagation) { e.stopPropagation() }
      e.cancelBubble = true
    }
    // 停止默认事件
    let preventDefault = (event) => {
      let e = event || window.event
      if (e.preventDefault) { e.preventDefault() }
      e.returnValue = false
    }

    stopPropagation(e)
    preventDefault(e)
    e.persist()
    this.props.setFlightRightShow({
      rightDisplay: '',
      rightTop: e.pageY + 'px',
      rightLeft: e.pageX + 'px',
      selectId: e.target.getAttribute('flgtid')
    })
    document.onclick = () => {
      this.props.setFlightRightHide()
    }
  }
  // 右击操作框
  flightOperation (e) {
    e.stopPropagation()
    if (e.target.getAttribute('index') === '0') {
      this.props.editFlightDetail(this.props.flightRightShow.selectId)
    } else if (e.target.getAttribute('index') === '1') {
      console.log('航班详情', e.target.getAttribute('index'))
    }
  }

  render () {
    return (
      <div className={'flightList_box'}>
        <div className='list-nav'>
          <div className='flight-nav-left'>
            <div className='title-img'>
              <img src={FlightImg} alt='' />
            </div>
            <h3>航班任务</h3>
          </div>
          {/* <div className="search-nav-ipt"> */}
          {/* {this.state.isShowSearchIpt ?  <div className={`search-box ${this.state.isShowSearchIpt ? 'search-box-hidden':''}`}> */}
          {/* <input onBlur={()=>this.searchHidden()} type="text" placeholder=""/> */}
          {/* <div className="search-icon"> */}
          {/* /!*<img src={searchImg} alt=""/>*!/ */}
          {/* 搜索 */}
          {/* </div> */}
          {/* </div> : ''} */}
          {/* <div className="search-btn"> */}
          {/* {this.state.hiddenSearchIcon ? <img src={searchImg} alt="" onClick={()=>this.showSelectIpt()}/> :'' } */}
          {/* </div> */}
          {/* </div> */}
          <div
            className='flight-filter'
            onClick={() => {
              if (this.props.flightFilterDisplay) {
                this.props.hideFlightFilterBox()
              } else {
                this.props.showFlightFilterBox()
              }
            }}>筛选</div>
          <div className='search-bar-container'>
            <div className='search-box'>
              <input type='text' />
              <span />
            </div>
          </div>
        </div>
        <div onWheel={() => {
          this.props.wheelScrollOnView('AllFlightTable')
        }} className={`list-all ${this.props.ScrollVisible ? '' : 'hidden-scroll'} scroll-bar-text`} ref='getScrollHeight' onScroll={(e) => this.scrollBarEvent(e)}>
          <div className={`list-header ${this.state.headfixed ? 'list-head-fixed' : ''}`} style={{ top:this.state.scrollTop }}>
            {this.props.title.map((item, index) => {
              for (let dom in item) {
                return <div className='list-header-item' key={`FlightList_Item_${index}`}>{item[dom]}</div>
              }
            })}
          </div>
          <div className={`list-content ${this.state.headfixed ? 'list-content-margintop' : ''}`} ref='getScrollTop'>

            {this.props.AllFlightData.map((items, indexs) => {
              return <div className={'list-content-item'}
                          flgtid={items.flgtId}
                key={`list-content-item-${indexs}`}
                onContextMenu={(event, id) => {
                  this.prohibitedRight(event, id)
                }}
                onDragStart={() => this.props.onDragFlightStart(items.taskId)}
                draggable='true'
                onDragOver={function (event) {
                  event.preventDefault()
                }}
                  >
                {/* {Object.values(items).map((value,keys) => {
                  return <div key={keys}>{value}</div>
                })} */}
                {
                    this.props.title.map((item, index) => {
                      for (let domText in item) {
                        return (
                          <div key={domText} flgtid={items.flgtId}>
                            {
                              (() => {
                                if (domText === 'flgtFlop') {
                                  return new Date(items[domText]).toLocaleDateString().replace(/\//g, '-')
                                } else if (domText === 'flgtAStot') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'flgtAEtot') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'flgtAAtot') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'flgtDStot') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'flgtDEtot') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'flgtDAtot') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'flgtChocksIn') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'flgtChocksOut') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'taskAsgTime') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'taskAccTime') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'taskChagStaTime') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'taskChagEndTime') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'taskDoneTime') {
                                  return format(items[domText], 'HH:mm')
                                } else if (domText === 'taskRecCreTime') {
                                  return format(items[domText], 'HH:mm')
                                } else {
                                  return items[domText]
                                }
                              })()
                            }
                          </div>
                        )
                      }
                    })
                }
              </div>
            })}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            display: this.props.flightRightShow.rightDisplay,
            top:this.props.flightRightShow.rightTop,
            left: this.props.flightRightShow.rightLeft
          }}>
          <List
            size='small'
            bordered
            dataSource={rightBox}
            renderItem={
              (item, index) => (
                <List.Item
                  style={{ backgroundColor: '#000', cursor: 'pointer' }}
                  onClick={(event) => this.flightOperation(event)}>
                  <div index={index}>{item}</div>
                </List.Item>)}
          />
        </div>
        <EditTaskModal detail={this.props.flightDetailItem} />
      </div>
    )
  }
}

AllFlightTable.PropTypes = {
  title: PropTypes.array.isRequired,
  AllFlightData: PropTypes.array.isRequired,
}

export default connect(() => {
  return {}
}, (dispatch) => {
  return bindActionCreators({
    wheelScrollOnView:wheelScrollOnView
  }, dispatch)
})(connect((state) => {
  const visible = new Set(state.GlobalReducer.scroller).has('AllFlightTable')
  return {
    // FlightListArr:state.app.taskList.filter((item)=>{
    //   return item.flgtDGame=='本场航班'
    // }),
    ScrollVisible:visible
  }
})(AllFlightTable))

// export default AllFlightTable
