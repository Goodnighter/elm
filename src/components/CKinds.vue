<template>
  <div class="ckinds">
    <div class="top">
      <span @click="back" class="el-icon-arrow-left"></span>
      <strong>{{$store.state.kind.title}}</strong>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'ckinds',
  data(){
    return {}
  },
  created(){
    
    
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    getKindsss(){
      this.axios({
        url:'/shopping/v2/restaurant/category'
      }).then(res=>{
      this.$store.state.kind=res.data;
      
      })
    },
    
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
text-align: center;
}
.top span{
float: left;
transform: translateY(.8rem);}
strong{
  font-size: 1.2rem;
}
</style>