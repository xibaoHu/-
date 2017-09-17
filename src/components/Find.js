import React, { Component } from 'react';

class Find extends Component {
	constructor(){
		super();
	}
	componentDidMount(){
		console.log(document.getElementsByClassName('icon-shouye'))
		document.getElementsByClassName('icon-faxian')[0].style.color = 'blue';
		document.getElementsByClassName('icon-faxian')[0].nextSibling.color = 'blue';
	}
	componentWillUnmount(){
		document.getElementsByClassName('icon-faxian')[0].style.color = 'black';
		document.getElementsByClassName('icon-faxian')[0].nextSibling.color = 'black';
	}
	render() {
		return (
			<div>
				<h2>Find</h2>
			</div>
		)
	}
}


export default Find;