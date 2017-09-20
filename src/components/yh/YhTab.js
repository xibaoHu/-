import React, { Component } from 'react'
import { Tabs} from 'antd'
import BScroll from 'better-scroll';
import YhContent from './YhContent'

const TabPane = Tabs.TabPane;

class YhTab extends Component {
	constructor(){
 		super();
		this.onTrack = this.onTrack.bind(this);

 	}	
 	componentDidMount(){
 		this.scroll = new BScroll(this.refs.wrapper, {scrollY:false, scrollX:true,click:true})
 	}
 	onTrack(e,arg){
 		   var arr =document.querySelectorAll(" .yhtab .Child");
 		   var ele = arg.target;
 		  for(var i =0 ; i<arr.length; i++){
 		  	arr[i].style.color= "#000";
 		  	arr[i].style["border-bottom"] = "#F7F7F7 2px solid"
 		  	arr[i].style.backgroundColor= "#f5f5f5";
 		  }
 		  console.log(ele.tagName)
 		  if(ele.className === 'Child'){
 		  	  ele.style.color="#fff"
	 		  ele.style.backgroundColor= "#D61F23";
	 		  ele.style["border-bottom"] = "2px solid #D61F23"
 		  }
 		  
 	}
	render(){
		return(
			<div className="yhtab" >	
				<Tabs animated={false} >
				    <TabPane tab="推荐" key="1">
				    	<div className="topBlock wrapper" ref="wrapper">
			                 <div className="topBlock-nav content" ref="content" onClick={this.onTrack.bind(this,"test")}>                     
			                        <div  className="Child" style={{color:"white",backgroundColor:"red",borderBottom:"2px solid #D61F23"}}>全部</div>
			                        <div  className="Child" >实战推荐</div>
			                        <div  className="Child" >潮流穿搭</div>
			                        <div  className="Child" >健身党</div>
			                        <div  className="Child" >跑步有道</div>
			                        <div  className="Child" >测评档案</div>
			                        <div  className="Child" >数码控</div>
			                        <div  className="Child" >绿茵装备</div>
			                        <div  className="Child" >品质生活</div>
			                        <div  className="Child" >识在看完</div>  
			                        <div  className="Child" >其他分类</div>
			                 </div>
			              </div>
			              <YhContent/>
				    </TabPane>
				    <TabPane tab="国内" key="2">
				    	<div className="topBlock wrapper" ref="wrapper">
			                 <div className="topBlock-nav content" ref="content" onClick={this.onTrack.bind(this,"test")}>                     
			                        <div  className="Child" style={{color:"white",backgroundColor:"red",borderBottom:"2px solid #D61F23"}}>精选</div>
			                        <div  className="Child" >运动鞋服</div>
			                        <div  className="Child" >休闲鞋服</div>
			                        <div  className="Child" >运动装备</div>
			                        <div  className="Child" >跑步有道</div>
			                        <div  className="Child" >家居生活</div>
			                        <div  className="Child" >食品营养</div>
			                        <div  className="Child" >食品营养</div>
			                        <div  className="Child" >品质生活</div>
			                        <div  className="Child" >识在看完</div>  
			                        <div  className="Child" >其他分类</div>
			                 </div>
			              </div>
			              <YhContent/>
				    </TabPane>
				    <TabPane tab="海淘" key="3">
				    	<div className="topBlock wrapper" ref="wrapper">
			                 <div className="topBlock-nav content" ref="content" onClick={this.onTrack.bind(this,"test")}>                     
			                        <div  className="Child" style={{color:"white",backgroundColor:"red",borderBottom:"2px solid #D61F23"}}>全部</div>
			                        <div  className="Child" >实战推荐</div>
			                        <div  className="Child" >潮流穿搭</div>
			                        <div  className="Child" >健身党</div>
			                        <div  className="Child" >跑步有道</div>
			                        <div  className="Child" >测评档案</div>
			                        <div  className="Child" >数码控</div>
			                        <div  className="Child" >绿茵装备</div>
			                        <div  className="Child" >品质生活</div>
			                        <div  className="Child" >识在看完</div>  
			                        <div  className="Child" >其他分类</div>
			                 </div>
			              </div>
			              <YhContent/>
				    </TabPane>
				    <TabPane tab="白菜价" key="4">
				    	<div className="topBlock wrapper" ref="wrapper">
			                 <div className="topBlock-nav content" ref="content" onClick={this.onTrack.bind(this,"test")}>                     
			                        <div  className="Child" style={{color:"white",backgroundColor:"red",borderBottom:"2px solid #D61F23"}}>全部</div>
			                        <div  className="Child" >实战推荐</div>
			                        <div  className="Child" >潮流穿搭</div>
			                        <div  className="Child" >健身党</div>
			                        <div  className="Child" >跑步有道</div>
			                        <div  className="Child" >测评档案</div>
			                        <div  className="Child" >数码控</div>
			                        <div  className="Child" >绿茵装备</div>
			                        <div  className="Child" >品质生活</div>
			                        <div  className="Child" >识在看完</div>  
			                        <div  className="Child" >其他分类</div>
			                 </div>
			              </div>
			              <YhContent/>
				    </TabPane>
				</Tabs>
			</div>
		)
  }
}
export default YhTab
