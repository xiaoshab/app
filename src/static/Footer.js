import { BrowserRouter as Router, Route, Link,Switch,Redirect,NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import JobList from './JobList';
import Seach from './Seach';
import Head from './Header';
import My from './My';
class Footer extends Component{
	constructor(){
		super();
	}
	render(){
		return(<div>
      <Head head="拉勾网"/>
       <ul className="nav">
          <li className="nav-item">
             <NavLink to="/app/list" activeClassName="likes">职位</NavLink>
          </li>
          <li className="nav-item">
               <NavLink to="/app/seach" activeClassName="likes">搜索</NavLink>
          </li>
          <li className="nav-item">
               <NavLink to="/app/my" activeClassName="likes">我的</NavLink>
          </li>
        </ul>
        <Switch>
                    <Route path="/app/list"  component = {JobList}></Route>
                    <Route path="/app/seach" component = {Seach}></Route>
                    <Route path="/app/my" component={My}></Route>
                    <Route exact path="/app/list"  component = {JobList}/>

        </Switch> 
    </div>)
	}
}
 export default Footer