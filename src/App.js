import { BrowserRouter as Router, Route, Link,Switch,Redirect} from 'react-router-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './static/Footer';
import Login from './MY/login';
import Reg from './MY/regiter';
import Deatil from './static/Deatil';
import Ding from './static/Ding'
class App extends Component {

  render() {
    return ( 
     <div>
        <Router>
         <div className="App">
            <Switch>
              <Route path="/ding" component={Ding}></Route>
              <Route path="/detail" component={Deatil}></Route>
              <Route path="/regiter" component={Reg}></Route>
               <Route path="/login" component={Login}></Route>
               <Route path="/app" component={Footer}></Route>
               <Redirect exact path="/" to="/app/list" />
            
            </Switch>
         </div>
       </Router>
    </div>
         );
  }
}

export default App;
