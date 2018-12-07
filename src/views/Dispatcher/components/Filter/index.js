import React from 'react'
import PropTypes from "prop-types";
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button, Input, Radio, Checkbox, TimePicker, Rate } from 'antd';
import './filter.scss'

import {bindActionCreators} from 'redux'
import{connect} from'react-redux'
const mapStatetoProps=(state)=>{
  return {
    flightList:state.flightReducer.get('flightList').toJS(),
  }
}
const mapDispatcherToProps=(dispatch)=>{
  return bindActionCreators({
  },dispatch)
}
@connect(mapStatetoProps,mapDispatcherToProps)

class Filter extends React.Component{

  //起飞状态
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  //进出类型
  InOutChange(value){
    console.log(`Inout${value}`);
  }

  render(){
    console.log('flightlist....',this.props.flightList);
    return(
      <div className={'filter-box'}>
        <Form className={'filter-box-form'}>
          <Form.Item
            label="进出"
            labelCol={{ span: 5}}
            wrapperCol={{ span: 5}}
          >
            <Select defaultValue="全部" style={{ width: 192 }}
                    onChange={(e)=>this.InOutChange(e)}>
              <Option value="A" className="select-option">进港</Option>
              <Option value="D" className="select-option">出港</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="属性"
            labelCol={{ span:5}}
            wrapperCol={{ span: 5 }}
          >
            <Select defaultValue="lucy" style={{ width: 192 }}>
              <Option value="jack" className="select-option">jack</Option>
              <Option value="lucy" className="select-option">lucy</Option>
              <Option value="disabled"  className="select-option">disabled</Option>
              <Option value="yiminghe" className="select-option">yiminghe</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="航站楼"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 5 }}
          >
            <Select defaultValue="lucy" style={{ width: 192 }}>
              <Option value="jack" className="select-option">jack</Option>
              <Option value="lucy" className="select-option">lucy</Option>
              <Option value="disabled"  className="select-option">disabled</Option>
              <Option value="yiminghe" className="select-option">yiminghe</Option>
            </Select>
          </Form.Item><Form.Item
          label="状态"
          labelCol={{ span: 5 }}
          wrapperCol={{ span:5 }}
        >
          <Select defaultValue="全部" style={{ width: 192 }}
                  onChange={(e)=>this.handleChange(e)}>
            <Option value="N" className="select-option">前方起飞</Option>
            <Option value="Y" className="select-option">本场起飞</Option>
          </Select>
        </Form.Item>
          <Form.Item
            label="进出"
            labelCol={{ span: 5}}
            wrapperCol={{ span: 5 }}
          >
            <Select defaultValue="lucy" style={{ width: 192 }}>
              <Option value="jack" className="select-option">jack</Option>
              <Option value="lucy" className="select-option">lucy</Option>
              <Option value="disabled"  className="select-option">disabled</Option>
              <Option value="yiminghe" className="select-option">yiminghe</Option>
            </Select>
          </Form.Item><Form.Item
          label="属性"
          labelCol={{ span: 5}}
          wrapperCol={{ span: 5 }}
        >
          <Select defaultValue="lucy" style={{ width: 192 }}>
            <Option value="jack" className="select-option">jack</Option>
            <Option value="lucy" className="select-option">lucy</Option>
            <Option value="disabled"  className="select-option">disabled</Option>
            <Option value="yiminghe" className="select-option">yiminghe</Option>
          </Select>
        </Form.Item><Form.Item
          label="航站楼"
          labelCol={{ span:5 }}
          wrapperCol={{ span:5 }}
        >
          <Select defaultValue="lucy" style={{ width: 192 }}>
            <Option value="jack" className="select-option">jack</Option>
            <Option value="lucy" className="select-option">lucy</Option>
            <Option value="disabled"  className="select-option">disabled</Option>
            <Option value="yiminghe" className="select-option">yiminghe</Option>
          </Select>
        </Form.Item>
        </Form >
      </div>
    )
  }
}

Filter.PropTypes = {
  title: PropTypes.array.isRequired,
  AllFlightData: PropTypes.array.isRequired,
}
export  default  Filter
