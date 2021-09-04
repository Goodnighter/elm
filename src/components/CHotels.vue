<template>

  <div class="hotels">
  <router-view></router-view><div class="bar">
      <router-link to="/hotels"><div><p class="el-icon-eleme"></p><p>外卖</p></div></router-link>
      <router-link to="/search"><div><p class="el-icon-s-shop"></p><p>搜索</p></div></router-link>
      <router-link to="/order"><div><p class="el-icon-s-order"></p><p>订单</p></div></router-link>
      <router-link to="/my"><div><p class="el-icon-user-solid"></p><p>我的</p></div></router-link>
      
    </div>
  </div>
</template>

<script>
export default {
  name:'chotels',
  data(){
    return {
      
    }
  },
  created(){
    
    
  },
  computed:{
    
  },
  methods:{
    login(){
      this.$router.push('/login')
    },
  }
}
</script>

<style scoped>
strong{
border: none;
display: inline-block;
width: 70%;
height: 1.3rem;
overflow: inherit;}
.top{
background-color: #3190E8;
height: 3rem;
color: white;
line-height: 3rem;
padding: 0 0.6rem;
overflow: hidden;
text-align: center;
position:fixed;
z-index: 3;
top: 0;
width: 95%;

}
.top span:nth-child(1){
float: left;
font-size: 1.4rem;
transform: translateY(1rem);
}
.top span:nth-child(2){
float: right;
}
.top span:nth-child(3){
width: 2rem;
overflow: hidden;
}
.bar{
border-top: 1px solid gainsboro;
position: fixed;
bottom:0;
height: 3rem;
z-index: 3;
width: 100%;
background-color: white;
color: gray;
}
.bar div{
float: left;
width: 25%;
text-align: center;
font-size: .6rem;}
.bar p:first-child{
font-size: 1.6rem;
margin-top: .2rem;

}

.router-link-active{
background-color:#3190E8 ;
color: #3190E8;
}
.router-link-active{
color:#3190E8 ;}

</style>