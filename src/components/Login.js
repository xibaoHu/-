import React, { Component } from 'react';
import '../css/login.css';

class Login extends Component {
	componentDidMount(){
		//console.log(window.location.href.indexOf('login'))
	}
	render() {
		return (
			<div className='user-login'>
				<h2>Login</h2>
				<div id="js-wrapper">
					<header className="common-header">
						<a href="javascript:history.back();">
							<span>后退</span>
						</a>
						<img src="https://passport.hupu.com/m/2/images/shihuo.png" alt=""/>
		 			</header>
		 		</div>
		 	</div>
		)
	}
}


export default Login;