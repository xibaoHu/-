import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Preferential from './components/Preferential';
import Find from './components/Find';
import Accouter from './components/Accouter';
import More from './components/More';
import Login from './components/Login';
import Register from './components/Register';
import Detail from './components/Detail';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const App = () => (
  <Router>
  	<div id='app'>
    	<Route path="/login" component={Login}/>
	  	<Route path="/register" component={Register}/>
      <div className='home'>
	      <Route exact path="/" component={Home}/>
	      <Route path="/preferential" component={Preferential}/>
	      <Route path="/find" component={Find}/>
	      <Route path="/accouter" component={Accouter}/>
	      <Route path="/more" component={More}/>
	      <Route path="/detail/:id" component={Detail}/>
	      
	      <hr/>
	      
	      <div className='page-menu'>
		      <ul>
		        <li><Link to="/">首页</Link></li>
		        <li><Link to="/preferential">优惠</Link></li>
		        <li><Link to="/find">发现</Link></li>
		        <li><Link to="/accouter">装备</Link></li>
		        <li><Link to="/more">更多</Link></li>
		      </ul>
		    </div>
    	</div>
    </div>
  </Router>
)

export default App;
