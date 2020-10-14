//引入vue
import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//vue使用vue-router
Vue.use(VueRouter)
// 配置路由对象
//引入对应组件
import login from '../views/login.vue'
import register from '../views/register.vue'
import index from '../views/index.vue'
import setting from '../views/setting.vue'
import attention from '../views/attention.vue'
import hot from '../views/hot.vue'
import funny from '../views/funny.vue'
import headline from '../views/headline.vue'
import sport from '../views/sport.vue'
import edit from '../views/Edit.vue'
const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/register',
    name:'register',
    component:register
  },
  {
    path:'/index',
    name:'index',
    component:index,
    children : [
      {path:'/',redirect:'attention'},
      {path:'attention',component:attention},
      {path:'headline',component:headline},
      {path:'hot',component:hot},
      {path:'funny',component:funny},
      {path:'sport',component:sport},
    ]
  },
  {
    path:'/setting',component:setting
  },
  {
    path:'/Edit',component:edit
  }
]
// 挂载路由对象
const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

//全局路由前置守卫
router.beforeEach((to,from,next)=>{
  // from 打哪来
  // to 到哪去
  // next是否放行 next()放行  next(false)不放行  next('/login')前往login页
  if(to.path === '/setting'){
    const token = localStorage.getItem('token')
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }


})
// 对外导出路由对象
export default router