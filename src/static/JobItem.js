import React, { Component } from 'react';
class JobItem extends Component{
  	  constructor(){
   	  	  super();
          this.handleClick = this.handleClick.bind(this)
   	  }
   	  render(){
   	  	let {positionName,companyName,salary,createTime,city,positionId,companyLogo}=this.props.job;
   	  	return ( 
   	  		<li className="activeable list-item" data-id={positionId} onClick={this.handleClick} >
	            <img src={"https://static.lagou.com/"+companyLogo}  className="item-logo" data-id={positionId} />
	            <div className="item-desc" data-id={positionId}>
                <h2 className="item-title" data-id={positionId}>{companyName}</h2>
	                <p className="item-info" data-id={positionId}>
	                    <span className="item-pos" data-id={positionId}>
	                        {positionName} [ {city} ]
	                    </span>
	                    <span className="item-salary" data-id={positionId}>{salary}</span>
	                </p>
	                <p className="item-time" data-id={positionId}>{createTime}</p>
	            </div> 
	        </li>
   	  		)
   	  }
      handleClick(e){
       window.location=`/detail?${e.target.dataset.id}`
      }
  }

  export default JobItem

  