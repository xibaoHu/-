import React, { Component } from 'react'
import { Tabs} from 'antd';
import { Carousel } from 'antd'

const TabPane = Tabs.TabPane;

class YhTab extends Component {
	render(){
		return(
			<div className="yhtab" >	
				<Tabs animated={false} >
				    <TabPane tab="推荐" key="1">
				    	<Carousel dots="false">
					    		<div>精选</div>
					    		<div>运动鞋服</div>
					    		<div>休闲鞋服</div>
					    		<div>运动装备</div>
					    		<div>电脑数码</div>
					    		<div>家居生活</div>
					    		<div>食品营养</div>
					    		<div>箱包手袋</div>
					    		<div>饰品手表</div>
						 </Carousel>
				    </TabPane>
				    <TabPane tab="国内" key="2">2</TabPane>
				    <TabPane tab="海淘" key="3">3</TabPane>
				    <TabPane tab="白菜价" key="4">4</TabPane>
				</Tabs>
			</div>
		)
  }
}
export default YhTab
