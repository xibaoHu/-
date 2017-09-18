import React, { Component } from 'react';

export default class Detail extends Component {
	render() {
		return (
			<div>
				详情页面
				<br/>
				  {this.props.match.params.id}
			</div>
		)
	}
}

