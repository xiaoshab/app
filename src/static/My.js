import React, { Component } from 'react';
import { Route, Switch, Link,NavLink} from 'react-router-dom';
import '../css/my.css'
class My extends Component{
  	  constructor(){
   	  	  super();
   	  }
   	  render(){
   	  
   	  	return ( <div>
            <div className="login">
              <NavLink to="/login" activeClassName="likes">登录</NavLink>/
              <NavLink to="/regiter" activeClassName="likes">注册</NavLink>
        <ul className="my">
                        <li><NavLink to="/login" activeClassName="likes">投递</NavLink></li>
                        <li><NavLink to="/login" activeClassName="likes">面试</NavLink></li>
                        <li><NavLink to="/login" activeClassName="likes">邀约</NavLink></li>
                        <li><NavLink to="/login" activeClassName="likes">收藏</NavLink></li>
                      </ul>
            </div>
                    
        </div>)	
   	  }
  }

  export default My