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
import Tabbar from './components/Tabbar'

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
	      
	      <Tabbar/>
    	</div>
    </div>
  </Router>
)

export default App;
