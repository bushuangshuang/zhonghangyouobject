import React from 'react'
import DuckImage from '../../static/img/Duck.jpg'
import logo from '../../static/img/logo/logo1.png'
import './Home.scss'
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {login,loginSuccess,loginError} from "../../reducers/LoginReducer/action";
const mapDispatcherToProps = (dispatch) => {
  return bindActionCreators({
    login,
    loginSuccess,
    loginError
  }, dispatch)
}
const mapStatetoProps = (state) => {
  return {

  }
}
@connect(mapStatetoProps, mapDispatcherToProps)
class HomeView extends React.PureComponent{

  constructor(){
    super()
  }
  // 点击登录按钮
  login(){

    this.props.login(this.username,this.password)
  }
  render(){
    return(
      <div className='login-box'>
        <div className='login-content'>
          <img src={logo}/>
          <div className='login-content-box'>
            <div className='login-title'>欢迎登录</div>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' ,marginBottom:'30px'}} />}
              placeholder="请输入用户名" onChange={e=>this.username=e.target.value} />
            <Input
              prefix={<Icon  style={{ color: 'rgba(0,0,0,.25)' ,marginBottom:'30px'}} />}
              type="password" placeholder="请输入密码" onChange={e=>this.password=e.target.value} />
            <Button onClick={this.login.bind(this)}>登录</Button>
          </div>
        </div>

      </div>
    )
  }
}



export default {
  component: HomeView
}

