import React from 'react'
import PropTypes from 'prop-types'
import './personnelTables.scss'
import {onDragFligtEnd} from '../../../../reducers/UIReducer/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {wheelScrollOnView} from '../../../../action/UIActions'
import offline from '../../../../static/img/staff/offline.png'
import online from '../../../../static/img/staff/online.png'
import leisure from '../../../../static/img/staff/leisure.png'
const mapStatetoProps = (state) => {
  return {}
}

const mapDispatcherToProps = (dispatch) => {
  return bindActionCreators({
    onDragFligtEnd
  }, dispatch)
}

@connect(mapStatetoProps, mapDispatcherToProps)
class PersonnelTable extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isShowSearchIpt: false,
      hiddenSearchIcon: true,
      fixation: false,
      scrollTop: 0
    }
  }

  componentDidMount() {

  }

  scrollBarEvent(e) {
    e.preventDefault()
    let clientHeight = this.refs.getScrollPersonH.clientHeight; //可视区域高度
    let scrollTop = this.refs.getScrollPersonH.scrollTop;  //滚动条滚动高度
    let scrollHeight = this.refs.getScrollPersonH.scrollHeight; //滚动内容高度
    if (scrollHeight > 0) {
      this.setState({
        fixation: true,
        scrollTop: scrollTop,
        isShowSearchIpt: false,
        hiddenSearchIcon: true
      })
    }
  }

  render() {
    return (
      <div onWheel={(e) => {
        e.preventDefault()
        this.props.wheelScrollOnView('PersonnelTable')
      }} className={`personnel-box list-all ${this.props.ScrollVisible ? "" : 'hidden-scroll'} scroll-bar-text`}
           ref="getScrollPersonH" onScroll={(e) => this.scrollBarEvent(e)}>
        <div className={`personnel-header ${this.state.fixation ? 'person-head-small-fixed' : ''}`}
             style={{top: this.state.scrollTop}}>
          {
            this.props.title.map((item, index) => {
              return <div key={index} className='personnel-header-item'>{item}</div>
            })
          }
        </div>
        <div className='personnel-content'>
          {
            this.props.listData.map((StaffItem, StaffIndex) => {
              return <div key={StaffIndex} className={'personnel-content-list'} draggable='false' onDragOver={(e) => {
                e.preventDefault()
              }} onDrop={(e) => {
                e.preventDefault()
                console.log("StaffItem.staffId==>", StaffItem.sfvhStaffId)
                this.props.onDragFligtEnd(StaffItem.sfvhStaffId)
                console.log(111);
              }}>
                <div className='personnel-content-list-item'>
                  {
                    (
                      () => {
                        switch (StaffItem.sfvhStaffStatus) {
                          case 0:
                            return <img src={offline}/>
                            break
                          case 1:
                            return <img src={leisure}/>
                            break
                          case 2:
                            return <img src={online}/>
                            break
                        }
                      }
                    )()
                  }
                </div>
                <div className='personnel-content-list-item'>{StaffItem.sfvhStaffId}</div>
                <div className='personnel-content-list-item'>{StaffItem.flgtFlno}</div>
                <div className='personnel-content-list-item'>{StaffItem.vehiNo}</div>
                <div className='personnel-content-list-item'>
                  {
                    (
                      () => {
                        switch (StaffItem.sfvhStaffStatus) {
                          case 0:
                            return '未登录'
                            break
                          case 1:
                            return '空闲'
                            break
                          case 2:
                            return '工作'
                            break
                        }
                      }
                    )()
                  }
                </div>
              </div>
            })
          }
        </div>

      </div>
    )
  }
}

PersonnelTable.PropTypes = {
  title: PropTypes.array.isRequired,
  listData: PropTypes.array.isRequired,
  onDragFligtEnd: PropTypes.func,
}

export default connect(() => {
  return {}
}, (dispatch) => {
  return bindActionCreators({
    wheelScrollOnView: wheelScrollOnView
  }, dispatch)
})(connect((state) => {
  const visible = new Set(state.GlobalReducer.scroller).has('PersonnelTable');
  return {
    // FlightListArr:state.app.taskList.filter((item)=>{
    //   return item.flgtDGame=='本场航班'
    // }),
    ScrollVisible: visible
  }
})(PersonnelTable));
