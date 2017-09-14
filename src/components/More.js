import React, { Component } from 'react';
import { message, Button } from 'antd';

class More extends Component {
	login(){
		setTimeout(function(){
			message.info('登陆成功');
		},1500)
	}
	render() {
		return (
			<div>
				<h2>More</h2>
				<Button type="primary" onClick={this.login.bind(this)}>登录</Button>
			</div>
		)
	}
}


export default More;