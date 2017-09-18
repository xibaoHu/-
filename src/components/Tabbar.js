import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Tabbar extends Component {
	render(){
		return(
			<div className='page-menu'>
			  <ul>
			    <li>
			    	<i className="icon iconfont icon-shouye"></i>
			    	<Link to="/">首页</Link>
			    </li>
			    <li>
			    <i className="icon iconfont icon-youhui"></i>
			    	<Link to="/preferential">优惠</Link>
			    </li>
			    <li>
			    	<i className="icon iconfont icon-faxian"></i>
			    	<Link to="/find">发现</Link>
			    </li>
			    <li>
			    	<i className="icon iconfont icon-xiebaofushi"></i>
			    	<Link to="/accouter">装备</Link>
			    </li>
			    <li>
			    	<i className="icon iconfont icon-gengduo"></i>
			    	<Link to="/more">更多</Link>
			    </li>
			  </ul>
			</div>
		)
		
	}
}

export default Tabbar

