import React, { Component } from 'react'
import '../../iconfont/iconfont.css'

class Homesearch extends Component {
	constructor(){
		super();
		this.state = { 
			opciatySearch: 0
		};
	}
	componentDidMount(){
		//console.log(this.refs)
	}
	render(){
		return(
			<div className="yh_top_bar">
				<div className="goback">
					<img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" />
					<a href="javascript:history.back();"></a>
				</div>
				<div className="searchBox">
					<i className="icon iconfont icon-sousuo"></i>
					<input type="text" name="search" placeholder="搜索全网低价好券" className="searchVal" ref='yh_input'/>
				</div>
				<div className="ico_list">
					<img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" />
				</div>
			</div>
		)
	}
}

export default Homesearch

