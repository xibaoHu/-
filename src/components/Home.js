import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import '../homestyle.css'


class Home extends Component {
	constructor(){
		super();
	}
	componentDidMount(){
		console.log(document.getElementsByClassName('icon-shouye'))
		document.getElementsByClassName('icon-shouye')[0].style.color = 'blue';
		document.getElementsByClassName('icon-shouye')[0].nextSibling.color = 'blue';
	}
	componentWillUnmount(){
		document.getElementsByClassName('icon-shouye')[0].style.color = 'black';
		document.getElementsByClassName('icon-shouye')[0].nextSibling.color = 'black';
	}
	render() {
		return (
			<div>
				
			</div>
		)
	}
		    
}



export default Home;	