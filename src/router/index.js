import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Login=()=>import ('../views/Login')
const City=()=>import ('../views/City')
const CHotels=()=>import ('../components/CHotels')
const Hotels=()=>import ('../views/Hotels')
const Search=()=>import ('../views/Search')
const Order=()=>import ('../views/Order')
const My=()=>import ('../views/My')
const CKinds=()=>import ('../components/CKinds')
const Kinds=()=>import ('../views/Kinds')
const Detail=()=>import ('../views/Detail')
const Mine=()=>import ('../views/Mine')
const UpName=()=>import ('../views/UpName')
const Balance=()=>import ('../views/Balance')
const Point=()=>import ('../views/Point')
const Coupon=()=>import ('../views/Coupon')
const Elm=()=>import ('../views/Elm')
const Money=()=>import ('../views/Money')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/login',
    name:'login',
    component:Login
  },{
    path:'/city',
    name:'city',
    component:City
  },{
    path:'/chotels',
    name:'chotels',
    redirect:'/hotels',
    component:CHotels,
    children:[{
      path:'/hotels',
      name:'hotels',
      component:Hotels
    },{
      path:'/search',
      name:'search',
      component:Search
    },{
      path:'/order',
      name:'order',
      component:Order
    },{
      path:'/my',
      name:'my',
      component:My
    }]
  },{
    path:'/ckinds',
    name:'ckinds',
    component:CKinds,
    redirect:'/kinds',
    children:[{
      path:'/kinds',
      name:'kinds',
      component:Kinds
    }]
  },{
    path:'/detail',
    name:'detail',
    component:Detail
  },{
    path:'/my/mine',
    name:'mine',
    component:Mine
  },{
    path:'/my/mine/upname',
    name:'upname',
    component:UpName
  },{
    path:'/balance',
    name:'balance',
    component:Balance
  },{
    path:'/point',
    name:'point',
    component:Point
  },{
    path:'/coupon',
    name:'coupon',
    component:Coupon
  },{
    path:'/elm',
    name:'elm',
    component:Elm
  },{
    path:'/money',
    name:'money',
    component:Money
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
