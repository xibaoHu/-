import React, { Component } from 'react';
import '../css/register.css';
import { message, Button } from 'antd';

class Register extends Component {
	constructor(){
		super();
		this.state = {
			ok: '0',
			phone: '' 
		};
		this.resPhone = this.resPhone.bind(this);
	}
	componentDidMount(){
		document.getElementsByClassName('home')[0].style.display = 'none';
	}
	componentWillUnmount(){
		document.getElementsByClassName('home')[0].style.display = 'block';
	}
	resPhone(){
		//console.log(this.refs.phoneInt.value)
		var phoneValue = this.refs.phoneInt.value;
		
		const phoneReg = /^1[34578]\d{9}$/;
		if ( phoneReg.test(phoneValue) ) {
			this.setState({
				ok: '1',
	        	phone: phoneValue
	        })
		}else {
			(() => { message.warning('请输入正确的手机号') })();
		}
	}
	componentDidUpdate(){
		//console.log('update')
		//console.log(this.state)
		if( this.state.ok === '1' ){
			fetch("/api/regist?username="+this.state.phone+"&psw=111111").then((res)=>{
		      	return res.json();
		    }).then((data)=>{
		      	//console.log(data);
//				alert(data.result);
				( () => { 
					if ( data.result === '该用户已注册' ) {
						message.warning(data.result)
					}else {
						message.success(data.result);
						setTimeout(function(){
							window.location.href = 'http://10.9.158.117:3000/login';
						},1000)
					}
				} )()
			})
		}		
	}
	render() {
		return (
			<div className='user-register'>
				<div className='js-wrapper'>
					<header className="common-header">
						<a href="javascript:history.back();">
							<span>后退</span>
						</a>
						<div className='header-title'>
							手机注册
						</div>
		 			</header>
		 			<div className='content'>
		 				<div className="phone-res">
							<i className="icon iconfont icon-shouji"></i>
							<input type="number" name="phone" placeholder="请输入大陆地区的手机号" className="phone" ref='phoneInt'/>
						</div>
						<p className="bindTips">
			 				我已经阅读并同意
			 				<a href="/#">虎扑用户协议（含隐私政策）</a>
			 			，系统将同步为您创建虎扑帐号
			 			</p>
			 			<div className="form-item-btn one-btn">
				           	<Button className="next-btn btn-disable" type="primary" onClick={this.resPhone}>注册</Button>
					    </div>
					    <div className="afterSuccess">
				 	      	<p>温馨提示：</p>
				        	<p>帐号注册成功后，您可以方便使用</p>
				        	<p>默认密码为 111111 请尽快修改</p>
				        	<p>虎扑网、手机虎扑网、虎扑App、识货等服务。</p>
					    </div>
		 			</div>
		 		</div>
			</div>
		)
	}
}


export default Register;