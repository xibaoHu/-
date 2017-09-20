import React, { Component } from 'react'

class Littlebanner extends Component {
	render(){
		return 	(
			<div>
			<div className="tag-list clearfix">
					<div className="list">
						<div className="name">
							<p>全网白菜</p>
							<div className="tips">手机壳15.9元</div>
						</div>
						<div className="imgs">
							<img src="http://shihuo.hupucdn.com/appHome/201708/1511/a7e24b96c426850bfd9ad16a58f9b2b6.jpg" alt=""/>
						</div>
					</div>
					<div className="list">
						<div className="name">
							<p>优惠券</p>
							<div className="tips">Clarks150券</div>
						</div>
						<div className="imgs">
							<img src="http://shihuo.hupucdn.com/appHome/201706/0215/6c9fc76a65bda79c9c298ca19f016820.jpg" alt=""/>
						</div>
					</div>
				</div>
				<div className="bg-color"></div>
			</div>		
		
		)
	}
}
export default Littlebanner
