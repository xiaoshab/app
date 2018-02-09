import React, { Component } from 'react';
import axios from 'axios';
import City from './City';
import JobItem from './JobItem';
import Load from './Load';
import SeachList from './SeachList';
import '../css/seach.css';
class Seach extends Component{
	constructor(){
		super();
		this.state={
			city:[],
			list:[],
			seach:[],
			value:'',
			len:5,
			dis:"none",
			text:'web',
			hide:'none'
		}
		this.handleCity = this.handleCity.bind(this);
		this.handleCh = this.handleCh.bind(this);
		this.handleSeach = this.handleSeach.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleValue=this.handleValue.bind(this);
		this.history=this.history.bind(this);
		this.handleDelete = this.handleDelete.bind(this)
	}
	render(){
		var _this = this;
		var city = this.state.city.map(function(ele,idx){
			return <City key={idx} city = {ele}  onload={_this.handleCh}/>
		})
		var list = this.state.list.map(function(ele,idx){
			return <JobItem job ={ele} key={idx} />

		})
		var seach = this.state.seach.map(function(ele,idx){
			return <SeachList seach={ele} key={idx} hide={_this.state.hide} onsearch={_this.handleSeach} 
			ondelete={_this.handleDelete}/>
		})
		return(
			<div>
				<div className="content">
					<span onClick={this.handleCity}>{this.state.value?this.state.value:'全国'}</span>
					<input type="text" className="text" placeholder="请输入职位或公司" 
							onClick={this.history} 
							onChange={this.handleValue}/>
					<button onClick={this.handleSeach}>搜索</button>
				</div>
					{city}
					{seach}
					<ul className="list">{list}
					<Load load = {this.handleAdd} dis = {this.state.dis}/>
					</ul>
			</div>
			)
	}
	handleCity(){
		var _this = this
		axios.post('/api/city').then(function(res){
			_this.setState({
   	  			city:res.data.city,
   	  			list:[],
   	  			seach:[]
   	  		})
		})
	}
	handleCh(val){
	this.setState({
		value:val,
		city:[],
		dis:"none",
		hide:'none'
	})
	}
	handleSeach(txt){
		var _this = this,
		len = this.state.len,
		text =this.state.text?this.state.text:txt,
		city = this.state.value;
		axios.post('/api/list').then(function(res){
			var reg = new RegExp(text),
			 	data = [];
          for(let i = 0;i<res.data.list.length;i++){
          		if(reg.test(res.data.list[i].positionName) || res.data.list[i].city== city ){
          				data.push(res.data.list[i])	
          		}
          }
			_this.setState({
   	  			list:data,
   	  			dis:'block',
   	  			len:len+5,
   	  			hide:'none'
   	  		})
		})
		 var arr = localStorage.findHistory ? JSON.parse(localStorage.findHistory) : [];
				if(arr.indexOf(this.state.text)==-1){
					arr.unshift(this.state.text);
				}
				arr = JSON.stringify(arr);
				localStorage.findHistory = arr;
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
       len:len+5,
           })
          })
        }
        handleValue(e){
        	this.setState({
        		text:e.target.value
        	})
        }
        history(){

		      //var arr = localStorage.findHistory ? [localStorage.findHistory] : [];
		     
 				var arr = localStorage.findHistory ? JSON.parse(localStorage.findHistory) : [];
				// if(arr.indexOf(this.state.text)==-1){
				// 	arr.push(this.state.text);
				// }
				this.setState({
					seach:arr,
					hide:'block',
					dis:'none',
					list:[]
				})
				// arr = JSON.stringify(arr);
				// localStorage.findHistory = arr;
		     

        }
        handleDelete(text){
        	var arr = localStorage.findHistory ? JSON.parse(localStorage.findHistory) : [];
        		arr.map(function(ele,idx){
        			if(ele==text){
        			arr.splice(idx,1)
        			}
        			
        	})
        		this.setState({
					seach:arr
				})
        		arr = JSON.stringify(arr);
				localStorage.findHistory = arr;
        }
}

export default Seach