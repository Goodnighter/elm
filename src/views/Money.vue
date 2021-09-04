<template>
  <div class="money">

      <el-col :sm="12" :lg="6">
    <el-result icon="success" title="支付成功" subTitle="点击查看订单">
      <template slot="extra">
        <el-button @click="btn()" type="primary" size="medium">查看</el-button>
      </template>
    </el-result>
  </el-col>
  </div>
</template>

<script>
export default {
  name:'money',
  methods:{
    btn(){
      this.$router.push('/order')
    }
  }
}
</script>

<style scoped>
.money{
  padding-top: 6rem;
}
</style>