import React, { Component } from 'react';

class Accouter extends Component {
	constructor(){
		super();
	}
	componentDidMount(){
		console.log(document.getElementsByClassName('icon-shouye'))
		document.getElementsByClassName('icon-xiebaofushi')[0].style.color = 'blue';
		document.getElementsByClassName('icon-xiebaofushi')[0].nextSibling.color = 'blue';
	}
	componentWillUnmount(){
		document.getElementsByClassName('icon-xiebaofushi')[0].style.color = 'black';
		document.getElementsByClassName('icon-xiebaofushi')[0].nextSibling.color = 'black';
	}
	render() {
		return (
			<div>
				<h2>Accouter</h2>
			</div>
		)
	}
}


export default Accouter;