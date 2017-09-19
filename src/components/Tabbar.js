import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import TabBar from 'antd-mobile/lib/tab-bar/index.web';
import 'antd-mobile/lib/tab-bar/style/index.css';

import { Link } from 'react-router-dom'

class TabBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	selectedTab: 'blackTab',
    	tintColor: '#e02856',
      hidden: false
    };
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
            background: 'url(http://127.0.0.1:8020/-/src/icon_svg/%E9%A6%96%E9%A1%B5.svg) center center /  0.18rem 0.18rem no-repeat' }}
          ><Link to="/"></Link></div>
          }
          selectedIcon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url(http://127.0.0.1:8020/-/src/icon_svg/%E9%A6%96%E9%A1%B5_red.svg) center center /  0.18rem 0.18rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blackTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blackTab',
            });
						console.log('logId0')
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
            background: 'url(http://127.0.0.1:8020/-/src/icon_svg/%E4%BC%98%E6%83%A0.svg) center center /  0.18rem 0.18rem no-repeat' }}
          ><Link to="/preferential"></Link></div>
          }
          selectedIcon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url(http://127.0.0.1:8020/-/src/icon_svg/%E4%BC%98%E6%83%A0_red.svg) center center /  0.18rem 0.18rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
						console.log('logId1');
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
            background: 'url(http://127.0.0.1:8020/-/src/icon_svg/%E5%8F%91%E7%8E%B0.svg) center center /  0.18rem 0.18rem no-repeat' }}
          ><Link to="/find"></Link></div>
          }
          selectedIcon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url(http://127.0.0.1:8020/-/src/icon_svg/%E5%8F%91%E7%8E%B0_red.svg) center center /  0.18rem 0.18rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
						console.log('logId2');
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
            background: 'url(http://127.0.0.1:8020/-/src/icon_svg/%E9%9E%8B%E5%8C%85%E6%9C%8D%E9%A5%B0.svg) center center /  0.18rem 0.18rem no-repeat' }}
          ><Link to="/accouter"></Link></div>
          }
          selectedIcon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url(http://127.0.0.1:8020/-/src/icon_svg/%E9%9E%8B%E5%8C%85%E6%9C%8D%E9%A5%B0_red.svg) center center /  0.18rem 0.18rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'pinkTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'pinkTab',
            });
						console.log('logId3');
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
            background: 'url(http://127.0.0.1:8020/-/src/icon_svg/%E6%9B%B4%E5%A4%9A.svg) center center /  0.18rem 0.18rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.19rem',
            height: '0.19rem',
            background: 'url(http://127.0.0.1:8020/-/src/icon_svg/%E6%9B%B4%E5%A4%9A_red.svg) center center /  0.18rem 0.18rem no-repeat' }}
          ><Link to="/more"></Link></div>
          }
          selected={this.state.selectedTab === 'orangeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'orangeTab',
            });
						console.log('logId4');
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

