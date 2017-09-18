import React, { Component } from 'react';
import { connect } from "react-redux";
import '../homestyle.css'
import Tcarousel from './home/Topcarousel'

class Home extends React.Component {	
	render() {
		return (
			<div>
				<Tcarousel/>
			</div>
		)
	}		    
}



export default Home;	