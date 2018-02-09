import React, { Component } from 'react';
 
 class Head extends Component{
 	constructor(){
 		super();
 	}
 	render(){
 		return(<div className="headers">
 				{this.props.head}
 			</div>)
 	}
 }

 export default Head