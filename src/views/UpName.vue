<template>
  <div class="mine">
  <el-drawer
  title="我是标题"
  :visible.sync="drawer"
  :with-header="false"
  :size="'100%'"
  class="drawer"
  style="background-color:gray">
    <div class="top">
      <span @click="back" class="el-icon-arrow-left"></span>
      <strong>账户信息</strong>
    </div>
    <div class="center3">
      <input :style="style1" @input="input()" v-model="inpV" type="text" placeholder="请输入用户名">
      <p>用户名只能修改一次（5-24字符之间）</p>
    </div>
    <div class="button">
      <el-button @click="upname()" type="primary">确认修改</el-button>
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
      drawer:false,
      inpV:'',
      color:color
    }
  },
  created(){
    this.drawer=true
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    out(){
      this.$store.commit('outMy');
      this.$router.push('/my')
    },
    upname(){
      this.$store.state.my.username=this.inpv;
      this.$router.push('/my/mine')
    },
    input(){
      
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
  height: 100vh;
  background-color: #F2F2F2;
}
.center3{
  padding: 1rem;
}
input{
  width: 100%;
  height: 2rem;
  border:.01rem solid gainsboro;
  border-radius: .2rem;
  padding-left: .4rem;
}
p{
  margin-top: .4rem;
  font-size: .6rem;
  color: gray;
}
.color{
  border:.01rem solid red;
}
</style>