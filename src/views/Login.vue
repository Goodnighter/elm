<template>
  <div class="login">
    <div class="top">
      <span @click="back" class="el-icon-arrow-left"></span>
      <strong>密码登录</strong>
    </div>
    <div class="center">
      <div class="center1">
        <div><input type="text" placeholder="账号" v-model="username"></div>
        <div><input :type="inp" placeholder="密码" v-model="password"><el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="gray"
              class="switch"
              @change="change">
              </el-switch></div>
        <div><input class="lastInp" type="text"  v-model="imgText" placeholder="验证码"><img :src="img&&img" alt="">
        <div class="font" @click="changeImg"><p>看不清</p><p>换一张</p></div>
        </div>
      </div>
    </div>


    <div class="bottom">
      <P>
        温馨提示：未注册过的账号，登录时将自动注册
    </P>
    <P>
        注册过的用户可凭账号密码登录
    </P>
    <el-button @click="login" type="success" class="btn">登录</el-button>
    <span>重置密码?</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return {
      value: true,
      inp:'password',
      img:'',
      username:'',
      password:'',
      imgText:'',
      isShow:false
    }
  },
  created(){
    this.getImg()
  },
  methods:{
    change(){
      this.inp=this.value?'password':'text'
    },
    getImg(){
      this.axios({
        url:'/v1/captchas',
        withCredentials:true,
        method:'post'
      }).then(res=>{
        this.img=res.data.code
        this.$store.commit('getImg', this.img);
      })
    },
    changeImg(){
      this.getImg()
    },
    back(){
      this.$router.go(-1);
    },
    login(){
      if(this.username&&this.password){
        this.axios({
        url:'https://elm.cangdu.org/v2/login',
        withCredentials:true,
        method:'post',
        data:{
          username:this.username,
          password:this.password,
          captcha_code:this.imgText
        }
      }).then(res=>{
        this.$store.commit('storeMy',res.data);
        if(res.data.username){
          if(res.status==200){
            this.$router.push('/my');
          }else if(true){
            console.log(11)
          }
          
        }
      })
      }else{
        this.open();
      }
      
    },
    open() {
        this.$alert('请输入用户名或密码', '警告!!!!', {
          confirmButtonText: '好的呢',
          center:true,
          customClass:'customClass',
          callback: action => {
            this.$message({
              type: 'info',
              message: `快点输入`
            });
          }
        });
      },
      open2(){
        this.$alert('验证码错误', '警告xxxxx', {
          confirmButtonText: '好的呢',
          center:true,
          customClass:'customClass',
          callback: action => {
            this.$message({
              type: 'info',
              message: `快点输入`
            });
          }
        });
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

.center1{
  margin-top: 1rem;
}
.center1 > div{
  height: 4rem;
  margin-top: 0.2rem;
  box-shadow: 0 0 10px 0 gainsboro;
  background-color: white;
  overflow: hidden;
  
}
input{
  height: 2rem;
  width: 16rem;
  border: none;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  
}
.lastInp{
  width: 10rem;
  transform: translateY(-0.1rem);
  
  
}
img{
  transform: translate(1.6rem,0.6rem);
}
.font{
  display: inline-block;
  color: #3190E8;
  transform: translate(2.2rem,0.7rem);
}
.login{
  background-color: #F5F5F5;
  height: 100vh;
}
.switch{
  transform: translateX(2rem);
  
  
}
.bottom{
  color: #3190E8;
  font-size: 0.8rem;
  padding: 1rem;
}
.bottom p{
  margin-top: 0.4rem;
}
.btn{
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;
}
.bottom span{
  float: right;
  margin-top: 1rem;
}
.customClass{
  width: 200px;
}
</style>