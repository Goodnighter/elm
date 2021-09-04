<template>
  <div class="mine">
  <el-drawer
  title="我是标题"
  :visible.sync="drawer"
  :with-header="false"
  :size="'100%'"
  class="drawer"
  style="background-color:gray">
    <input type="file" style="position:fixed;width:100%;height:6rem;top:3rem;opacity: 0;">
    <div class="top">
      <span @click="back" class="el-icon-arrow-left"></span>
      <strong>账户信息</strong>
    </div>
    <div style="border-bottom:.01rem solid gainsboro;height:6rem" class="top2" type="primary">
      
      <div >
      
      <img style="z-index:101" src="https://elm.cangdu.org/img/default.jpg
" alt=""></div>
      <div>
        <p style="color:#409EFF;font-size:1.4rem"><strong>{{$store.state.my.username}}</strong></p>
        <p style="color:gray;font-size:.8rem"><span class="el-icon-mobile-phone">暂无绑定手机</span></p>
      </div>
    </div>
    
    <div class="center">
      <p @click="upUsername"> 用户名<span class="el-icon-arrow-right"></span></p>
      <p @click="address()"> 收货地址<span class="el-icon-arrow-right"></span></p>
      
    </div>
    <div class="bgc">
    账号绑定</div>
    <div class="bottom">
      <p><span style="color:#409EFF" class="el-icon-phone"></span> 手机<span class="el-icon-arrow-right"></span></p>
      
    </div>
    <div class="bgc">
    安全设置</div>
    <div class="bottom">
      <p> 修改密码<span class="el-icon-arrow-right"></span></p>
      
    </div>
    <div class="button">
      <el-button @click="out()" type="danger">退出登录</el-button>
    </div>
  </el-drawer>
    
  </div>
</template>

<script>
import img1 from '../assets/img/wink.jpg'
export default {
  name:'mine',
  data(){
    return {
      img:img1,
      drawer:false
    }
  },
  created(){
    this.drawer=true
  },
  methods:{
    back(){
      this.$router.push('/my');
    },
    out(){
      this.$store.commit('outMy');
      this.$router.push('/my')
    },
    upUsername(){
      this.$router.push('/my/mine/upname')
    }
  }
}
</script>

<style scoped>
.top{
background-color: #3190E8;
height: 3rem;
color: white;
line-height: 3rem;
padding: 0 0.6rem;
overflow: hidden;
font-size: 1.6rem;
}
.top strong{
  font-size: 1.2rem;
  float: right;
  transform: translateX(-180%);
  
}
.top2{
  height: 4rem;
  background-color: white;
  border-top: .001rem solid whitesmoke;
  padding: 1rem;
  overflow: hidden;
}
.top2 div:first-child{
  float: left;
  width: 20%;
  
}
.top2 div:first-child img{
  width: 100%;
  border-radius: 50%;
}
.top2 div:nth-child(1){
  float: right;
  width: 20%;
  height: 3.4rem;
}
.top2 div:nth-child(2) p{
  line-height: 1.8rem;
  margin-left: .6rem;
  font-size: 1.2rem;
}
.top2 div:nth-child(2) p span:nth-child(2){
  float: right;
  transform: translateY(1.2rem);
}
.top3{
  overflow: hidden;
}
.top3 div{
  float: left;
  width: 33%;
  text-align: center;
  background-color: white;

}
.top3 div:nth-child(2){
  border-left: .01rem solid gainsboro;
  border-right: .01rem solid gainsboro;
}
.top3 div p:first-child{
  padding: 1.1rem;
  color: gray;
  font-size: .8rem;
}
.top3 div p:nth-child(2){
  color: gray;
  font-size: .8rem;
  margin-bottom: 1rem;
}
.top3 div p:first-child strong{
  font-size: 2rem;
  font-family:Sans-serif;
}
.mine{
  background-color: #F5F5F5;
  height: 100vh;
}
.center{
  margin-top: 1rem;
  background-color: white;
  overflow: hidden;
}
.center p{
  padding: .6rem;
  border-bottom: .01rem solid gainsboro;
}
.center p:last-child{
  border-bottom: none;
}
.center p span:last-child{
  float: right;
}
.bottom{
  margin-top: 1rem;
  background-color: white;
  overflow: hidden;
}
.bottom p{
  padding: .6rem;
  border-bottom: .01rem solid gainsboro;
}
.bottom p:last-child{
  border-bottom: none;
}
.bottom p span:last-child{
  float: right;
}
button{
  margin: 1.8rem;
  width: 82%;
}
.drawer{
  overflow: hidden;
}
.bgc{
  background-color: #F2F2F2;
  color: gray;
  font-size: .7rem;
  padding: .6rem;
  
}
.button{
  width: 100%;
  height: 40%;
  background-color: #F2F2F2;
}
</style>