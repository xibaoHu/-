import React, { Component } from 'react';
import axios from "axios"
import { Carousel ,Icon } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import "./Detail.css"

export default class Detail extends Component {
	constructor(){
		super();
	    this.state = {list:{detial_swiper:[1],detial_content:{smallimg:[],smallname:[]}}} 
	    this.onClose = this.onClose.bind(this);
	    this.onOpen = this.onOpen.bind(this);
	}
	componentDidMount(){
		var that = this;
    var dei = document.querySelector(".page-menu")
    dei.style.display = "none"
		var url1 = '/api/detial?detial_id='+this.props.match.params.id;
			axios.get(url1)
			  .then(function (res) {
			    that.setState({
					list:res.data[0]
				})
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
	}
	onClose(){
		 let win = this.refs.dwindow;
		 let wrap =this.refs.dwrap;
		 win.style.display = "none";
		 wrap.style.width = 0; 
	}
	onOpen(){
		 let win = this.refs.dwindow;
		 let wrap =this.refs.dwrap;
		 win.style.display = "block";
		 wrap.style.width = 3+"rem";
	}
	render() {
		return (
			<div className="detail">
			      {/* 详情页头部*/}
				  <div className="detail_header">
				  <div className="Navleft"><Link to="/accouter"><img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" /></Link></div>
				  <span className="detial_topic"> {this.state.list.detial_name} </span>
          <div className="Navright"><Link to="/more"> <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" /></Link></div>
				  </div>
				     {/* 轮播插件*/}
	                <Carousel autoplay >{
	                   this.state.list.detial_swiper.map((item,index)=>{
	                    return <div key={item}><img src={item } /></div>
	                   })
	                   }
	                </Carousel>
	           {/* 商品信息*/}      
	              <div className="detail_words">
	               <div className="h1">{this.state.list.detial_name}</div>
	               <div className="h2">{this.state.list.detial_words}</div>
	              </div>
                  <div className="detail_type">
                    <div className="detail_left">
                      <span className='detial_all'>全部</span>
                      <span className='detial_num'>{this.state.list.detial_num}</span>
                    </div>
                    <div className="detail_right">
                      <div className="detail_righttop">
                     {
                     	  this.state.list.detial_content.smallimg.map((item,index)=>{
                     	  	return <div className="detail_other" key={item }> <img src={item} /></div>
                     	  })
                     }
                     </div>
                     <div className="detial_rightbottom">
                     {
                     	   this.state.list.detial_content.smallname.map((item,index)=>{
                     	  	return <div className="detail_othername" key={item+index}> {item}</div>
                     	   })
                     	  }
                     
                     </div>
                    </div>
                  </div>
			      {/* 详情页小窗*/}
			    <div className="detail_window" ref="dwindow"></div>
			    
			       <div className="detial_wrap" ref="dwrap">
			          <span className="close" onClick={this.onClose}>X</span>
			              <Carousel autoplay >{
	                   this.state.list.detial_swiper.map((item,index)=>{
	                    return <div key={item}><img src={item } /></div>
	                   })
	                   }
	                </Carousel>  
	               <div className="h1">{this.state.list.detial_name}</div>
	               <div className="h2">{this.state.list.detial_words}</div>
			           <div className="wrap_bottom">
			            <Link to="/shopcar">
			             <button className="goShop">去购买</button>
			            </Link>
			            <span className="wrap_pirce">
                    ￥{this.state.list.detial_pirce}.00
			            </span>
			           </div>
			       </div>
			    
              {/* 底部购买*/}
				     <div className="detail_bottom">
				        <div className="cilckgood">
				              点赞
				              </div>
				        <div className="buy_button">
				        <button ref="buyintime" onClick={ this.onOpen }>立即购买</button>
				            </div>
							</div>
							</div>
		)
	}
}


