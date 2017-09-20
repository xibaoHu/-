import React, { Component } from 'react'

class HomeTotop extends Component {
	constructor(){
		super();
		this.state = { 
			toTop: 'none'
		};
	}
	componentDidMount(){
		var body = document.getElementsByTagName('body')[0];
		var that = this;
		body.addEventListener("touchmove", function(e) {
			if( window.scrollY >= 50 ){
				that.state.toTop = 'block'
				that.setState({
					toTop: that.state.toTop
				})
			}else if( window.scrollY <= 50 ){
				that.state.toTop = 'none'
				that.setState({
					toTop: that.state.toTop 
				})
			}
		})
	}
	render(){
		return(
			<a className="totop" href="javascript:scroll(0,0)" style={{display:this.state.toTop}}>
				<img src="//sh1.hoopchina.com.cn/images/trademobile/daigou/top.png"/>	
			</a>
		)
  }
}
export default HomeTotop
