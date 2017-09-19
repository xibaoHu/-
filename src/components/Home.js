import React, { Component } from 'react';
import { connect } from "react-redux";
import '../homestyle.css'
import Homesearch from './home/Homesearch'
import Homecarousel from './home/Homecarousel'
import PicBanner from './home/HomePicBanner'
import HomeTab from './home/HomeTab'
import HomeTotop from './home/HomeTotop'

class Home extends Component {
	constructor(){
		super();
	}
	render() {
		return (
			<div className="home-page">
				<Homesearch/>
				<Homecarousel/>
				<PicBanner/>
				<HomeTab/>
				<HomeTotop/>
			</div>
		)
	}
}



export default Home;	