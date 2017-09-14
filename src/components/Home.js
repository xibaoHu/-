import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class HomeUI extends Component {
	componentDidMount() {
		this.props.fetchListData();
	}
	render() {
		return (
			<div>
				<h2>首页</h2>
				<hr/>
				<h3>商品列表</h3>
				<ul>
					{
						this.props.home_list.map((item, index)=>{
							return <li key={"h_l_" + index}>
								<img src={item.logo} alt={'img' + index}/>
								<span>{item.shop_name}</span>
								<span>{item.price}</span>
								<Link to={"/detail/" + item.shop_name} className='to-detail'>详情</Link>
							</li>;
						})
					}
				</ul>
				<div className='di'></div>
			</div>
		)
	}
}

const mapStateHomeProps = (state) => {
	return {
		home_list : state.home_list
	}
}

const mapDispatchHomeProps = (dispatch) => {
	return {
		fetchListData: () => {
			fetch('/api/getdata').then((res)=>{
				return res.json();
			}).then((json)=>{
				dispatch({
					type: 'GET_HOME_LIST',
					payload: json
				})
			})
		}
	}
}

const Home = connect( mapStateHomeProps, mapDispatchHomeProps )(HomeUI)

export default Home;