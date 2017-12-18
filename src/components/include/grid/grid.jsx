import React from 'react';
import s from './grid.less';


class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	componentDidMount() {
    
	}
  
  //增加删除方法
  editFun = (item) => {
    var totalData = this.props.info.totalData;
    if(this.props.info.type == 'myApp'){
      totalData.myApp.splice(totalData.myApp.indexOf(item),1);
      totalData.classify.forEach((ele,index) => {
        ele.data.forEach((ele1,index1) => {
          if(ele1.icon == item.icon && ele1.text == item.text){
            ele1.myBol = false;
            return false;
          }
        })
      })
      this.props.info.changeState(totalData);
      
    }else {
      if(item.myBol){
        totalData.myApp.forEach((ele,index) => {
          if(ele.icon == item.icon && ele.text == item.text) {
            totalData.myApp.splice(index,1);
            return false;
          }
        })
        totalData.classify.forEach((ele,index) => {
          if(ele.data.indexOf(item) >= 0){
            ele.data[ele.data.indexOf(item)].myBol = false;
            return false;
          }
        })
        this.props.info.changeState(totalData);
      }else {
        if(totalData.myApp.length >= 11) {
          if(KQB.Env.KQ){
            KQB.native("showToast", {message: "最多添加11个应用"})
          }else{
            app.alert('最多添加11个应用');
          }
          // app.alert('最多添加11个应用');
        }else {
          totalData.myApp.push({
            icon: item.icon,
            text: item.text
          });
          totalData.classify.forEach((ele,index) => {
            if(ele.data.indexOf(item) >= 0){
              ele.data[ele.data.indexOf(item)].myBol = true;
              return false;
            }
          })
          this.props.info.changeState(totalData);
        }
      }
    }
  }
  
  matchData = (item,type) => {
    if(type == 'myApp') {
      
    }else {

    }
  }
  
  goMore = () => {
    app.mainView.router.load({
      url: 'p/more.html'
    })
  }

	render() {
		return (
			<ul className={s.grid} id={this.props.info.type == 'myApp'?'dragCont':null}>
        {
          this.props.info.data[0]?
          this.props.info.data.map((item,index) => {
            return (
                <li>
                  <div style={this.props.info.edit?{'background-color':'#f6f6f6'}:null}>
                    <i className={this.props.info.edit?this.props.info.type == 'myApp'?s.jianhao:item.myBol?s.jianhao:s.jiahao:null} onClick={this.editFun.bind(this,item)}></i>
                    <img src={item.icon} alt=""/>
                    <div>
                      <span>{item.text}</span>
                    </div>
                  </div>
                </li>
              )
          }):<li className={s.noApp}></li>
        }
        {
        	this.props.info.data.length >= 7 && !this.props.info.edit && this.props.info.type == 'lately'?
        	<li onClick={this.goMore}>
           <div>
	            <img src='./assets/img/更多.png' alt=""/>
	            <div>
	              <span>更多</span>
	            </div>
          	</div>
          </li>:null
        	
        }
      </ul>


			)
	}
}
export default Grid;