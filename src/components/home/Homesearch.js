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
<<<<<<< HEAD
			if( window.scrollY <= 400 && window.scrollY > 0 ){
				that.setState.opciatySearch = window.scrollY/400;
=======
			//console.log( that.state.toTop );
			if( window.scrollY <= 200 && window.scrollY > 0 ){
				that.setState.opciatySearch = window.scrollY/200;
>>>>>>> 0e5aa4bc2dee80054599b552225d28a2b78b9453
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

