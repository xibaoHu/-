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
			//console.log( that.state.toTop );
			if( this.scrollTop >= 50 ){
				that.setState({
					toTop: 'block'
				})
			}else if( this.scrollTop <= 50 ){
				that.setState({
					toTop: 'none'
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