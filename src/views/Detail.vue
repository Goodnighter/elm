<template>
  <div class="detail">
  <p><span @click="back" class="el-icon-arrow-left back"></span></p>
    <div class="top">
    <div><div></div><img :src="'https://elm.cangdu.org/img/'+detail.image_path" alt=""></div>
    
      <div>
        <img class="img" :src="'https://elm.cangdu.org/img/'+detail.image_path" alt="">
      </div>
      <div>
        <p><strong>{{detail.name}}</strong></p>
        <p>商家配送／40分钟送达／配送费¥5</p>
        <p>公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
        
      </div>
    </div>
    <div class="center">
    
    <el-drawer
  title="我是标题"
  :visible.sync="drawer"
  :with-header="false"
  :show-close='true'
  :size="'80%'"
  >
    <div @click="notShow()" class="showFood" style="height:100vh">
      <p><strong>{{showFood.name}}</strong></p>
      <div><img :src="'https://elm.cangdu.org/img/'+showFood.image_path" alt="" style="width:100%"></div>
      <p style="color:gray">{{showFood.description}}</p>
      <p>{{showFood.tips}}</p>
      <p>{{showFood.rating}}</p>
      
    </div>
  
</el-drawer>
      <el-tabs class="tab" :stretch='true' v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="商品" name="first" >
      <el-tabs class="listtab" :stretch='false' :tab-position="tabPosition" style="height: 90%;text-align:left" >
    <el-tab-pane v-for="(v,i) in foodsList" :key="i" :label="v.name"  >
      <div class="food" v-for="(v2,i2) in v.foods" :key="i2" @click="show(v2)" type="primary" >
      
        <div ><img :src="'https://elm.cangdu.org/img/'+v2.image_path" alt="" style="width:120%"></div>
        <div>
          <p><strong>{{v2.name}}</strong></p>
          <p style="color:gray">{{v2.description}}</p>
          <p>{{v2.tips}}</p>
          <p>{{v2.rating}}</p>
          <p class="specs"> <strong>¥{{v2.specfoods[0].price}}</strong> 起 
            <p class="count1" style="float:right;" v-if="v2.specfoods.length<=1" >
            
            <span v-if="v2.specfoods[0].original_price"><el-button  type="primary" icon="el-icon-minus" circle v-model="count" @click='title-=20;' @click.stop="v2.specfoods[0].original_price--"></el-button>{{v2.specfoods[0].original_price}} </span>
            <span ><el-button  type="primary" icon="el-icon-plus" circle @click="add(v2.specfoods[0])" @click.stop="v2.specfoods[0].original_price++"></el-button></span>
            </p>
            <p class="count2" style="float:right;" v-else>
            <span v-if="v2.specfoods[0].original_price"><el-button  type="primary" icon="el-icon-minus" circle v-model="count" @click='value(v2.specfood[0])' @click.stop="v2.specfoods[0].original_price--"></el-button>{{v2.specfoods[0].original_price}} </span>
              <span><el-button type="primary"  @click="v2.specfoods[0].original_price++" @click.stop="showSpecs(v2.specfoods)">选规格</el-button></span></p></p>
        </div>
      </div>
    </el-tab-pane>
    
      <el-dialog  
            :title="specsFoods[0].name"
            :visible.sync="dialogVisible"
            width="80%"
            top='30vh'
            
            >
            <p>规格</p>
            <el-button style="margin-top:1rem" v-for="(v,i) in specsFoods" :key="i" type="primary" plain>{{v.specs_name}}</el-button>
            <span slot="footer" class="dialog-footer">
            <strong style="color:#FF6000;float:left;font-size:1.4rem">¥21</strong>
            <el-button  type="primary" @click.stop="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>
    
    
    
  </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="评价中心" name="second" @click="showTags()">
      <div class="tagsTop">
        <div>
          <p>4.4</p>
          <p>综合评价</p>
          <p>高于周边商家16.9%</p>
        </div>
        <div>
          <p> <span><el-rate
            v-model="value"
              disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>服务态度</span><span style="color:#FF6600"></span></p>
          <p> <span>
          <el-rate
            v-model="value"
              disabled
            show-score
            text-color="#ff9900"
            score-template="4.2">
            </el-rate>菜品评价
          </span><span style="color:#FF6600"></span></p>
          <p>送达时间 <span>40分钟</span></p>
        </div>
      </div>
      <div class="bgc"></div>
      <div class="tagsbottom">
        <el-button type="primary" plain>全部(473)</el-button>
        <el-button type="primary" plain>满意(453)</el-button>
        <el-button type="info" plain>不满意(20)</el-button>
        <el-button type="primary" plain>包装精美(2)</el-button>
        <el-button type="primary" plain>味道好(47)</el-button>
        <el-button type="primary" plain>送货快(32)</el-button>
        <el-button type="primary" plain>分量足(18)</el-button>
        <el-button type="primary" plain>有图(15)</el-button>
        <el-button type="danger" plain>味道差(2)</el-button>
        <el-button type="primary" plain>服务不错(15)</el-button>
        <el-button type="primary" plain>干净卫生(15)</el-button>

        <div v-for="(v,i) in tags" :key="i" class="person">
          <div><img src="	https://elm.cangdu.org/img/default.jpg" alt="">
            <div>
              <p>{{v.username}}</p>
              <p><el-rate
              v-model="value"
              disabled
              text-color="#ff9900"
              >
              </el-rate>
            </p>
            </div>
            <span class="data">{{v.rated_at}}</span>
          </div>
          <div>
            <div>
            <img v-for="(v3,i) in v.item_ratings" :key="i" :src="'https://fuss10.elemecdn.com/d/c8/'+v3.image_path" alt="">
            <p class="tagsfood"><span  style="border:.01rem solid gray;padding:.3rem;border-radius:.6rem;" v-for="(v2,i) in v.item_ratings" :key="i">{{v2.food_name}}</span></p></div>
          </div>
        </div>
      </div>
    </el-tab-pane>
    
  </el-tabs>
    </div>

    <el-drawer
  title="购物车"
  :visible.sync="drawer2"
  :direction="direction"
  class="cartdarwer"
  >
  <div v-for="(v,i) in foodsList" :key="i"></div>
</el-drawer>
    <div class="cart">
      <div  type="primary"> 
      <span class="el-icon-s-goods car"></span>
      <p style="font-size:1.2rem"> <strong>¥</strong> <strong>{{getTitle}}</strong></p>
      <p>配送费¥5</p></div>
      <div @click="money()"> <strong>去结算</strong></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'detail',
  data(){
    return {
      detail:'',
      activeName: 'first',
      tabPosition:'left',
      foodsList:[],
      true:true,
      drawer: false,
      drawer2:false,
      direction:'btt',
      showFood:{},
      tags:[],
      value:3.7,
      value2:4.2,
      dialogVisible: false,
      specsFoods:[{name:'wangke'}],
      title:0.00,
      count:0,
      allfoods:[],
      allCount:{},
      
    }
  },
  computed:{
    getDetailId(){
      return this.$store.state.detail.id
    },
    getTitle(){
      return this.title.toFixed(2)
    }
  },
  created(){
    this.getDetail();
    this.getFoodsList();
    this.getTags();
    
  },
  methods:{
    getDetail(){
      this.axios({
        url:'/shopping/restaurant/'+this.getDetailId
      }).then(res=>{
        this.detail=res.data;
        
      })
    },
    getFoodsList(){
      this.axios({
        url:'/shopping/v2/menu?restaurant_id='+this.getDetailId
      }).then(res=>{
        this.foodsList=res.data;
        this.$store.commit('getFoodsList', res.data);
        // console.log(res)
      })
    },
    getTags(){
      this.axios({
        url:'/ugc/v2/restaurants/'+this.getDetailId+'/ratings?offset=0&limit=10',
        
      }).then(res=>{
        this.tags=res.data;
        // console.log(res.data)
      })
    },
    back(){
      this.$router.go(-1)
    },
    show(obj){
      this.drawer = !this.drawer;
      this.showFood=obj
    },
    notShow(){
      this.drawer = false
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    showSpecs(obj){
      this.dialogVisible = true;
      this.specsFoods=obj;
      
    },
    increase(i2,count){
      
      let a=0;
      if(this.allCount[i2]){
        this.$set(this.allCount, i2, count++);
      }else{
        this.$set(this.allCount, i2, count);
      }
      
      console.log(count)
    },
    add(obj){
      this.title+=20;
      this.axios({
        url:'/v1/carts/checkout',
        method:'post',
        withCredentials:true,
        data:{
          restaurant_id:obj.restaurant_id,
          geohash:this.$store.state.detail.geohash,
          entities:[{attrs:[],extra:{},id:obj.food_id,
          name:obj.name,packing_fee:obj.packing_fee,price:obj.price,quantity:obj.original_price,
          sku_id:obj.sku_id,specs:obj.specs_name,stock:obj.stock}]
        }
      }).then(res=>{
        console.log(res.data)
        console.log(obj)
      })
      // this.$store.commit('getIndex', i2);
      // this.$set(this.allCount, i2, a);
      // console.log(this.$store.state.num)
    },
    con(){
      this.title+=20;
      console.log(111)
    },
    money(){
      this.$router.push('/money')
    }
  }
}
</script>

<style scoped>
.back{
  z-index: 1111;
  position: fixed;
  top: 0.2rem;
  left: 0.2rem;
  font-size: 2.4rem;
}
.top{
  height: 6rem;
  color: black;
  padding: .8rem;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 23;
  
}
.top div:first-child{
  height: 6em;
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: -1;
}
.top div:first-child > img{
  width: 100%;
  z-index: -2;
  filter:blur(.4rem);
  
}
.img{
  width: 100%;

}
.top div:nth-child(2){
  width: 20%;
  
}
.top div:last-child{
  float: right;
  font-size: .6rem;
  transform: translate(-2rem,-4.2rem);
  
}
.top div:last-child p:first-child{
  font-size: 1rem;
  
}
.top p{
  margin-bottom: .3rem; 
}
.center{
  margin-top: 5rem;
  
}
.tab{
  padding-top: 1rem;
  height: 22rem;
}
.el-tabs{
  height: 100%;
  
}
.el-tabs--left .el-tabs__item.is-left {
    text-align: left; 
    width: 1rem;
}
center >>> .el-tabs__item{
  width: 4rem;
}

.el-tabs--left .el-tabs__header.is-left {
    float: right;
    margin-bottom: 0;
    margin-right: 100px;
}
center >>> .el-tabs--left .el-tabs__item.is-left {
    text-align: left;
    border: solid;
}
.food{
  border-bottom: 1px solid gainsboro;
  height: 8rem;
  overflow: hidden;
  padding: .3rem;
}
.food div:nth-child(1){
  width: 20%;
  float: left;
  
}
.food div:nth-child(2){
  width: 70%;
  float: right;
}
.food div:nth-child(2) p:nth-child(2){
  font-size: .8rem;
}
.food div:nth-child(2) p:nth-child(3){
  font-size: .8rem;
}
.food div:nth-child(2) p:nth-child(4){
  font-size: .8rem;
  color: red;
  display: inline;
  border: .01rem solid red;
  border-radius: 1rem;
  padding: 0;
}
.food div:nth-child(2) p:nth-child(5) strong{
  color: #FF6600;
  font-size: 1.2rem;
}
.food p {
  margin-bottom: .4rem;
}
.showFood p:first-child{
  text-align: center;
  background-color: cornflowerblue;
  padding: 1rem;
  

}
.tagsTop{
  height: 8rem;
  overflow: hidden;
  
}
.tagsTop div:first-child{
  float: left;
  width: 44%;
  text-align: center;


}
.tagsTop div:first-child p:first-child{
  font-size: 2rem;
  color: #FF6600;
  overflow: hidden;
  padding: .6rem;
}
.tagsTop div:first-child p:nth-child(2){
  font-size: .9rem;
}
.tagsTop div:first-child p:nth-child(3){
  font-size: .6rem;
  color: gray;
  margin-top: .2rem;
}
.tagsTop div:nth-child(2){
  display: inline-block;
  width: 44%;
  text-align: center;
  font-size: .8rem;
  text-align: left;
  padding: .6rem;
}
.tagsTop div:nth-child(2) >>> span{
  font-size: .5rem;
  width: 1rem;
}
.tagsTop div:nth-child(2) p{
  height: 2rem;
  overflow: hidden;
  margin-top: .2rem;
}
.el-rate{
  padding: 0;
}
.bgc{
  background-color: #F5F5F5;
  height: 1.2rem;
}
.tagsbottom button{
  height: 2em;
  padding: 0.2rem;
  margin-top: .4rem;
  margin-left: .8rem;
}
.person{
  border-bottom: .01rem solid gainsboro;
  height: 7rem;
  padding: 1rem;
}
.person img {
  width: 10%;
  border-radius: 50%;
}
.person div div {
  display: inline-block;
  margin-left: 1rem;

}
.person div div >>>span{
  width: .8rem;
  margin-left: .1rem;
  transform: translateX(-1rem);
  font-size: .8rem;
}
.data{
  float: right;
  color: gray;
  font-size: .8rem;
}
.tagsfood{
  font-size: .6rem;
  line-height: 1.8rem;
  margin-top: .1rem;
}
.specs{
  position: relative;
}
.specs button{
  float: right;
  padding: 0.2rem;
  margin-right: .2rem;
}
.cart{
  position: fixed;
  height: 3rem;
  bottom:0;
  left: 0;
  width: 100%;
  
}
.cart div:first-child{
  width: 64%;
  background-color: #3A3541;
  float: left;
  color: white;
  height: 3rem;
  
}
.cart div:first-child p{
  padding-left: 6rem;
}
.cart div:first-child p:nth-child(3){
 font-size: .6rem;
 margin-top: .4rem;
}
.cart div:nth-child(2){
  float: right;
  background-color: #4CD964;
  width: 36%;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  color: white;
  font-size: 1.2rem;
}
.car{
  position: absolute;
  top: -1rem;
  font-size: 2rem;
  border: .6rem solid #444444;
  border-radius: 50%;
  background-color: #3A3541;
  padding: .4rem;
  left: 1rem;
  
}
.count1 button{
  padding: 0.2rem;
  margin-right: .4rem;
}
.count1{
  transform: translateY(-1.2rem);
}
.count2{
  transform: translateY(-1.5rem);
}
.count1 span{
  transform: translateY(-3rem);
}
.count2 button{
  padding: .3rem;
  margin-right: .4rem;
}
.count2 button:first-child{
  padding: .2rem;
  
}

</style>
