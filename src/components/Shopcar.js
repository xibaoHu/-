import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import "./Shopcar.scss"
import axios from "axios"
import {Icon,Radio ,Checkbox } from 'antd';



export default class Shopcar extends React.Component {
    constructor(){
    	super();
    	this.state = {goodslist:[],money:0};
    	this.delgood =  this.delgood.bind(this);
    	this.inc = this.inc.bind(this);
    	this.dec =this.dec.bind(this);
    	this.btn = this.btn.bind(this);
    	this.onChange = this.onChange.bind(this);
    	
    }
    componentDidMount(){
    	let arr = JSON.parse(localStorage.getItem("goodlist"))
        let allmoney = 0;
        arr.forEach(
        	(item,index)=>{
        		allmoney=item.goods_pirce*item.goods_num;
        	}
        )
        this.setState({goodslist :arr,money:allmoney})
        let dei = document.querySelector(".page-menu")
        dei.style.display = "none" 
      
        }
     onChange(e) {
		  console.log(e.target.checked);
		}
    btn(eve,ele){
    	let btn = document.getElementsByClassName(".rad")[eve];

    }
    inc(eve,ele){
    	let str =JSON.parse(localStorage.getItem("goodlist"))
    	let allmoney = 0;
    	str[eve].goods_num++;
        str.forEach(
        	(item,index)=>{
        		allmoney=item.goods_pirce*item.goods_num;
        	}
        )
    	localStorage.goodlist = JSON.stringify(str);
        this.setState({goodslist :JSON.parse(localStorage.getItem("goodlist")),money:allmoney})	
    }
    dec(eve,ele){
    	let str =JSON.parse(localStorage.getItem("goodlist"))
    	let allmoney = 0;
    	str[eve].goods_num--;
        str.forEach(
        	(item,index)=>{
        		allmoney=item.goods_pirce*item.goods_num;
        	}
        )
    	if(str[eve].goods_num<0){
    		str[eve].goods_num=1;
    	}
    	localStorage.goodlist = JSON.stringify(str);
        this.setState({goodslist :JSON.parse(localStorage.getItem("goodlist")),money:allmoney})
    }
    delgood(eve,ele){
        let str =JSON.parse(localStorage.getItem("goodlist"))
        let allmoney = 0;
        str.forEach(
        	(item,index)=>{
        		allmoney=item.goods_pirce*item.goods_num;
        	}
        )
    	str.splice(eve);
    	localStorage.goodlist = JSON.stringify(str);
        this.setState({goodslist :JSON.parse(localStorage.getItem("goodlist")),money:allmoney})
   
       }
	render() {
		return (
			<div className="Shopcar">
			 <div className="detail_header">
				  <div className="Navleft"><Link to="/accouter"><img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" /></Link></div>
				  <span className="detial_topic"> 购物车 </span>
                   <div className="Navright"><Link to="/more"> <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" /></Link></div>
			 </div>
		     <ul className="shop_goodlist">
               { 
               	 this.state.goodslist.map((item,index)=>{               	 	
               	 	return <li className="shop_list" key={item.goods_id}>
               	 	<div className="shop_bottom rad">
               	 	          <Checkbox className="rad" onChange={this.onChange} >
               	 	          </Checkbox>
                     
               	 	  <img src={ item.goods_img } />
               	 	  <div className="list_right">
	               	 	   <div className="h1">{item.goods_name}
	               	 	    <Icon type="delete" className="del" onClick= {this.delgood.bind(this,index)} />
	               	 	   </div>
	               	 	   <div className="h2">￥{item.goods_pirce}
	               	 	    <div className="changenum">
	               	 	    <button className="inc" onClick={ this.inc.bind(this,index) }>
	  	               	 	    <Icon type="plus" />             	 	    
	               	 	    </button>
	               	 	    <span className="goodsnum">
	               	 	    {item.goods_num}	               	 	    
	               	 	    </span>
	               	 	   <button className="dec" onClick={ this.dec.bind(this,index) }>
	  	               	 	    <Icon type="minus" />             	 	    
	               	 	    </button>
	               	 	    
	               	 	    </div>
	               	 	   </div>
	               	 </div>
               	 	  </div>
               	 	 </li>})
               }
			</ul>
			 <div className="shop_bottom">
			 <div className="shop_ilogin">
			 <Link to="/more" className="gobuy">去结算</Link>
			  <span className="money">总价:￥ {this.state.money}</span>
			 </div>
			    <div className="shop_login">
			     <div className="h3">结算购物车中的商品,需先登录商城</div>
			      <div className="h4">
			       <button>登录</button>
			       <button>注册</button>
			      </div>
			 </div>
			     </div>
			</div>
		)
	}
}