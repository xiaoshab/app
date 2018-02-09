import React, { Component } from 'react';
 
 class Load extends Component{
 	constructor(){
 		super();
 		this.handleAdd=this.handleAdd.bind(this)
 	}
 	render(){
 		return( <p onClick={this.handleAdd}  style={{display:this.props.dis}} className="top">加载更多.....</p>)
 	}
 	handleAdd(){
 		this.props.load()
 	}
 }
 export default Load