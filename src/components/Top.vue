<template>
  <div class="topAll">
    <div class="top">
      <span @click="back" class="el-icon-arrow-left"></span>
      <strong>密码登录</strong>
    </div>
  </div>
</template>

<script>
export default {
  name:'top'
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
</style>