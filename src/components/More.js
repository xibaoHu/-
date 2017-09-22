import React, { Component } from 'react';
import '../css/more.css';
import { Link } from 'react-router-dom'
import { message } from 'antd';

class More extends Component {
	constructor(){
		super();
		this.state = { 
			ok: '0',
			user: '',
			login: '登录', 
			register: '注册', 
			title: '',
			showOr: 'none'
		};
		this.quitUser = this.quitUser.bind(this);
	}
	componentDidMount(){
		if ( localStorage.userState ){
			const loginState = JSON.parse(localStorage.userState);
			if( loginState.state === 'ok' ) {
				this.setState({
		        	ok: '1',
		        	login: loginState.user,
		        	user: '退出',
		        	showOr: 'inline-block'
		        })
			}
		}
	}
	quitUser(){
		this.setState({
	    	ok: '0',
	    	login: '登录',
	    	user: '',
	    	showOr: 'none'
	    })
		localStorage.setItem( 'userState', '{ "state": "no", "user":"" }');
		(() => { message.success('退出成功') })();
	}
	render() {
		return (
			<div className='more'>
				<div className="mainBox  indexpage">
					<div className="banner_block">
						<div className="userface">
							<img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png" alt="" />
						</div>
						<div className="login">
							<Link to="/login">{this.state.login}</Link>
							<Link to="/register" >{this.state.register}</Link>
							<button style={{outline:'none',border:'0',fontSize:'16px',width:'40px',height:'24px',borderRadius:'6px',display:this.state.showOr}} onClick={this.quitUser}>{this.state.user}</button>
							<p className="jb">金币 0</p>
						</div>
					</div>
					<div className="menu_list">
						<div className="tit">
							<span>我的识货</span>
						</div>
						<ul>
							<li>
								<a href="#/">
									<img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png" alt="" />
									<p>我的收藏</p>
								</a>
							</li>
							<li>
								<a href="#/">
									<img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_shaiwu.png" alt="" />
									<p>我的晒物</p>
								</a>
							</li>
							<li>
								<a href="#/">
									<img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/kaiquan.png" alt="" />
									<p>我的礼品</p>
								</a>
							</li>
						</ul>
					</div>
					<div className="menu_list">
						<div className="tit">
							<span>我的海淘</span>
						</div>
						<ul>
							<li>
								<a href="http:127.0.0.1//:3000/shopcar">
									<img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/cart.png" alt="" />
									<p>购物车</p>
								</a>
							</li>
							<li>
								<a href="#/">
									<img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/haitao_order.png" alt="" />
									<p>海淘订单</p>
								</a>
							</li>
							<li>
								<a href="#/">
									<img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/haitao_kefu.png" alt="" />
									<p>海淘客服</p>
								</a>
							</li>
							<li>
								<a href="#/">
									<img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_address.png" alt="" />
									<p>地址管理</p>
								</a>
							</li>
						</ul>
					</div>
					<div className="menu_list">
						<div className="tit">
							<span>识货必备</span>
						</div>
						<ul>
							<li>
								<a href="#/">
									<img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/tuijiandianpu.png" alt="" />
									<p>推荐店铺</p>
									</a>
									</li>
							<li>
								<a href="#/">
									<img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/identify.png" alt="" />
									<p>装备鉴定</p>
								</a>
							</li>
							<li>
								<a href="#/">
									<img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/select_shoe.png" alt="" />
									<p>黑科技选鞋</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}


export default More;