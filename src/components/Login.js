import React, { Component } from 'react';
import '../css/login.css';
import { message } from 'antd';

class Login extends Component {
	constructor(){
		super();
		this.state = { 
			ok: '0', 
			use: '', 
			pwd: '', 
			title: '' 
		};
		this.userPwds = this.userPwds.bind(this);
	}
	componentDidMount(){
		document.getElementsByClassName('am-tab-bar')[0].style.display = 'none';
	}
	componentWillUnmount(){
		document.getElementsByClassName('am-tab-bar')[0].style.display = 'block';
	}
	userPwds(){
		//console.log(this.refs.user.value)
		//console.log(this.refs.pwd.value)
		var userValue = this.refs.user.value;
		var pwdValue = this.refs.pwd.value;
		
		const userReg = /^1[34578]\d{9}$/;//手机号
		//const pwdReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;//必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
		const pwdReg = /^\d{6,6}$/;//数字
		
		if ( userReg.test(userValue) && pwdReg.test(pwdValue) ) {
			this.setState({
				ok: '1',
	        	use: userValue,
	        	pwd: pwdValue
	        })
		}else if( !userReg.test(userValue) ){
			this.setState({
	        	title: '用户名格式不正确，请输入正确手机号'
	        })
		}else if( !pwdReg.test(pwdValue) ){
			this.setState({
	        	title: '密码格式不正确，默认密码为111111 (∩_∩)~'
	        })
		}
	}
	componentDidUpdate(){
		//console.log('update')
		//console.log(this.state)
		if ( this.state.ok == '1' ) {
			fetch("/api/login?username="+this.state.use+"&psw="+this.state.pwd).then((res)=>{
		      	return res.json();
		    }).then((data)=>{
		      	//console.log(data);
				if ( data.result === '登录成功' ){
					(() => { message.success('登录成功') })();
					if( localStorage.userState ){
						localStorage.setItem( 'userState', '{ "state": "ok", "user":' + this.state.use + ' }');
					}else {
						localStorage.userState = '{ "state": "ok", "user":' + this.state.use + ' }';
					}
					setTimeout(function(){
						window.location.href = 'http://10.9.158.117:3000/more';
					},1000)
				}else if( data.result === '未注册' ){
					(() => { message.warning('该账号未注册') })();
				}
			})
		}
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
						<div className="index-form" id="J_loginForm">
							<div className='index-title'>{this.state.title}</div>
							<div className="input-box name-ipt">
						    	<i className="icon iconfont icon-yonghu"></i>
								<input type="text" data-text="账号" name="account" placeholder="登录名/手机号/邮箱" className="hasIcon" id="login-username" ref='user' />
								<em className="error-icon"></em>
							</div>
							<div className="input-box pwd-ipt">
						    	<i className="icon iconfont icon-suo"></i>
								<input type="password" data-text="密码" name="password" placeholder="密码" className="hasIcon" id="login-pwd" ref='pwd' />
								<em className="error-icon"></em>
							</div>
						 	<div className="form-item-btn ">
								<a href="http://10.9.158.117:3000/register">注册</a>
								<button className="login-btn" onClick={ this.userPwds }>登录</button>
							</div>
						</div>
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