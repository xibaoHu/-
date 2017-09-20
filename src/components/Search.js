import  React, { Component } from 'react';
import '../css/search.css'

export default class Search extends React.Component {
	constructor(){
		super();
		this.state = { 
			intValue: '',
			innerC: 'block',
			innerList:''
		};
		this.searchChange = this.searchChange.bind(this);
	}
	componentDidMount(){
	}
	searchChange(){
		//console.log(this.refs.yh_input.value)
		if( this.refs.yh_input.value === '' ){
			this.state.innerList = [];
			this.setState({
				innerList: this.state.innerList,
				innerC: 'block'
			})
			//console.log(this.state)
		}else {
			this.state.intValue = this.refs.yh_input.value;
			this.setState({
				intValue: this.state.intValue
			})
		
			const innerReg1 = /^[\u4e00-\u9fa5]+$/;  //中文
			const innerReg2 = /^[0-9a-zA-Z]+$/;  //数字字母
			if( innerReg1.test( this.state.intValue ) || innerReg2.test( this.state.intValue ) ) {
				this.setState({
					innerC: 'none'
				});
				fetch("/api/search?SearchP="+this.state.intValue).then((res)=>{
			      	return res.json();
			    }).then((data)=>{
			    	if( data.result === '无该商品' ){
			    		this.state.innerList = ['暂无该关键字搜索内容'];
				    	this.setState({
							innerList: this.state.innerList,
							innerC: 'block'
						})
			    	}else {
			    		var sList = data[0].Product.replace('[','').replace(']','').split(',');
				    	this.state.innerList = sList;
				    	this.setState({
							innerList: this.state.innerList
						})
				    	//;
			    	}
			    })
			}
		}
	}
	render(){
		return(
			<div className="search_">
				<div className="searchTop">
					<div className="searchTop_int">
						<i className="icon iconfont icon-sousuo"></i>
						<input type="text" name="search" onChange={this.searchChange} placeholder="搜索全网低价好好货" className="searchVal" ref='yh_input'/>
					</div>
					<a href="javascript:history.back();">取消</a>
				</div>
				<div className="innerList">
					<ul>
						{
							this.state.innerList ? this.state.innerList.map((item)=>{
								return <li key={"s_l_" + item}><a href="/#">{item}</a></li>;
							}) : ''
						}
					</ul>
				</div>
				<div className="inner" id="searchWrapper" style={{display:this.state.innerC}}>            
					<dl>                
						<dt>热门搜索</dt>                
						<dd className="sear_hot">              
							<a href="/#">欧文</a>                  
							<a href="/#">Jordan</a>                  
							<a href="/#">boost</a>                  
							<a href="/#">PG1</a>                  
							<a href="/#">赤足</a>                  
							<a href="/#">紧身衣</a>                  
							<a href="/#">键盘</a>                  
							<a href="/#">洗面奶</a>                  
							<a href="/#">余文乐</a>                  
							<a href="/#">球鞋90秒</a>                  
							<a href="/#">跑步评测室</a>                  
							<a href="/#">跑鞋全知道</a>                
						</dd>                
						<dt className="his">历史搜索</dt>                
						<dd className="sear_record clearfix">                    
							<ul className="his">                                          
							</ul>                
						</dd>                
						<dd>                  
							<p className="clear_history his">                    
								<a href="javascript:alert('清除成功');" id="clear_history">清空历史记录</a>
							</p>                
						</dd>            
					</dl>        
				</div>
			</div>
		)
	}
	
}
