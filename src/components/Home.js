import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Home extends React.Component {
	render() {
		return (
			<div>
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide">Slide 1</div>
				        <div class="swiper-slide">Slide 2</div>
				        <div class="swiper-slide">Slide 3</div>
				    </div>
				    <!-- 如果需要分页器 -->
				    <div class="swiper-pagination"></div>
				    
				    <!-- 如果需要导航按钮 -->
				    <div class="swiper-button-prev"></div>
				    <div class="swiper-button-next"></div>
				    
				    <!-- 如果需要滚动条 -->
				    <div class="swiper-scrollbar"></div>
				</div>
			</div>
		)
	}
}



export default Home;	