import React, { Component } from 'react';
import Yhsearch from './yh/Yhsearch'
import '../css/yh.css'
import Yhcarousel from './yh/Yhcarousel'
import Littlebanner from './yh/Littlebanner'
import Yhtab from './yh/YhTab'
class Preferential extends Component {
	render() {
		return (
			<div className='yh'>
				<Yhsearch/>
				<Yhcarousel/>
				<Littlebanner/>
				<Yhtab/>
			</div>
		)
	}
}


export default Preferential;