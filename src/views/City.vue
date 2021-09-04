<template>
  <div class="city">
    <div class="top">
      <span @click="back" class="el-icon-arrow-left"></span>
      <strong>{{this.$store.state.city.name}}</strong>
      <span @click="back">切换城市</span>
    </div>
    <div class="center">
      <input @input="input" v-model="inpV" type="text" placeholder="输入学校、商务楼、地址">
      <el-button @click="input" type="primary">提交</el-button>
    </div>
    <div class="bottom">
      <ul>
        <li @click="hotels(v)" v-for="(v,i) in foods" :key="i" >
          <p>{{v.name}}</p>
          <p>{{v.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'city',
  data(){
    return {
      inpV:'',
      city:{},
      foods:[] 
    }
  },
  created(){
    
  },
  computed:{
    getName(){
        this.city=this.$store.state.city;
    }
  },
  methods:{
    back(){
      this.$router.push('/');
    },
    input(){
      if(this.inpV){
        this.axios({
        url:'/v1/pois?city_id='+this.$store.state.city.id+'&keyword='+this.inpV+'&type=search'

      }).then(res=>{
        this.foods=res.data;
        
      })
      }else{
        this.foods=''
      }
      
    },
    hotels(hotel){
      this.$store.commit('getFood',hotel);
      this.$router.push({path:'/chotels',query:{hotel}})
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
text-align: center ;

}
.top span:first-child{
  float: left;
  transform: translateY(.8rem);
}
strong{
  font-size: 1.2rem;
  
}
.top span:nth-child(3){
float: right;
font-size: 1rem;
}
.city{
  background-color: #F5F5F5;
}
.center{
padding:1rem;
background-color: white;
margin-top: 1rem;
}
input{
  width: 100%;
  height: 2.4rem;
  border-radius: 0.4rem;
  outline: none;
  border: 0.06rem solid gainsboro;
  padding-left: 0.2rem;}
button{
  margin-top: 1rem ;
  width: 100%;
}
.bottom{
  background-color: white;
  margin-top: 1rem;
}
li{
  border-top: 0.01rem solid gainsboro;
  border-bottom: 0.01rem solid gainsboro;
  padding: 1rem;
}
li p{
  color: gray;
  font-size: 0.8rem;
}
li p:first-child{
  color: black;
  font-size: 1rem;
  margin-bottom: 0.2rem;
}

</style>