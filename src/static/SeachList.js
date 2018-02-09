import React, { Component } from 'react';
 
 class SeachList extends Component{
 	constructor(){
 		super();
 		this.state={
 			text:''
 		}
 		this.handleClick=this.handleClick.bind(this)
 		this.handleDetele=this.handleDetele.bind(this)
 	}
 	render(){
 		return(<div className="position"> <div className="history" style={{display:this.props.hide}} onClick={this.handleClick}>
 			{this.props.seach} 
 			</div><b onClick={this.handleDetele} className='right'  style={{display:this.props.hide}} data-del={this.props.seach}>X</b>
					</div>
 			)
 	}
 	handleClick(){
 		var _this =this 
 		this.props.onsearch(this.props.seach)
 		this.setState({
 			text:_this.props.seach
 		})
 	}
 	handleDetele(e){
 		this.props.ondelete(e.target.dataset.del)
 	}

 }
 export default SeachList