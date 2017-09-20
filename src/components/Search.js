import  React, { Component } from 'react';
import '../css/search.css'

export default class Search extends React.Component {
	constructor(){
		super();
		this.state = { 
			intValue: '' 
		};
		this.searchChange = this.searchChange.bind(this);
	}
	componentDidMount(){
	}
	searchChange(){
		this.state.intValue = this.refs.yh_input.value;
		this.setState({
			intValue: this.state.intValue
        })
		console.log(this.state)
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
				<div className="inner" id="searchWrapper">            
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
