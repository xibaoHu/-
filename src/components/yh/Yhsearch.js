import React, { Component } from 'react'
import '../../iconfont/iconfont.css'

class Homesearch extends Component {
	constructor(){
		super();
		this.state = { 
			opciatySearch: 0
		};
		this.toSearch = this.toSearch.bind(this);
	}
	componentDidMount(){
		//console.log(this.refs)
	}
	toSearch(){
		console.log('toSearch');
		window.location.href = 'http://10.9.158.117:3000/search'
	}
	render(){
		return(
			<div className="yh_top_bar">
				<div className="goback">
					<img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" alt="" />
					<a href="javascript:history.back();"></a>
				</div>
				<div className="searchBox">
					<i className="icon iconfont icon-sousuo"></i>
					<input type="text" onFocus={this.toSearch} name="search" placeholder="搜索全网低价好货" className="searchVal"/>
				</div>
				<div className="ico_list">
					<img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" alt=""/>
				</div>
			</div>
		)
	}
}

export default Homesearch

