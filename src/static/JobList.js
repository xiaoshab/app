import React, { Component } from 'react';
import JobItem from './JobItem';
import axios from 'axios';
import Load from './Load';

 class JobList extends Component{
   	  constructor(){
   	  	  super();

   	  	  this.state={
   	  	  	list:[],
            len:5,
            show:'block',
            hide:'none'
   	  	  };
          this.handleAdd= this.handleAdd.bind(this);
          this.handleLogin=this.handleLogin.bind(this);
          this.handleDing=this.handleDing.bind(this);
   	  }
   	  componentWillMount(){
        var id=window.location.search.slice(1).slice(0,8);
        if(id=="username"){
          this.setState({
            show:'none',
            hide:'block'
          })
        }
         var len = this.state.len
   	  	var _this = this
   	  	axios.post('/api/list').then(function (res) {
          var data = [];
          for(let i = 0;i<len;i++){
             data.push(res.data.list[i])
          }
   	  		_this.setState({
   	  			list:data,
            len:len+5
   	  		})
		  })
   	  }
   	  render(){
        var _this = this;
          var list = this.state.list.map(function(elem,index) {
          	   return <JobItem job = {elem} key={index} onload={_this.props.onload} />;

          })
   	  	 return (
                <ul className="list"> 
                <p className="custom-info">10秒定制职位
                <span className="go" style={{display:this.state.show}} onClick={this.handleLogin}>去登录</span>
                <span className="go" style={{display:this.state.hide}} onClick={this.handleDing}>编辑职位</span></p> 
                    {list}
                 <Load load={this.handleAdd}/>
                </ul>
   	  	 	)
   	  }
    handleAdd(){
      var len = this.state.len
       var _this = this;
      axios.post('/api/list').then(function (res) {
             var data = [];
          for(let i = 0;i<len;i++){
             data.push(res.data.list[i])
          }
      _this.setState({
       list:data,
       len:len+5
           })
          })
        }
        handleLogin(){
          window.location=`/login`
        }
        handleDing(){
           var id=window.location.search.slice(1)
           window.location=`/ding?${id}`
        }

   }
 export  default JobList