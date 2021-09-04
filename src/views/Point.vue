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
      <strong>我的积分</strong>
    </div>
    <div class="center">
      <div>
        <p>当前积分<span class="el-icon-question">积分说明</span></p>
        <p><span>9999w</span>分</p>
        <el-button  @click="dialogVisible = true" class="button" type="danger" >积分兑换商品</el-button>
      </div>
    </div>
    
    <div class="bottom">
        
  <el-col :sm="12" :lg="6">
  <p style="padding:.4rem;font-size:.8rem">最近三十天兑换记录</p>
    <el-result icon="info" title="信息提示" subTitle="暂无兑换记录">
      <template slot="extra">
        
      </template>
    </el-result>
  </el-col>
    </div>
  </el-drawer>
  <el-dialog
  :visible.sync="dialogVisible"
  width="60%"
  center
  top="30vh"
  >
  <img style="width:100%" :src="img2" alt="">
    
</el-dialog>
  </div>
</template>

<script>
import img1 from '../assets/img/wink.jpg'
import img2 from '../assets/img/wangke.jpg'
export default {
  name:'mine',
  data(){
    return {
      img:img1,
      img2:img2,
      drawer:false,
      dialogVisible: false
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
.center{
  background-color: #3190E8;
  height: 10rem;
  border-top: .01rem dotted #F5F5F5;
  padding: .5rem;
  overflow: hidden;
}
.center div{
  background-color: white;
  border-radius: .2rem;
  height: 86%;
  padding: .6rem;
  overflow: hidden;
}
.center div p:first-child{
  font-size: .8rem;
  color: gray;
  overflow: hidden;
}
.center div p:first-child span{
  color: #3190E8;
  float: right;
}
.center div p:nth-child(2) span{
  font-size: 2.4rem;
  font-family:Sans-serif;
  color:orange;
  margin: .6rem .2rem;
}
.button{
  width: 100%;
  margin-top: 1rem;
}

</style>