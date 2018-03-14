import React, { Component } from 'react';
 import Head from './Header';
 import '../css/ding.css';
 import City from './City';
 import axios from 'axios';
 class Ding extends Component{
 	constructor(){
 		super();
 			this.state={
 				show:'block', 
 				hide:'none',
 				cityhide:'none',
 				cityshow:'none',
 				salarhide:'none',
 				salarshow:'none',
 				cpmhide:'none',
 				cpmshow:'none',
 				namehide:'none',
 				list:'',
 				citylist:'',
 				salar:'',
 				companys:'',
 				Pname:["产品经理",'Java','运营',"Android",'PHP','UI','ios','编辑','BD'],
 				city:[],
 				salary:['没有要求','2K以下','2-5K',"5-10K","10-15K","15-20K","20-25K","25-50K","50K以上"],
 				company:['没有要求','初创型','成长型','成熟型','上市公司']
 			}
 		this.handleHide=this.handleHide.bind(this);
 		this.handleJOb=this.handleJOb.bind(this);
 		this.handleCh=this.handleCh.bind(this);
 		this.handleSalary=this.handleSalary.bind(this);
 		this.handleCompany=this.handleCompany.bind(this);
 		this.handleSuccess=this.handleSuccess.bind(this);
 	}
 	componentWillMount(){
 		var _this = this
		axios.post('/api/city').then(function(res){
			_this.setState({
   	  			city:res.data.city
   	  		})
		})
 	}
 	render(){
 		var _this=this;
 		var Pname=this.state.Pname.map(function(ele,idx){
 			return  <li key={idx} className="item" onClick={_this.handleJOb} data-job={ele}>{ele}</li>
 		});
 		var city = this.state.city.map(function(ele,idx){
			return <City key={idx} city = {ele}  onload={_this.handleCh}/>
		});
		var salary = this.state.salary.map(function(ele,idx){
			return  <li key={idx} className="item" onClick={_this.handleSalary} data-salary={ele}>{ele}</li>
		});
		var company=this.state.company.map(function(ele,idx){
 			return  <li key={idx} className="item" onClick={_this.handleCompany} data-comp={ele}>{ele}</li>
 		});
 		return( <div>
 			<Head head="设置定制职位"/>
 			<span className="dingback" onClick={this.handleSuccess}>返回</span>
 			<div className="infozhi" style={{display:this.state.show}}>你想找什么职位？</div>
 			<div className="bao">
 			<input type="text" placeholder="输入你想定制的职位"  className="inputer" onChange={this.handleHide}/>
 			
 			<span className="ok" onClick={this.handleSuccess}>OK</span></div>

 			<div style={{display:this.state.hide}} className="styles">职位类型：{this.state.list}</div>

 			<div style={{display:this.state.cityhide}} className="styles">工作地点：{this.state.citylist}</div>

 			<div style={{display:this.state.salarhide}} className="styles">期望薪资：{this.state.salar}</div>

 			<div style={{display:this.state.cpmhide}} className="styles">公司类型：{this.state.companys}</div>

 			<div style={{display:this.state.cpmhide}} className="styles" onClick={this.handleSuccess}>完成定制</div>

 			<ul style={{display:this.state.namehide}}>{Pname}</ul>

 			<div style={{display:this.state.cityshow}}>{city}</div>

 			<ul style={{display:this.state.salarshow}}>{salary}</ul>

 			<ul style={{display:this.state.cpmshow}}>{company}</ul>

 			</div>)
 	}
 	handleHide(){
 		this.setState({
 			namehide:'block'
 		})
 	}
 	handleJOb(e){
 		this.setState({
 			list:e.target.dataset.job,
 			show:'none',
 			hide:'block',
 			cityshow:'block',
 			namehide:'none'
 		})
 	}
 	handleCh(city){
 		this.setState({
 			citylist:city,
 			cityhide:'block',
 			cityshow:'none',
 			salarshow:'block'
 		})
 	}
 	handleSalary(e){
		this.setState({
 			salar:e.target.dataset.salary,
 			salarhide:'block',
 			salarshow:'none',
 			cpmshow:'block'
 		})
 	}
 	handleCompany(e){
 		this.setState({
 			companys:e.target.dataset.comp,
 			cpmshow:'none',
 			cpmhide:'block'
 		})
 	}
 	handleSuccess(){
 		 var id=window.location.search.slice(1)
 		window.location=`/app/list?${id}`
 	}
 }
 export default Ding