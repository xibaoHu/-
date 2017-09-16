import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'


export default class Home extends React.Component {
	componentDidMount() {
//		this.props.fetchListData();
	}
	render() {
		return (
			<div>
				<h2>首页</h2>

			</div>
		)
	}
}
//
//const mapStateHomeProps = (state) => {
//	return {
//		home_list : state.home_list
//	}
//}

//const mapDispatchHomeProps = (dispatch) => {
//	return {
//		fetchListData: () => {
//			fetch('/api/getdata').then((res)=>{
//				return res.json();
//			}).then((json)=>{
//				dispatch({
//					type: 'GET_HOME_LIST',
//					payload: json
//				})
//			})
//		}
//	}
//}
//
//const Home = connect( mapStateHomeProps, mapDispatchHomeProps )(HomeUI)
