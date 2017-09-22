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
	    this.state = {list:{detial_swiper:[1],detial_content:{smallimg:[],smallname:[]}},goShop:'加入购物车'} 
	    this.onClose = this.onClose.bind(this);
	    this.onOpen = this.onOpen.bind(this);
	    this.shopCar = this.shopCar.bind(this);
	    this.addSC = this.addSC.bind(this);
	}
	componentDidMount(){
		var that = this;
    var dei = document.querySelector(".am-tab-bar")
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
		let wran = this.refs.Shoptran;
	 	wran.style.display="none";
		if( this.state.goShop === '加入购物车' ){
			goShop: '加入购物车'
		}
	}
	onClose(){
		let win = this.refs.dwindow;
		let wrap =this.refs.dwrap;
		win.style.display = "none";
		wrap.style.width = 0;
		this.setState({
			goShop: '加入购物车'
		})
	}
	onOpen(){
		 let win = this.refs.dwindow;
		 let wrap =this.refs.dwrap;
		 win.style.display = "block";
		 wrap.style.width = 3+"rem";
	}
	shopCar(){

      let goodsId = this.props.match.params.id;
      
		  {/*判断商品是否存在购物车*/}		   
		   	let goodsmessage = {
        "goods_img":this.state.list.detial_swiper[0],
        "goods_name":this.state.list.detial_name,
        "goods_pirce":this.state.list.detial_pirce,
        "goods_id":this.props.match.params.id,
        "goods_num":1
       }
		   if(localStorage.getItem('goodlist'))
		   {		  
		   	let goodslist= JSON.parse(localStorage.getItem('goodlist'));
		    let str = localStorage.getItem('goodlist');
		   		goodslist.forEach((item,index)=>{
		   			 if(item.goods_id == goodsId){
		   			 	  item.goods_num ++;
		   			 	 localStorage.goodlist = JSON.stringify(goodslist)
		   			 	 return
		   			 }
		   	   }) 			 				
		   		  if(str.indexOf('"goods_id":'+'"'+goodsId+'"')==-1){		   		   
		   				goodslist.push(goodsmessage)
		   				localStorage.goodlist = JSON.stringify(goodslist)
		   			}
		   }
		   else{
		   	  localStorage.goodlist =JSON.stringify([goodsmessage])
		   }
		
		 
		 
	}
	addSC(){
		let wran = this.refs.Shoptran;
	 	wran.style.display="block";
	 	setTimeout(
 			()=>{
 			wran.style.display="none";
 		},2000)
		 
		this.setState({
			goShop: '查看购物车'
		})
		
		if( this.state.goShop === '查看购物车' ){
			window.location.href = 'http://127.0.0.1/shopcar'
		}
	}
	render() {
		return (
			<div className="detail">
			      {/* 详情页头部*/}
				  <div className="detail_header">
				  <div className="Navleft"><a href="javascript:history.back();"><img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" /></a></div>
				  <span className="detial_topic"> {this.state.list.detial_name} </span>
          <div className="Navright"><Link to="/more"> <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" /></Link></div>
				  </div>
				     {/* 轮播插件*/}
	                <Carousel autoplay >{
	                   this.state.list.detial_swiper.map((item,index)=>{
	                    return <div key={item + index}><img src={item+index } /></div>
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
	                    return <div key={item+index }><img src={item } /></div>
	                   })
	                   }
	                </Carousel>  
	               <div className="h1">{this.state.list.detial_name}</div>
	               <div className="h2">{this.state.list.detial_words}</div>
			           <div className="wrap_bottom">
			            <div className="wrap_goShop" onClick={this.shopCar}>
			             <button className="goShop" onClick={this.addSC}>{this.state.goShop}</button>
			            </div>
			            <span className="wrap_pirce">
                    ￥{this.state.list.detial_pirce}.00
			            </span>
			           </div>
			            {/* 加入购物车*/}
			            <div className="Shoptran" ref="Shoptran">
			               √成功加入购物车
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


