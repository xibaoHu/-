import React, { Component } from 'react';

class Detail extends Component {
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


export default Detail;