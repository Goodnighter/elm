<template>
  <div class="mine" >
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
      <strong>我的优惠</strong>
    </div>
    <el-tabs v-model="index" stretch='true'  @tab-click="handleClick" >
    <el-tab-pane  label="红包" name="first" >
      <div class="center" style="background-color:#F5F5F5;height:100vh">
      <p>有<span>{{coupon.length}}</span>个红包即将过期</p>
        <div v-for="(v,i) in coupon" :key="i">
          <div>
            <p>¥<span>{{v.amount}}</span></p>
            <p>满{{v.sum_condition}}元可用</p>
          </div>
          <div>
            <p style="font-size:1.2rem">{{v.name}} <span style="color:red;float:right">{{v.description_map.validity_delta}}</span></p>
            <p>{{v.end_date}}到期</p>
            <p>{{v.description_map.phone}}</p>
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="商家代金券" name="second">
        <el-col :sm="12" :lg="6">
        <el-result icon="warning" title="无法使用代金券" subTitle="非客户端或客户端版本过低">
      <template slot="extra">
        <el-button @click="download" type="primary" size="medium">下载或升级客户端</el-button>
      </template>
    </el-result>
  </el-col>
    </el-tab-pane>
  </el-tabs>
    
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
      coupon:[],
      index:'first'
    }
  },
  created(){
    this.drawer=true;
    this.getCoupon()
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
    },
    getCoupon(){
      this.axios({
        url:'/promotion/v2/users/'+this.$store.state.my.user_id+'/hongbaos?limit=20&offset=0',
      }).then(res=>{
        this.coupon=res.data
      })
    },
    handleClick(tab, event) {
        console.log(tab, event);
      },
      download(){
        this.$router.go(-1)
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
.center > p{
  font-size: .6rem;
  padding-left: 1rem;
  padding-top: .6rem;
}
.center > p span{
  color: orangered;
  font-family: Sans-serif;
}
.center > div{
  background-color: white;
  margin: 1rem;border-radius: .4rem;
  border-top: .5rem solid orangered;
  overflow: hidden;
}
.center > div div{
  float: left;
}
.center > div div:first-child{
  width: 22%;
  padding: .6rem;
  border-right: .01rem solid gainsboro;
  text-align: center;
}
.center > div div:first-child p :first-child{
  padding: 1rem .6rem;
  color: orangered;
  font-size: 2rem;
  font-family: sans-serif;
}
.center > div div:first-child p:nth-child(2){
  font-size: .7rem;
  color: gray;
  font-family: sans-serif;
}
.center > div div:nth-child(2){
  width: 68%;
  padding: 1rem .4rem;
  font-size: .7rem;
  color: gray;
  font-family: sans-serif;
}
.center > div div:nth-child(2) P{
  margin-top: .2rem;
}
</style>