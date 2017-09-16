import React, { Component } from 'react';
import '../css/login.css';

class Login extends Component {
	componentDidMount(){
		document.getElementsByClassName('home')[0].style.display = 'none';
	}
	componentWillUnmount(){
		document.getElementsByClassName('home')[0].style.display = 'block';
	}
	render() {
		return (
			<div className='user-login'>
				<div id="js-wrapper">
					<header className="common-header">
						<a href="javascript:history.back();">
							<span>后退</span>
						</a>
						<img src="https://passport.hupu.com/m/2/images/shihuo.png" alt=""/>
		 			</header>
		 			<div className="home-wrapper">
						<form action="" className="index-form" id="J_loginForm">

						    <div className='index-title'>密码和当前账号不匹配</div>
							
							<div className="input-box name-ipt">
						    	<i className="icon iconfont icon-yonghu"></i>
								<input type="text" data-text="账号" name="account" placeholder="登录名/手机号/邮箱" className="hasIcon" id="login-username" />
								<em className="error-icon"></em>
							</div>
							<div className="input-box pwd-ipt">
						    	<i className="icon iconfont icon-suo"></i>
								<input type="password" data-text="密码" name="password" placeholder="密码" className="hasIcon" id="login-pwd" />
								<em className="error-icon"></em>
							</div>
						 	<div className="form-item-btn ">
								<a href="http://localhost:3000/register">注册</a>
								<input type="submit" value="登录" className="login-btn" />
							</div>
						</form>
					</div>
					<div className="other-login">
						<i></i>
						<a href="/#" className="qq-login">
							<i className="icon iconfont icon-qq"></i>
							<span>QQ帐号登录</span>
						</a>
						<i></i>
						<a href="/#" className="phone-login">
							<i className="icon iconfont icon-shouji"></i>
							<span>手机短信登录</span>
						</a>
						<i></i>
					</div>
		 		</div>
		 	</div>
		)
	}
}


export default Login;