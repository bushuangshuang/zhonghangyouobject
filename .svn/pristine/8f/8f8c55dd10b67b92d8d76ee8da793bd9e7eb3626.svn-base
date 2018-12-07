import React from 'react'
import PropTypes from 'prop-types'
import './Message.scss'

// import news from '../../../../static/img/news.jpg'
export  const Message=({messageNames,messageData})=>(
  <div className={'Message_box'}>
    <div className={'Message_header'}>
      {messageNames.map((item,index)=>{
        return <div key={index}>{item}</div>
      })}
    </div>
    <div className={'Message_content'}>
      {messageData.map((taskItem,taskIndex)=>{
        return <div key={taskIndex} className={'Message_content_item'}>
          {/*<img src={news} alt=""/>*/}
            {Object.values(taskItem).map((value,keys)=>{
              return <div key={keys} className={'Message_content_item_list'}>{value}</div>
            })}
        </div>
      })}
    </div>
  </div>
)
Message.PropTypes={
  messageNames:PropTypes.array.isRequired,
  messageData:PropTypes.array.isRequired,

}
export default Message
