import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'antd'

class Tcarousel extends React.Component {	
	render() {
		return (
			<Carousel>
			    <div><h3>
					<div className="tc-img">
						<img src="http://shihuo.hupucdn.com/trade/reposition/2017-09-06/a87bb2d6088fa63ef1f07b8acf4db62f.png" alt=""/>
					</div>
					<div className="download-info-product product-info">
						<p>Nike Hyperdunk 2016 Low</p>
						<p>¥499<span>5.0折</span><span>¥999</span></p>
					</div>
			    </h3></div>
			    <div><h3>2</h3></div>
			    <div><h3>3</h3></div>
			    <div><h3>4</h3></div>
			 </Carousel>
		)
	}
		    
}


export default Tcarousel;	