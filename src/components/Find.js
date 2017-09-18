import React, { Component } from 'react';
import { connect } from "react-redux";
import './Find.css'
import { Carousel ,Icon } from 'antd';
import BScroll from 'better-scroll';
import MoreText from './MoreText'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import { BackTop } from 'antd';



 class FindUI extends React.Component {
 	constructor(){
 		super();
		this.onTrack = this.onTrack.bind(this);

 	}	
 	onTrack(e,arg){
 		   var arr =document.getElementsByClassName("Child");
 		   var ele = arg.target;
 		  for(var i =0 ; i<arr.length; i++){
 		  	arr[i].style.color= "#000";
 		  	arr[i].style["border-bottom"] = "#F7F7F7 2px solid"
 		  }
 		   ele.style.color= "#D61F23";
 		   ele.style["border-bottom"] = "2px solid #D61F23"
 	}
	componentDidMount() {
    	  this.props.fetchListData ();
    	  this.props.fetchHotblock ();  
    	  this.props.fetchAll();
    	  this.scroll = new BScroll(this.refs.wrapper, {scrollY:false, scrollX:true,click:true})
	}
	componentDidUpdate(){
		this.scrollM = new BScroll(this.refs.find, {scrollY:true,click:true, pullUpLoad: {boolean:true,options:{threshold:0,noMoreTxt:"没有更多数据了"}}})
		
	}
	render() {
		return (		
			<Router>
			<div className="find" ref="find">
			 <div className = "find_content" >
			 <Carousel autoplay >{
               this.props.find_banner.map((item,index) => {
               return <div key= { item._id }> <img src={item.logo} /></div>         
               })
               }
             </Carousel> 
              <Route exact path="/find/moretext" component={MoreText}/>
             <div className="find_nav">
              <ul>
                  
                  <li><Link to="/find/moretext"><Icon type="team" style={{ fontSize: 24, color: '#000' }} /><span>众测</span></Link></li>
                  <li><Link to="/find/moretext"><Icon type="message"  style={{ fontSize: 24, color: '#000' }}/><span>栏目</span></Link></li>
                  <li><Link to="/find/moretext"><Icon type="heart" style={{ fontSize: 24, color: '#000' }}/><span>最新</span></Link></li>
                  <li><Link to="/find/moretext"><Icon type="flag" style={{ fontSize: 24, color: '#000' }}/><span>最热</span></Link></li>
              </ul>
             </div>
             
             <div className="find_hot">
               <h1>热门话题</h1>
               <div className="hotblock">{
                this.props.find_hotblock.map((item,index)=>{
                	return <div className="hot" key={ item._id }> <img src={item.topic} /><p>{item.word}</p></div>
                })
               }
               </div>
             </div>
					    <BackTop />
             <div className="topBlock wrapper" ref="wrapper">
                 <div className="topBlock-nav content" ref="content" onClick={this.onTrack.bind(this,"test")}>                     
                        <div  className="Child" style={{color:"red",borderBottom:"2px solid #D61F23"}}>全部</div>
                        <div  className="Child" >实战推荐</div>
                        <div  className="Child" >潮流穿搭</div>
                        <div  className="Child" >健身党</div>
                        <div  className="Child" >跑步有道</div>
                        <div  className="Child" >测评档案</div>
                        <div  className="Child" >数码控</div>
                        <div  className="Child" >绿茵装备率</div>
                        <div  className="Child" >品质生活</div>
                        <div  className="Child" >识在看完</div>               
                 </div>
              </div>

             
             
             <div className="bottom_content">
             {
             this.props.find_all.map((item,index)=>{
                return (
                	  <div key={ item._id } className="asset">
                	      <img className="user_img" src={item.user_img} />
                	       <div className="asset-left">
                	          <h1>{item.user_name}</h1>
                	          <h2>{item.user_date}</h2>
                	          <p>{item.topic_words}</p>
                	          <img src={item.topic_img}/>
                	          <div className="bottom">
                	          <span className="star"><Icon type="heart-o" style={{ fontSize: 16, color: '#000',marginRight:8 }} />{item.star}</span>
                	          <span className="say"><Icon type="message" style={{ fontSize: 16, color: '#000',marginRight:8 }} />{item.say}</span>
                	          </div>
                	       </div>
                	  </div>
                )
             })
             }
             </div>
             
              
      </div>        
			</div>
			
             </Router>
		)
	}
	
}

const mapStateFind2Props = (state) => {
	return {
		    find_banner : state.find_banner,
		    find_hotblock : state.find_hotblock,
		    find_all : state.find_all
	      }
	     
	
}



const mapDispatchFind2Props = (dispatch)=>{
	return {
		 fetchListData:()=>{
		 	fetch("/api/find_swiper").then((res)=>{
		 		return res.json();
		 	}).then((json)=>{
		 		
		 		dispatch({
		 			type:"GET_FIND_LIST",
		 			payload:json
		 		})
		 })
	   },
	    fetchHotblock:()=>{
	    	fetch("/api/find_hotblock").then((res)=>{
	    		return res.json();
	    	}).then((json)=>{
	    		dispatch({
		 			type:"GET_FIND_HOTBLOCK",
		 			hotload:json
		 		})
	    		
	    	})
	    },
	    fetchAll:()=>{
	    	   fetch("/api/find_all").then((res)=>{
	    		return res.json();
	    	}).then((json)=>{
	    		console.log(json)
	    		dispatch({
		 			type:"GET_FIND_ALL",
		 			allload:json
		 		})
	    		
	    	})	
	    }
		 
}
}






const Find = connect(mapStateFind2Props,mapDispatchFind2Props)(FindUI)


export default Find;