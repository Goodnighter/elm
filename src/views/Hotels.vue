<template>
  <div class="hotels">
  
    <div class="top">
      <span  @click="search" class="el-icon-search"></span>
      <span style="font-size:1.8rem;transform: translateY(.8rem);" v-if="$store.state.my.username" class="el-icon-user-solid"></span>
      <span v-else @click="login" >登录|注册</span>
      <span @click="city">{{$store.state.food.name}}</span>
    </div>
    <div class="center">
      <div class="block">
      
      <el-carousel arrow="always"  height="13rem">
      <el-carousel-item>
        <div>
          <div @click="kinds(v1)" v-for="(v1,i) in imgs" :key="i" class="food">
            <img :src="'https://fuss10.elemecdn.com'+v1.image_url" alt="">
            <p>{{v1.title}}</p>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div>
          <div @click="kinds(v1)" v-for="(v1,i) in second" :key="i" class="food">
            <img :src="'https://fuss10.elemecdn.com'+v1.image_url" alt="">
            <p>{{v1.title}}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
    </div>
    

    <div class="bgc"></div>
    <div class="center2">
      <p><span class="el-icon-tableware"></span>附近商家</p>
      <ul>
        <li @click="detail(v)" v-for="(v,i) in hotels" :key="i">
        <img :src="'https://elm.cangdu.org/img/'+v.image_path" alt="">
        <p><span style="background-color: #FFD930;">品牌</span><strong >{{v.name}}</strong> <span v-for="(v1,i) in v.supports" :key="i">{{v1.icon_name}}</span></p>
        
        <p style="margin-top:-2.8rem" class="centerp"><span>
          <el-rate class="color"
            v-model="v.rating"
                disabled
                show-score
              text-color="#ff9900"
              score-template="{value}"
              
              >
              </el-rate>
        </span>
        <span>月售{{v.recent_order_num}}单</span>
        <span style="color:#3190E8;border:.01rem solid #3190E8;border-radius:.2rem;font-size:.4rem;padding:.1rem" >准时达</span>
        <span style="background-color: #3190E8;color:white;border-radius:.2rem;font-size:.4rem;padding:.1rem">蜂鸟专送</span>
        </p>
        <p style="margin-top:-1.2rem">¥{{v.float_minimum_order_amount}}起送/配送费约¥{{v.float_delivery_fee}} <span>{{v.order_lead_time}}</span><span>{{v. distance}}/</span></p>
        </li>  
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'hotels',
  data(){
    return {
      name:'',
      imgs:[],
      imgs2:[],
      hotels:[],
      
    }
  },
  created(){
    // console.log(this.$store.state);
    this.getImgs();
    this.getHotels();
    
  },
  computed:{
    second(){
      this.imgs2=this.imgs.splice(8);
      return this.imgs2;
    },
  },
  methods:{
    login(){
      this.$router.push('/login')
    },
    getImgs(){
      this.axios({
        url:'/v2/index_entry'
      }).then(res=>{
        this.imgs=res.data;
        
      })
    },
    getHotels(){
      this.axios({
        url:'/shopping/restaurants?latitude='+this.$store.state.food.latitude+'&longitude='+this.$store.state.food.longitude,
        // data:{
        //   latitude:this.string(this.$route.query.hotel.latitude),
        //   longitude:this.string(this.$route.query.hotel.longitude)
        // }
      }).then(res=>{
        this.hotels=res.data;
        this.$store.commit('getKinds',res.data)
      })
    },
    search(){
      this.$router.push('/search')
    },
    city(){
      this.$router.push('/city')
    },
    kinds(obj){
      this.$store.commit('getKind',obj)
      this.$router.push('/kinds')
    },
    detail(obj){
      this.$store.commit('getDetail',obj);
      this.$router.push({
        name:'detail',
        
      })
    }
    
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
.bgc{
  height: 1rem;
  background-color: #F5F5F5;
  box-shadow:inset 0 0 10px 0 gainsboro;
}
.center2{
  margin-top: 0rem;
}
.center2 > p{
  padding: 1rem;
  color: gray;
}
.food{
  width: 17%;
  padding: .8rem;
  float: left;
  color: gray;
  font-size: 0.8rem;
  text-align: center;
  
}
.center{
margin-top: 3rem;}

.food  div{
  text-align: center;
  border: solid black;
}
.food img{
width: 80%;
margin: auto;
}


.center2{
  padding: 0rem;
  margin-bottom: 3rem;
}
.center2 li{
  border-bottom: 1px solid gainsboro;
  list-style-type: none;
  padding: .8rem;
  overflow: hidden;
  
}
.center2 img{
  width: 20%;
}
li p{
  float: right;
  overflow: hidden;
  width: 76%;
  
}
li  span{
  display: block;
  float: right;
  font-size: .6rem;
  transform: translateY(.2rem);
  color: gray;
  margin-left: .2rem;
  
  
}
li span:nth-child(1){
  float:left;
  font-size: .6rem;
  margin-right: .2rem;
  transform: translateY(.2rem);
  
}
li span:nth-child(2){
  float:left;
  
}
li p:last-child{
color: gray;
font-size: .6rem;}
li p:last-child span:nth-child(2){
float: right;
font-size: 0.6rem;
transform: translateY(.01rem);
}
li p:last-child :nth-child(1){
background-color: white;
float: right;
color: #3190E8;
transform: translateY(.01rem);

}
.color{
background-color: white;
transform: translateY(-0.2rem);
}
.centerp span:nth-child(2){
font-size: .5rem;}
.color >>> span{
font-size: .5rem;
width: .94rem;
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

</style>