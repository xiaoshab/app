import React, { Component } from 'react';
import '../css/City.css'
class City extends Component{
	constructor(){
		super();
		this.state={
			list:[]
		}
	}
	  	  componentWillMount(){
	  	  var _this = this;
   	  		this.setState({
   	  			list:[_this.props.city]
   	  		})
		

   	   }
	render(){
		var _this =this;
		var list = this.state.list.map(function(ele,index){
				return <List list={ele} key={index}  onload={_this.props.onload}/>
		})
			return (<div>
				<ul className="lists">
					<h3>{this.props.city.nameStr}</h3>
					{list}
				</ul>
			</div>
			)	
	}
}







class List extends Component{
	constructor(){
		super();
		this.handleCity = this.handleCity.bind(this) 
	}
	render(){
		var _this = this
	var list = this.props.list.cityList.map(function(ele,idx){
		return <b key={idx} data-city={ele} onClick={_this.handleCity}>{ele}</b>
	})
		return(
			<li>{list}</li>
		)
	}
	handleCity(e){
		this.props.onload(e.target.dataset.city)
	}
}


export default City