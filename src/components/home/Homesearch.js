import React, { Component } from 'react'

class Homesearch extends Component {
	
	render(){
		return(
			<div className="top_bar">
				<div className="search">
					<span className="iconfont icon-sousuo"></span>	
					<input type="text" className="input"  placeholder="搜索商品，品牌"/>
				</div>
				<a href="#" className="me"><span className="iconfont icon-wode"></span></a>
			</div>
		)
	}
}

export default Homesearch

