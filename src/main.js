import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
// rem适配
import 'lib-flexible'
// 样式文件
import './style/base.less'
import './style/iconfont.css'
import moment from 'moment'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.baseURL = 'http://localhost:3000'
//使用ui组件库，vant
import { Field,Toast,Tab,Tabs,Tabbar,TabbarItem,Cell,CellGroup,Dialog,Radio,RadioGroup } from "vant";

Vue.use(Field);
Vue.use(Toast);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup)

//注册组件
import tmpheader from './components/tmp-header.vue'
import tmplogo from './components/tmp-logo.vue'
import tmpbutton from './components/tmp-button.vue'
import tmptabbar from './components/tmp-tabbar.vue'
// import tmpnav from './components/tmp-nav.vue'
Vue.component('tmp-header',tmpheader)
Vue.component('tmp-logo',tmplogo)
Vue.component('tmp-button',tmpbutton)
Vue.component('tmp-tabbar',tmptabbar)
// Vue.component('tmp-nav', tmpnav)
// 请求拦截器
axios.interceptors.request.use(config=>{
  let token = localStorage.getItem('token')
  if(token){
    config.headers.Authorization = token
  }
  return config
})
Vue.filter('date',function(val,format='YYYY-MM-DD'){
  return moment(val).format(format)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
