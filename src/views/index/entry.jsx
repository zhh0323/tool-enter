import 'assets/css/global.less';
import 'assets/css/mod_css/normal.less';
import createApp from '../../utils/createApp';
import router from '../../routes/route';

if (process.env.NODE_ENV === 'development' && process.env.DEBUG) {
  
}
const eruda = require('eruda');
  // open debug mode
  eruda.init();
window.$$ = Dom7; //eslint-disable-line

window.globalParams = {};

window.app = createApp(router);

window.app.mainView = window.app.addView('.view-main',{domCache: true});

if (location.hash === '') {
  window.app.mainView.router.load({
    url: 'p/index.html',
    animatePages: true,
  });
}
window.data = {
  lately:[{
    icon: './assets/img/爱心捐赠.png',
    text: '爱心捐赠'
  },{
    icon: './assets/img/打车.png',
    text: '打车'
  },{
    icon: './assets/img/当面付.png',
    text: '当面付'
  },{
    icon: './assets/img/记账本.png',
    text: '记账本'
  },{
    icon: './assets/img/手机充值.png',
    text: '手机充值'
  },{
    icon: './assets/img/运动.png',
    text: '运动'
  },{
    icon: './assets/img/转账.png',
    text: '转账'
  },{
    icon: './assets/img/水电煤.png',
    text: '水电煤'
  },{
    icon: './assets/img/运动.png',
    text: '运动'
  }],
  foryou:[{
    src: './assets/img/11.png'
  },{
    src: './assets/img/11.png'
  },{
    src: './assets/img/11.png'
  },{
    src: './assets/img/11.png'
  },{
    src: './assets/img/11.png'
  },{
    src: './assets/img/11.png'
  },{
    src: './assets/img/11.png'
  }],
  classify:[{
    title: '便民生活',
    data:[{
      icon: './assets/img/爱心捐赠.png',
      text: '爱心捐赠',
      myBol: false
    },{
      icon: './assets/img/打车.png',
      text: '打车',
      myBol: true
    },{
      icon: './assets/img/当面付.png',
      text: '当面付',
      myBol: true
    },{
      icon: './assets/img/记账本.png',
      text: '记账本',
      myBol: true
    },{
      icon: './assets/img/手机充值.png',
      text: '手机充值',
      myBol: true
    },{
      icon: './assets/img/水电煤.png',
      text: '水电煤',
      myBol: false
    },{
      icon: './assets/img/城市一卡通.png',
      text: '城市一卡通',
      myBol: false
    },{
      icon: './assets/img/城市服务.png',
      text: '城市服务',
      myBol: false
    },{
      icon: './assets/img/快递.png',
      text: '快递',
      myBol: false
    },{
      icon: './assets/img/机票.png',
      text: '机票',
      myBol: false
    }]
  },{
    title: '财富管理',
    data:[{
      icon: './assets/img/付款码.png',
      text: '付款码',
      myBol: false
    },{
      icon: './assets/img/信用卡还款.png',
      text: '信用卡还款',
      myBol: false
    },{
      icon: './assets/img/工资.png',
      text: '工资',
      myBol: true
    },{
      icon: './assets/img/扫一扫.png',
      text: '扫一扫',
      myBol: true
    },{
      icon: './assets/img/收款.png',
      text: '收款',
      myBol: true
    },{
      icon: './assets/img/股票.png',
      text: '股票',
      myBol: false
    },{
      icon: './assets/img/转账.png',
      text: '转账',
      myBol: false
    },{
      icon: './assets/img/随身贷.png',
      text: '随身贷',
      myBol: false
    }]
  },{
    title: '购物娱乐',
    data:[{
      icon: './assets/img/娱乐宝.png',
      text: '娱乐宝',
      myBol: false
    },{
      icon: './assets/img/彩票.png',
      text: '彩票',
      myBol: true
    },{
      icon: './assets/img/游戏充值.png',
      text: '游戏充值',
      myBol: true
    },{
      icon: './assets/img/购物.png',
      text: '购物',
      myBol: false
    },{
      icon: './assets/img/运动.png',
      text: '运动',
      myBol: false
    }]
  }],
  myApp:[{
      icon: './assets/img/打车.png',
      text: '打车'
    },{
      icon: './assets/img/当面付.png',
      text: '当面付'
    },{
      icon: './assets/img/记账本.png',
      text: '记账本'
    },{
      icon: './assets/img/手机充值.png',
      text: '手机充值'
    },{
      icon: './assets/img/工资.png',
      text: '工资'
    },{
      icon: './assets/img/扫一扫.png',
      text: '扫一扫'
    },{
      icon: './assets/img/收款.png',
      text: '收款'
    },{
      icon: './assets/img/彩票.png',
      text: '彩票'
    },{
      icon: './assets/img/游戏充值.png',
      text: '游戏充值'
    }]
}


window.addEventListener('popstate',() => {
	KQB.native("navigationBarMenu",{
		menuList: [{
			name: '',

		}]
	})
})