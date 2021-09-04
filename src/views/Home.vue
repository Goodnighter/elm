<template>
  <div class="home">
    <div class="top">
      <span>Wink.饿了么</span>
      <span style="font-size:1.8rem;transform: translateY(.8rem);" v-if="$store.state.my.username" class="el-icon-user-solid"></span>
      <span v-else @click="login">登录|注册</span>
      
    </div>
    <div class="top2">
      <span>当前定位城市:</span>
      
      <strong>定位不准时,请在城市列表中选择</strong>
    </div>
    <div class="top3" @click="enterCity(guessCity)">
      <span>{{guessCity.name}}</span>
      <span class="el-icon-arrow-right"></span>
    </div>
    <div class="bgc"></div>
    <div class="center">
      <p>热门城市</p>
      <ul>
        <li  @click="enterCity(v)" v-for="(v,i) in citys" :key="i">{{v.name}}</li>
      </ul>
    </div>
    <div class="bgc"></div>
    <div v-for="(v1,k,i) in allCitys" :key="i" class="bottom">
      <p>{{k}}</p>
      <ul>
        <li @click="enterCity(v)" v-for="(v,i) in v1" :key="i">{{v.name}}</li>
      </ul>
      <div class="bgc"></div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data(){
    return {
      guessCity:'',
      citys:[],
      allCitys:[],
      letter:['A','B','C','D','E','F','G','H','I','G','K','O','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    }
  },
  created(){
    this.getCity();
    this.getCitys()
    this.getAllCitys()
    
  },
  methods:{
    getCity(){
      this.axios({
        url:'/v1/cities?type=guess',

      }).then(res=>{
        this.guessCity=res.data;
          
      })
    },
    getCitys(){
      this.axios({
        url:'/v1/cities?type=hot',

      }).then(res=>{
        this.citys=res.data;
        
      })
    },
    
    getAllCitys(){
      this.axios({
        url:'/v1/cities?type=group',

      }).then(res=>{
        
        this.allCitys=res.data;
          
      })
      
    },
    getName(arr){
      for(let i=1;i<=arr.length;i++){
        
        return arr[i].name;
        
      }
    },
    login(){
      this.$router.push('/login')
    },
    enterCity(city){
      this.$store.commit('getCity',city);
      this.$router.push('/city')
    }
  }
  
}
</script>

<style scoped>
body{
background-color:gainsboro;}

.top{
background-color: #3190E8;
height: 3rem;
color: white;
line-height: 3rem;
padding: 0 0.6rem;
overflow: hidden;
}
.top span:nth-child(2){
float: right;
}
.top span:nth-child(3){
float: right;
}
.top2{
padding: 0 0.6rem;
font-size: 0.9rem;
border-bottom: 0.1rem #F4F4F4 solid;
height: 3rem;
line-height: 3rem;
overflow: hidden;
}
strong{
color: gray;
float: right;
}
.top3{
height: 3rem;
padding:  0 0.6rem;
line-height: 3rem;
border-bottom: 0.1rem #F4F4F4 solid;
overflow: hidden;
}
.top3 span{
color:#3190E8 ;
font-size: 1.4rem;

}
.top3 span:nth-child(2){
float: right;
font-size: 2.2rem;
line-height: 3rem;

}
.bgc{
height: 1rem;
background-color: #F5F5F5;
}
.center{

border-top: 0.1rem #F1F1F1 solid;
}
.center p{
padding: 0.6rem 0.6rem;
font-size: 0.8rem;}
ul{
list-style-type: none;
overflow: hidden;}
li{
color: #3190E8;
border: 0.01rem #F4F4F4 solid;
float: left;
height: 2.4rem;
width: 24.57%;
line-height: 2.4rem;
text-align: center;
}
.bottom li{
color: #666;
overflow: hidden;
}
.bottom p{
padding: 0.6rem 0.6rem;
}
</style>