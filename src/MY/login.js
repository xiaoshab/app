import React, { Component } from 'react';
import axios from 'axios';
import '../css/login.css'
class Login extends Component{
	constructor(){
		super();
		this.state={
			userId:"",
			pwd:""
		};
		this.submit = this.submit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	render(){
		return (

           <div className="container">
           <h2>拉勾登录 </h2> 
           <span onClick={this.handleClick} className='spans'>注册</span>
			  <div className="form-group">
			    <input type="text" value={this.state.userId} 
								    onChange={(e)=>{this.handleUserId(e)}} 
								    className="form-control" id="exampleInputEmail1" 
								     placeholder="请输入已验证的手机号或邮箱" />
			  </div>
			  <div className="form-group">
			    <input type="password" value={this.state.pwd} 
									    onChange={(e)=>{this.handlePwd(e)}} 
									    className="form-control" id="exampleInputPassword1" 
									    placeholder="请输入密码" />
			  </div>
			  <button onClick={this.submit} className="btn-primary">登录</button>

           </div>

			)
 
	}
	handleUserId(e){
       this.setState({
       	  userId:e.target.value
       })
	}
	handlePwd(e){
        this.setState({
       	  pwd:e.target.value
       })
	}
	handleClick(){
		this.props.history.replace('/regiter')
	}
	submit(e){
		var _this = this;
       var {userId,pwd} = this.state;
       
       if (!userId || !pwd) {
       	   alert("不能为空！");
       	   return
       } 
       axios.post('/api/login', {
		    userId,
		    pwd
		  })
		  .then(function (res) {
		     if(!res.code){
		     	alert('登录成功')
		     	_this.props.history.replace('/app/list?username='+userId)
		     }
		  });
		
	}
}


export default Login