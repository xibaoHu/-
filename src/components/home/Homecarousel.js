import React, { Component } from 'react'
import { Carousel } from 'antd'

class Homecarousel extends Component {
	render(){
		return(
			<Carousel autoplay>
			    <div>
			    	<img src="http://shihuo.hupucdn.com/appHome/201709/1610/8b744d9ebd51f2df0e9c6c96caedf170.jpg?imageView2/2/w/750/h/380/interlace/1"/>
			    </div>
			    <div>
			    	<img src="http://shihuo.hupucdn.com/appHome/201709/1610/9c892d452a3695e159788bc3653bf0d0.jpg?imageView2/2/w/750/h/380/interlace/1"/>
			    </div>
			    <div>
			    	<img src="http://shihuo.hupucdn.com/appHome/201709/1511/2e1cb17e072046af029668ce685ba9d9.jpg?imageView2/2/w/750/h/380/interlace/1"/>
			    </div>
			    <div>
			    	<img src="http://shihuo.hupucdn.com/appHome/201709/1518/af0cb1cd2bee014559a762500d232592.jpg?imageView2/2/w/750/h/380/interlace/1"/>
			    </div>
			    <div>
			    	<img src="http://shihuo.hupucdn.com/appHome/201709/1612/46dae110861b347abd9b021d0656ce93.jpg?imageView2/2/w/750/h/380/interlace/1"/>
			    </div>
			 </Carousel>
		)
	}
}

export default Homecarousel