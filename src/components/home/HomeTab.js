import React, { Component } from 'react'
import { Tabs} from 'antd';

const TabPane = Tabs.TabPane;

class HomeTab extends Component {
	render(){
		return(
			<div className="hometab" >	
			<Tabs animated={false} >
			    <TabPane tab="推荐" key="1">Content of tab 1</TabPane>
			    <TabPane tab="篮球" key="2">Content of tab 2</TabPane>
			    <TabPane tab="跑步" key="3">Content of tab 3</TabPane>
			    <TabPane tab="健身" key="4">Content of tab 4</TabPane>
			    <TabPane tab="潮流" key="5">Content of tab 5</TabPane>
			</Tabs>
			</div>
		)
  }
}
export default HomeTab
