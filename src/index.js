import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './iconfont/iconfont.css'


import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux";
import reducersObj from './reducers/index';

const reducers = combineReducers(reducersObj);
const store = createStore(reducers);

const renderPage = ()=> {
    ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
}

store.subscribe(renderPage);
renderPage();


registerServiceWorker();

screenchange()

window.onresize=function(){
  	screenchange()
}
	
function screenchange(){
	var html = document.getElementsByTagName("html")[0];
	var clientWidth = html.offsetWidth ;
	html.style["font-size"] =  (clientWidth/750)*100*2 +"px";
}


