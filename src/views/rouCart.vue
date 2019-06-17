<template>
  <div class="cart-panel">
    <div class="tip-wrap" v-show="showTip">
      <div class="tip-box">
        <div class="tip-icon tip-icon-unLogin"></div>
        <p class="tip-message">
          {{msg}}
        </p>
        <router-link to="/login" class="tip-btn" v-show="flag">立即登录</router-link>
        <router-link to="/" class="tip-btn" v-show="!flag">返回首页</router-link>
        <!-- <a class="tip-btn"></a> -->
      </div>
    </div>
    <ul v-show="showcart">
    <li class="pos-cart">
      <a class="contsty"
      >
        <div class="title" style="line-height:19px;">
          <p>到家菜市-市桥菜市场</p>
        </div>
        <div class="content-list flex">
          <ul class="productItem flex-item">
            <li class="product">
              <img
                class="pic"
                src="https://img10.360buyimg.com/n7//jfs/t4672/238/819529471/24024/9160ce2/58d4df3bN09476056.jpg"
                style="background: none;"
              >
              <span class="text">¥15.8</span>
            </li>
          </ul>
        </div>
      </a>
    </li>
    <li class="pos-cart">
      <a class="contsty">
        <div class="title">
          <p>海王星辰广州东怡新区店</p>
        </div>
        <div class="content-list flex">
          <ul class="productItem flex-item">
            <li class="product">
              <img
                class="pic"
                src="https://img10.360buyimg.com/n7//jfs/t9220/210/1395197243/47176/5aed9696/59b89f50N362ec516.jpg"
                style="background: none;"
              >
              <span class="text">¥19.5</span>
            </li>
          </ul>
        </div>
      </a>
    </li>
  </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      flag:true,//非登录状态显示
      msg:"",
      showTip:true,
      showcart:false,
    }
  },
  created(){
    this.isShowback();
  },
  methods:{
    isShowback(){
 
      var b=this.$store.state.username;
      console.log(b+"gwc");
      if(b){
       //登录状态
        this.flag=false;
        this.showTip=false;
        this.showcart=true;
      }else{
        this.showTip=true;
          this.msg='购物车还空空如也哦~ 登录后将同步购物车中商品';
          this.showcart=false;
      }
        
      }
    }
}
</script>

<style lang="scss" scoped>
    * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: 400;
    font-style: normal;
}
.section .cart-panel {
    height: calc(100vh - 160px);
}
.tip-wrap {
    width: 100%;
    height: 100%;
    padding: 0 0 25px;
    text-align: center;
    z-index: 1000;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    min-height: 50vh;
}
.tip-wrap .tip-box {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1;
    flex: 1 1;
}
.tip-wrap .tip-icon-unLogin {
    background: url(//static-o2o.360buyimg.com/daojia/react/images/unlogin.cad7c230.png) 50% no-repeat;
    background-size: cover;
}
.tip-wrap .tip-icon {
    margin: 0 auto;
    width: 160px;
    height: 160px;
}
.tip-wrap .tip-icon {
    margin: 0 auto;
    width: 160px;
    height: 160px;
}
.tip-wrap .tip-btn {
    display: inline-block;
    margin: 15px auto 0;
    padding: 0 15px;
    height: 32px;
    line-height: 30px;
    border-radius: 20px;
    font-size: 14px;
    background: #47b34f;
    color: #fff;
}
a {
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    color: #555;
}
p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.pos-cart {
    position: relative;
    margin: 10px 6px 7px;
    text-align: left;
    height: 141px;
    overflow: hidden;
    padding: 3px 4% 10px 1.6%;
    background: url(//static-o2o.360buyimg.com/daojia/react/images/gc.16e813d0.png) 0 0 no-repeat;
    background-size: 100% 154px;
}
.pos-cart .contsty {
    overflow: hidden;
    padding-left: 2.4%;
    float: left;
    width: 97.6%;
}
.pos-cart .title {
    display: block;
    position: relative;
    z-index: 3;
    line-height: 44px;
    height: 147px;
    line-height: 19px;
    margin-bottom: -103px;
    color: #333;
    font-size: 15px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWBAMAAAAC47AUAAAABGdBT…qmgQJBYBokAKJBAsg0TByqDqYPag7MXKg9MHth7oC5C+pOAJwWEz2YTmZYAAAAAElFTkSuQmCC) right 17px no-repeat;
    background-size: 7px 11px;
}
p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.pos-cart .content-list {
    position: relative;
    z-index: 2;
    height: 92px;
    padding: 1px 0 0;
}
.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.productItem {
    padding-right: 30px;
}
.flex-item {
    overflow: hidden;
}
.product, .product .pic {
    vertical-align: top;
    width: 52px;
}
.product {
    position: relative;
    display: inline-block;
    height: 83px;
    // margin-top: 14px;
    padding-right: 32px;
    margin-right: -22px;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    color: #333;
}
.product .pic {
    height: 52px;
    border-radius: 5px;
}
.product, .product .pic {
    vertical-align: top;
    width: 52px;
}
.product span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>

