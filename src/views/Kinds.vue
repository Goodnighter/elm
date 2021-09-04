<template>
  <div class="kinds">
    <div class="center2">
      <ul style="background-color:white">
        <li v-for="(v,i) in $store.state.kinds" :key="i" @click="detail(v)">
        <img :src="'https://elm.cangdu.org/img/'+v.image_path" alt="">
        <p><span style="background-color: #FFD930;">品牌</span><strong >{{v.name}}</strong> <span v-for="(v1,i) in v.supports" :key="i">{{v1.icon_name}}</span></p>
        
        <p style="margin-top:-2.8rem" class="centerp"><span>
          <el-rate class="color"
            v-model="v.rating"
                disabled
                show-score
              text-color="#ff9900"
              score-template="{value}">
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
  name:'kinds',
  data(){
    return {

    }
  },
  computed:{
    
  },
  created(){
    
    console.log(this.$store.state.foods)
    
  },
  methods:{
    getKinds(){
      this.axios({
        url:'/shopping/v2/restaurant/category'
      }).then(res=>{
      this.$store.state.kinds=res.data;
      
      })
      
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

</style>