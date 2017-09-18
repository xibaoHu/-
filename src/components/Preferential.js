import React, { Component } from 'react';

class Preferential extends Component {
	constructor(){
		super();
	}
	componentDidMount(){
		console.log(document.getElementsByClassName('icon-shouye'))
		document.getElementsByClassName('icon-youhui')[0].style.color = 'blue';
		document.getElementsByClassName('icon-youhui')[0].nextSibling.color = 'blue';
	}
	componentWillUnmount(){
		document.getElementsByClassName('icon-youhui')[0].style.color = 'black';
		document.getElementsByClassName('icon-youhui')[0].nextSibling.color = 'black';
	}
	render() {
		return (
			<div>
				<h2>Preferential</h2>
			</div>
		)
	}
}


export default Preferential;