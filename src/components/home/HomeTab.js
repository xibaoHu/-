import React, { Component } from 'react'
import { Tabs} from 'antd';

const TabPane = Tabs.TabPane;

class HomeTab extends Component {
	constructor(){
		super();
		this.state={
			datalist:''
		}
	}
	componentWillMount(){
		fetch('api/homelistone')
		.then((res)=>{
				return res.json()
			}
		).then(
		(ress)=>{
			this.state.datalist = ress[0].data;
			this.setState({
				datalist:this.state.datalist
			})
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
			    	<ul className="homelist">
			    	{
			    		this.state.datalist !== ''?this.state.datalist.map(function(item,index){
					    		if(item.type==='lr'){
					    			return <li key={item.title+index}>
					    					<div className="list-l">
					    						<img src={item.imgurl}/>
					    					</div>
				    						<div className="list-r">
				    							<p className="lr-title">{item.title}</p>
				    							<p>{item.content}</p>
				    							<span>淘宝{item.price}</span>
				    						</div>
				    					</li>	
					    		}			    				
					    		}):''				    	
			    		}			    		
			    	</ul>
			    </TabPane>
			    <TabPane tab="篮球" key="2">
			    <ul className="homelist">
			    	{
			    		this.state.datalist !== ''?this.state.datalist.map(function(item,index){
					    		if(item.type==='lr'){
					    			return <li key={item.title+index}>
					    					<div className="list-l">
					    						<img src={item.imgurl}/>
					    					</div>
				    						<div className="list-r">
				    							<p className="lr-title">{item.title}</p>
				    							<p>{item.content}</p>
				    							<span>淘宝{item.price}</span>
				    						</div>
				    					</li>	
					    		}			    				
					    		}):''				    	
			    		}
			    	</ul>
			    </TabPane>
			    <TabPane tab="跑步" key="3">
			    <ul className="homelist">
			    {
			    		this.state.datalist !== ''?this.state.datalist.map(function(item,index){
					    		if(item.type==='lr'){
					    			return <li key={item.title+index}>
					    					<div className="list-l">
					    						<img src={item.imgurl}/>
					    					</div>
				    						<div className="list-r">
				    							<p className="lr-title">{item.title}</p>
				    							<p>{item.content}</p>
				    							<span>淘宝{item.price}</span>
				    						</div>
				    					</li>	
					    		}			    				
					    		}):''				    	
			    		}</ul>	</TabPane>
			    <TabPane tab="健身" key="4">
			    <ul className="homelist">
			    {
			    		this.state.datalist !== ''?this.state.datalist.map(function(item,index){
					    		if(item.type==='lr'){
					    			return <li key={item.title+index}>
					    					<div className="list-l">
					    						<img src={item.imgurl}/>
					    					</div>
				    						<div className="list-r">
				    							<p className="lr-title">{item.title}</p>
				    							<p>{item.content}</p>
				    							<span>淘宝{item.price}</span>
				    						</div>
				    					</li>	
					    		}			    				
					    		}):''				    	
			    		}</ul>	</TabPane>
			    <TabPane tab="潮流" key="5">
			    <ul className="homelist">
			    {
			    		this.state.datalist !== ''?this.state.datalist.map(function(item,index){
					    		if(item.type==='lr'){
					    			return <li key={item.title+index}>
					    					<div className="list-l">
					    						<img src={item.imgurl}/>
					    					</div>
				    						<div className="list-r">
				    							<p className="lr-title">{item.title}</p>
				    							<p>{item.content}</p>
				    							<span>淘宝{item.price}</span>
				    						</div>
				    					</li>	
					    		}			    				
					    		}):''				    	
			    		}</ul>	</TabPane>
			</Tabs>
			</div>
		)
  }
}
export default HomeTab
