import React, { Component } from 'react';
import { Input, Icon ,Carousel} from 'antd';
import "./Accouter.css"
import axios from "axios"
import Detail from"./Detail"
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import BScroll from 'better-scroll';

export default class Accouter extends Component {
	constructor(){
		 super();
		 this.state = {types:[],goods:[]} 
		
	}
	componentDidMount(){
		var that = this;
		 
			axios.get('/api/accouter_bigImage'
			  )
			  .then(function (res) {
			 that.setState({
					types:res.data
				})
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		
		 	axios.get('/api/accouter_good'
      ).then(function(res){
	        console.log(res)
	        that.setState({
	        	goods: res.data	        	
	        })
      })
      .catch(function(error){
      	console.log(error); 
      })
		
	this.scrollM = new BScroll(this.refs.acc, {scrollY:true,click:true})
	}
   componentDidUpdate(){
		this.scrollM = new BScroll(this.refs.acc, {scrollY:true,click:true})
		
	}
	render() {
		return (
			<Router>
             {/* 装备页*/}
			 <div className="accouter" ref="acc">
            {/* 搜索框*/}
                <div className="accouter_swiper">
				 <div className="accouter_search">
				  <Icon type="search" className="search"/>
				  <input type="search" placeholder="搜索最好的运动装备" / >
				  <Icon type="ellipsis" className="ellipsis"/>
				 </div>
            {/* 导航*/}
			     <div className="accouter_content1">
			     <Link className="content1"  to="/" ><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-1_f79f337.png" style = {{ width:"0.43rem",margin :"0 0.2rem 0.065rem 0.4rem"}}/><span>热销排行</span></Link>
			     <Link className="content1"  to="/" style={{borderLeft:"1px #5c5c5c solid",borderRight:"1px #5c5c5c solid"}}><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-2_4b3ef21.png"/><span>好价精选</span></Link>
			     <Link className="content1"  to="/"><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-3_680282c.png"/><span>当季新歌</span></Link>
			     </div>
			{/*栏目种类*/}
			      <div className="content_types">
			         {
			         	this.state.types.map( (item,index)=>{
			         		return (<div className="types_item" key={item._id}>
			         		         <div className="types_top">
			         		         <img src={item.background} className="types_bkground"/>
			         		         <div className="wraper">
			         		         <div className="wraper_left">
			         		         <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png" />
			         		         </div>			         		         
			         		         <div className="wraper_right">
			         		         <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png" />
			         		         </div>
			         		         <div className="h2"><s>{item.topic1}</s>{item.topic2}</div>
			         		          <p> {item.txt1}</p>
			         		          <p> {item.txt2}</p>
			         		         <div className="clearfix">
			         		            <div className="boxF">
			         		               <div className="boxS">
			         		                <img src={item.good1}/>
			         		               </div>
			         		            </div>
			         		           <div className="boxF">
			         		               <div className="boxS">
			         		                <img src={item.good2}/>
			         		               </div>
			         		            </div>
			         		            <div className="boxF">
			         		               <div className="boxS">
			         		                <img src={item.good3}/>
			         		               </div>
			         		            </div>
			         		            <div className="boxF">
			         		               <div className="boxS">
			         		                <img src={item.good4}/>
			         		               </div>
			         		            </div>			         		            
			         		         </div>
			         		        </div>
			         		         
			         		         </div>
			         		          <div className="types_bottom">{
			         		          	 
			         		              item.types.map((item1,index1)=>{
			         		               return <div className="type_ranges" key={item1}>{item1}</div>
			         		              })
			         		              }
			         		          </div>
			         		          
			         		         </div>)
			         	})
			         }
			      </div>			      
			        {/*商品列表*/}
			          <div className="newCommend">
			                 <div className="h2">最新推荐</div>
			                 <ul className="commend_content">
			                 {
			                 	this.state.goods.map((item,index)=>{
			                return (<li className="accouter_goods" key={item.good_id}>
			    		            <Link to={"/detail/" + item.good_id}>
			    		               <img src={item.good_image}/>
			    		               <div className="goods_right">
			    		                 <div className="title">
			    		                   {item.good_topic}
			    		                 </div>
			    		                <div className="txt">
			    		                  {item.good_detial}
			    		                </div>
			    		                <div className="pirce">
			    		                 &gt 淘宝
			    		                 <span className="pirce_left">{item.good_pirce}</span>
			    		                 <span className="price_right"><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-2_2bc8bc4.png"/>{item.good_commit}</span>
			    		                </div>
			    		               </div>
			    		            </Link>
			                 		</li>)
			                 	})
			                 }
			                 	</ul>
			          </div>
			      
			      
			      </div>
			</div>
			</Router>
			
		)
	}
}


