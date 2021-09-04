<template>
  <div class="my">
    <div class="top">
      <span @click="back" class="el-icon-arrow-left"></span>
      <strong>个人中心</strong>
    </div>
    <div v-if="!this.$store.state.my.username" class="top2" @click="login()" type="primary">
      <div>
      <img style="z-index:101" src="https://elm.cangdu.org/img/default.jpg
      " alt="">
      </div>
      <div>
        <p><strong>{{$store.state.my.username}}</strong><span class="el-icon-arrow-right"></span></p>
        <p style="transform:translateY(.8rem)">登录|注册</p>
        
      </div>
    </div>
    <div v-else class="top2" @click="mine()" type="primary">
      <div>
      <img :src="img" alt=""></div>
      <div>
        <p><strong>{{$store.state.my.username}}</strong><span class="el-icon-arrow-right"></span></p>
        <p><span class="el-icon-mobile-phone">暂无绑定手机</span></p>
      </div>
    </div>
    <div class="top3">
      <div @click="balance()">
        <p><strong style="color:orange">{{$store.state.my.balance}}</strong>元</p>
        <p>我的余额</p>
      </div>
      <div @click="coupon()">
        <p><strong style="color:#FF5F3E">{{$store.state.my.gift_amount}}</strong>个</p>
        <p>我的优惠</p>
      </div>
      <div @click="point()">
        <p><strong style="color:#6AC20B" >{{$store.state.my.point}}</strong>分</p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="center">
      <p @click="order()"><span style="color:#FFA500" class="el-icon-s-order"></span> 我的订单<span class="el-icon-arrow-right"></span></p>
      <p @click="point()"><span style="color:#FF5F3E" class="el-icon-s-goods"></span> 积分商城<span class="el-icon-arrow-right"></span></p>
      <p @click="member()"><span style="color:gold" class="el-icon-star-on"></span> 饿了么会员<span class="el-icon-arrow-right"></span></p>
    </div>
    <div class="bottom">
      <p @click="elm()"><span style="color:#409EFF" class="el-icon-phone"></span> 服务中心<span class="el-icon-arrow-right"></span></p>
      <p @click="elm()"><span style="color:#409EFF" class="el-icon-platform-eleme"></span> 下载饿了么APP<span class="el-icon-arrow-right"></span></p>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/img/wink.jpg'
export default {
  name:'my',
  data(){
    return {
      img:img1
    }
  },
  created(){
    // console.log(this.$store.state.my)
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    mine(){
      this.$router.push('/my/mine')
    },
    login(){
      this.$router.push('/login')
    },
    order(){
      this.$router.push('/order')
    },
    balance(){
      this.$router.push('/balance')
    },
    coupon(){
      this.$router.push('/coupon')
    },
    point(){
      this.$router.push('/point')
    },
    elm(){
      this.$router.push('/elm')
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
  background-color: #3190E8;
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
.top2 div:nth-child(2){
  float: left;
  color: white;
  width: 76%;
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
.my{
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
</style>