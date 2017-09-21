import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import TabBar from 'antd-mobile/lib/tab-bar/index.web';
import 'antd-mobile/lib/tab-bar/style/index.css';

import { Link } from 'react-router-dom'

import homeI from '../icon_svg/首页.svg';
import homeI_red from '../icon_svg/首页_red.svg';
import yhI from '../icon_svg/优惠.svg';
import yhI_red from '../icon_svg/优惠_red.svg';
import findI from '../icon_svg/发现.svg';
import findI_red from '../icon_svg/发现_red.svg';
import zbI from '../icon_svg/鞋包服饰.svg';
import zbI_red from '../icon_svg/鞋包服饰_red.svg';
import moreI from '../icon_svg/更多.svg';
import moreI_red from '../icon_svg/更多_red.svg';

class TabBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	selectedTab: 'blackTab',
    	tintColor: '#e02856',
      hidden: false
    };
  }
  componentDidMount() {
  	//console.log(window.location.pathname)
  	if( window.location.pathname === '/preferential' || window.location.pathname === '/search' ) {
  		this.setState({
				selectedTab: 'greenTab'
			})
  	}else if( window.location.pathname === '/find' ) {
  		this.setState({
				selectedTab: 'yellowTab'
			})
  	}else if( window.location.pathname === '/accouter' ) {
  		this.setState({
				selectedTab: 'pinkTab'
			})
  	}else if( window.location.pathname === '/more' || window.location.pathname === '/shopcar' ) {
  		this.setState({
				selectedTab: 'orangeTab'
			})
  	}
  }
  render() {
    return (
      <TabBar
      	unselectedTintColor="#949494"
        tintColor="#e51414"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title={<span>首页<Link to="/"></Link></span>}
          key="首页"
          icon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url('+ homeI +') center center /  0.18rem 0.18rem no-repeat' }}
          ><Link to="/"></Link></div>
          }
          selectedIcon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url('+ homeI_red +') center center /  0.18rem 0.18rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blackTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blackTab',
            });
						//console.log('logId0')
					}}
          data-seed="logId0"
        >
        </TabBar.Item>
        <TabBar.Item
          title={<span>优惠<Link to="/preferential"></Link></span>}
          key="优惠"
          icon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url('+ yhI +') center center /  0.18rem 0.18rem no-repeat' }}
          ><Link to="/preferential"></Link></div>
          }
          selectedIcon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url('+ yhI_red +') center center /  0.18rem 0.18rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
						//console.log('logId1');
						//window.location.href = 'http://localhost:3000/preferential';
					}}
          data-seed="logId1"
        >
        </TabBar.Item>
        <TabBar.Item
          title={<span>发现<Link to="/find"></Link></span>}
          key="发现"
          icon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url('+ findI +') center center /  0.18rem 0.18rem no-repeat' }}
          ><Link to="/find"></Link></div>
          }
          selectedIcon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url('+ findI_red +') center center /  0.18rem 0.18rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
						//console.log('logId2');
						//window.location.href = 'http://localhost:3000/find';
					}}
          data-seed="logId2"
        >
        </TabBar.Item>
        <TabBar.Item
          title={<span>装备<Link to="/accouter"></Link></span>}
          key="装备"
          icon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url('+ zbI +') center center /  0.18rem 0.18rem no-repeat' }}
          ><Link to="/accouter"></Link></div>
          }
          selectedIcon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url('+ zbI_red +') center center /  0.18rem 0.18rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'pinkTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'pinkTab',
            });
						//console.log('logId3');
						//window.location.href = 'http://localhost:3000/accouter';
					}}
          data-seed="logId3"
        >
        </TabBar.Item>
        <TabBar.Item
          title={<span>更多<Link to="/more"></Link></span>}
          key="更多"
          icon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url('+ moreI +') center center /  0.18rem 0.18rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url('+ moreI_red +') center center /  0.18rem 0.18rem no-repeat' }}
          ><Link to="/more"></Link></div>
          }
          selected={this.state.selectedTab === 'orangeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'orangeTab',
            });
						//console.log('logId4');
						//window.location.href = 'http://localhost:3000/more';
					}}
          data-seed="logId4"
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}




export default TabBarMenu

