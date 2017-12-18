import React from 'react';
import Grid from '../../include/grid/grid';
import CSSModules from 'react-css-modules';
import Sortable from 'sortablejs';
import s from './edit.less';


window.editSave = function() {
	window.app.mainView.router.back({
		url: 'p/index.html'
	})
}
const Title = (props) => {
  const info = {...props};
  return (
      <div className={s.title}>
        <i></i>
        <span>{info.title}</span>
      </div>
    )
}

class Edit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myAppH: '',
			data: data,
		}
	}

	componentDidMount() {
		KQB.native("navigationBarMenu",{
			menuList: [{
				name: '完成',
				functionName: 'editSave'
			}]
		})

		//延时获取高度
		setTimeout(() => {
			this.setState({
				myAppH: $$('#myApp').height(),
			})
		},3)
		
		var dragCont = document.getElementById('dragCont');
		var arr = dragCont.getElementsByTagName('li');
		if(navigator.userAgent == 'Mozilla/5.0 (Linux; Android 7.0; SM-G9500 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.116 Mobile Safari/537.36 KuaiQianBao/5.0.0.27') {
			var option ={
				group: '#dragCont', // 拖动元素所在的容器
				draggable: 'li', //可以被拖动的元素
				animation: 100, //拖动时的动画时间
				delay: 0, //拖动的时延
			};
		}else {
			var option ={
				group: '#dragCont', // 拖动元素所在的容器
				draggable: 'li', //可以被拖动的元素
				animation: 100, //拖动时的动画时间
				delay: 300, //拖动的时延
				onChoose: function(e){
					
				},
				chosenClass: s.active,
				onStart: function(){
					for(var i = 0; i < arr.length; i++) {
						arr[i].classList.remove(s.active)
					}
				},
				// onEnd: function(){
					
				// }
			};
		}
		
		Sortable.create(dragCont, option);
	}
	
	changeState = (data) => {
		this.setState({
			totalData: data
		});
		setTimeout(() => {
      this.setState({
				myAppH: $$('#myApp').height(),
			})
    },10)
	}

	render() {
		return (
				<div className='page'>
					<div className={s.myApp} id='myApp'>
						<div className={s.title1}>
							<span>我的应用</span>
							<span>(按住拖动调整排序)</span>
						</div>
						<Grid info={{'data':this.state.data.myApp.slice(0,11),'edit':true,'type':'myApp',totalData:this.state.data,changeState:this.changeState}}/>
						<div className={s.interval}></div>
					</div>
					<div className='page-content'>
						<div className={s.wrap} style={{'paddingTop':`${this.state.myAppH}px`}}>

							{
	              this.state.data.classify.map((item,index) => {
	                return (
	                      <div className={s.lately}>
	                        <Title title={item.title}></Title>
	                        <Grid info={{'data':item.data,'edit':'true','type':'',totalData:this.state.data,changeState:this.changeState}}/>
	                      </div>
	                  )
	              })
	            }
						</div>
					</div>
				</div>
			)
	}
}

export default CSSModules(Edit,s);