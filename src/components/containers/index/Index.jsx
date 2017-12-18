import React from 'react';
// import backend from '../../../backend/Backend';
import SearchBar from '../../include/SearchBar/SearchBar';
import List from '../../include/list/list';
import Grid from '../../include/grid/grid';
import s from './index.less';


const Title = (props) => {
  const info = {...props};
  return (
      <div className={s.title}>
        <i></i>
        <span>{info.title}</span>
      </div>
    )
}
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: 'jian',
      searchBol: false,
    };
  }

  componentDidMount() {
    // TODO
    // backend.getInstance().getProductList({ method: 'POST' }).then((res) => {
    //   console.log(res);
    // });
  }
  
  goEdit = ()=> {
    app.mainView.router.load({
      url: 'p/edit.html'
    })
  }

  render() {
    return (
      <div className='page'>
      <SearchBar disabled={true} placeholder="全部应用"></SearchBar>
        <div className={`page-content ${s.wrap}`}>
          <div className={s.cont} style={this.state.searchBol?{"display":"none"}:null}>
            <div className={s.myApp} onClick={this.goEdit}>
              <span>我的应用</span>
              {
                data.lately.slice(0,5).map((item,index) => {
                  return (
                      <img src={item.icon} alt=""/>
                    )
                })
              }
              <div>
                <img src='./assets/img/省略号.png' alt=""/>
                <span>编辑</span>
              </div>
            </div>

            <div className={s.interval}></div>
            <div className={s.lately}>
              <Title title='最近使用'></Title>
              <Grid info={{'data':data.lately.slice(0,7),'edit':'','type':'lately'}}/>
            </div>

            <div className={s.interval}></div>
            <div>
              <Title title='为你推荐'></Title>
              <div id='foryou' className={s.foryou}>
                <ul style={{'width':`${data.foryou.length*45}%`}}>
                {
                  data.foryou.map((item,index) => {
                    return (
                        <li>
                          <img src={item.src} alt=""/>
                        </li> 
                      )
                  })
                }              
                </ul>
              </div>
            </div>
            
            {
              data.classify.map((item,index) => {
                return (
                      <div className={s.lately}>
                        <Title title={item.title}></Title>
                        <Grid info={{'data':item.data,'edit':'','type':''}}/>
                      </div>
                  )
              })
            }
           
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
