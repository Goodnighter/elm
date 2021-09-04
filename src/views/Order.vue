<template>
  <div class="order">
    <div class="top">
      <span @click="back" class="el-icon-arrow-left"></span>
      <strong>订单列表</strong>
    </div>
    <div class="center">
      <div>
        <p>{{order.name}} <span>¥{{order.price}}</span></p>
        <p><img src="https://elm.cangdu.org/img/172837b34d567733.jpg" alt="">
        <span class="span">无敌至尊披萨</span>
        </p>
        <p><el-button @click="detail()" class="button" type="primary">再来一单</el-button></p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name:'order',
  data(){
    return {
        order:{}
    }
  },
  created(){
    this.getFood()
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    getFood(){
      this.order=this.$store.state.foodsList[0].foods[0].specfoods[0]
    },
    detail(){
      this.$router.push('/detail')
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
strong{
  font-size: 1.2rem;
  float: right;
  transform: translateX(-180%);
  
}
.center{
padding: 1rem;
background-color: aliceblue;
height: 100vh;

}
.center div{
  background-color: white;
  height: 5rem;
  border-radius: .2rem;
  overflow: hidden;
}
.center p:first-child span{
  float: right;
  color: red;
  font-size: 1.4rem;
  padding: 1rem;
}
button{
padding: .4rem;
float: right;
transform: translate(3.4rem ,-.6rem);
}
img{
  width: 10%;
  margin-left: .4rem;
}
.span{
  font-size: 1rem;
  color: gray;
  border:.01rem solid gainsboro;
  padding: .4rem;
  border-radius: .4rem;
  margin-left: .6rem;
}
</style>