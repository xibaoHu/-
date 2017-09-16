import React, { Component } from 'react';
import '../css/register.css';

class Register extends Component {
	componentDidMount(){
		document.getElementsByClassName('home')[0].style.display = 'none';
	}
	componentWillUnmount(){
		document.getElementsByClassName('home')[0].style.display = 'block';
	}
	render() {
		return (
			<div className='user-register'>
				<h2>Register</h2>
			</div>
		)
	}
}


export default Register;