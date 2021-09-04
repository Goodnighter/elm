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
      <strong>饿了么</strong>
    </div>
    <div class="center">
      <span class="el-icon-platform-eleme icon"></span>
      <p>下载饿了么APP</p>
    </div>
    <el-button class="button" type="success">点击下载</el-button>
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
.center{
  text-align: center;
  margin: 2rem;
}
.icon{
  font-size: 16rem;
  color: #3190E8;
}
.button{
  width: 90%;
  margin: 1rem;
}

</style>