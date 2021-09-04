export default{
  getCity(state,city){
    state.city=city;
  },
  getFood(state,obj){
    state.food=obj;
  },
  getKinds(state,obj){
    state.kinds=obj;
  },
  getDetail(state,obj){
    state.detail=obj;
  },

  getIndex(state,i2){
    state.index[i2]=state.num++;
  },
  getImg(state,obj){
    state.img=obj
  },
  storeMy(state,obj){
    state.my=obj
  },
  outMy(state){
    state.my={}
  },
  getFoodsList(state,arr){
    state.foodsList=arr;
  }


}