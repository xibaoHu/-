import React, { Component } from 'react'

class Homesearch extends Component {
	constructor(){
		super();
		this.state = { 
			opciatySearch: 0
		};
	}
	componentDidMount(){
		var body = document.getElementsByTagName('body')[0];
		var that = this;
		body.addEventListener("touchmove", function(e) {
			//console.log( that.state.toTop );
			if( this.scrollTop <= 200 && this.scrollTop > 0 ){
				that.setState.opciatySearch = this.scrollTop/200;
				that.setState({
					opciatySearch: that.setState.opciatySearch
				})
			}
		})
	}
	render(){
		return(
			<div className="top_bar" style={{backgroundColor:'rgba(221, 23, 18, '+this.state.opciatySearch+')'}}>
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

