import React, { Component } from 'react'
import { Tabs} from 'antd';

const TabPane = Tabs.TabPane;

class HomeTab extends Component {
	componentDidMount(){
		fetch('api/homelistone')
		.then((res)=>{
				return res.json()
			}
	).then(
		(ress)=>{
			console.log(ress[0].data)
		}
	).catch(function(e) {
		  console.log(e);
		})
	}
	render(){
		return(
			<div className="hometab" >	
			<Tabs animated={false} >
			    <TabPane tab="推荐" key="1">
			    	<div className="tab-top-card">
			    		<div>全部</div>
			    		<div>单品推荐</div>
			    		<div>原创精选</div>
			    		<div>用户晒物</div>
			    	</div>
			    	<div className="hometab-con">
			    		<h1>1</h1>
			    		<h1>2</h1>
			    	</div>
			    </TabPane>
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
