<template>
  <div class="mini-cart">
    {{pagelists? '' : '' }}
    <div class="popup-layer cart-pop hide">
      <div class="popup-mask hide"></div>
      <div class="popup-box ipx-pad popup-box-hide">
        <div class="popup-t">
          <div class="cart-icon disabled content-icon" style="visibility: hidden;"></div>
          <span class="cart-icon-arrow"></span>
        </div>
        <div class="popup-content"></div>
      </div>
    </div>
    <div class="popup-layer collect-pop hide">
      <div class="popup-mask hide"></div>
      <div class="popup-box ipx-pad popup-box-hide">
        <div class="popup-t"></div>
        <div class="popup-content"></div>
      </div>
    </div>
    <div class="popup-layer gift-pop hide">
      <div class="popup-mask hide"></div>
      <div class="popup-box ipx-pad popup-box-hide">
        <div class="popup-t"></div>
        <a href="javascript:;" class="popup-close"></a>
        <div class="popup-content"></div>
      </div>
    </div>
    <div class="bar ipx-pad">
      <!-- 底部购物车按钮 -->
      <div
        class="cart-icon disabled icon"
        @click="mShowSc"
        style="transition: top 600ms; top: 1px; visibility: visible;"
      >
      <!-- 底部购物车商品数量 -->
        <span class="num"
        v-if="taba.length > 0" 
        v-text="this.taba.length"></span>
      </div>
      <div class="price empty">
        <!-- 底部购物车总价 -->
        <div
          class="price-warp"
          v-if="taba.length > 0"
          v-text="wmPoiScore(((taba[0].orderList[0].price * 1 * this.taba.length) ))"
        ></div>
      </div>
      <div class="btn">
        <div
          class="ui-flexbox h-center v-center"
          style="z-index: 999; height: 50px; background-color: transparent; margin-left: 0px; margin-right: 0px; text-align: center;"
        >
          <div
            style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; background-color: transparent; z-index: -1;"
          ></div>
          <span
            class="mJQBuZ"
            style="max-width: 100%; overflow: hidden; text-overflow: ellipsis; word-break: break-all; white-space: nowrap; font-size: 16px; color: rgb(255, 255, 255); font-weight: bold;"
          >去结算</span>
        </div>
      </div>
    </div>
    <div class="more" :class="{'showSc' : isShowSc}">
      <div class="top" 
      v-text="'已选'+this.taba.length+'件'"></div>
      <div class="main" v-if="taba.length > 0" >
        <div class="goods"
        v-for="(s,index) in taba[0].orderList"
        :key="index"
        
        >
          <img 
          v-if="taba.length > 0" 
          :src="s.imgurl">
            <span class="gName" 
            v-if="taba.length > 0" 
            v-text="s.name"></span>
            <span class="gPrice clearfix" 
            v-if="taba.length > 0" 
            v-text="'￥'+ s.price"></span>
            <!-- '￥'+(s.price * s.qty).toFixed(1) -->
          <div class="add-cart">
            <span class="minus" @click="Reduce">-</span><!-- 减少 -->
            <span class="num" 
            v-if="taba.length > 0"
            v-text="s.qty"></span><!--弹框数量-->
            <span class="add" @click="Add">+</span><!-- 增加 -->
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Vue from "vue";
import store from "@/store";
export default {
  data() {
    return {
      isShowdelB: true,
      isShowSc : false,
      qty : 0,
      taba: [],
      // shopList: [],
      list1: [],
    };
  },
  methods : {
    // 转为一位小数
    wmPoiScore(wmPoiScore) {
      return (wmPoiScore / 1).toFixed(1);
    },
    // 点击购物车按钮弹出、隐藏
    mShowSc(){
      this.isShowSc = !this.isShowSc;
    },
    Reduce(){
      alert(this.qty);
      this.qty--;
      // console.log('r');
    },
    Add(){
      this.qty++;
      // console.log('a');
    }
  },
  computed : {
    // 动态列表
    pagelists() {
      // 用一个数组接收
      this.taba = this.$store.state.orderList;
      this.qty = this.$store.state.qty;
      console.log(this.qty)
      // 当值返回出去
      console.log(this.taba);
      return this.taba;
    },
    
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
.mini-cart .bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  z-index: 1003;
  background-color: #fff;
  -webkit-transition: left 0.6s;
  transition: left 0.6s;
}
element.style {
  transition: top 600ms;
  top: -10px;
  visibility: visible;
}
.mini-cart .cart-icon.disabled {
  background-position: 0 0;
}
.mini-cart .cart-icon .num {
  display: block;
  margin-left: 32px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  background: #ff5757 !important;
  color: #fff;
  border-radius: 32px;
  font-size: 14px;
  text-align: center;
}
.mini-cart .bar .icon {
  position: absolute;
  left: 10px;
  top: -10px;
  opacity: 1;
  z-index: 41;
  -webkit-transition: top 0.6s;
  transition: top 0.6s;
}
.mini-cart .bar .icon {
  position: absolute;
  left: 10px;
  top: -10px;
  opacity: 1;
  z-index: 41;
  -webkit-transition: top 0.6s;
  transition: top 0.6s;
}
.mini-cart .cart-icon {
  width: 50px;
  height: 50px;
  background: url(../assets/sc.png);
  background-size: 50px;
  background-position: 0 100%;
  transition: -webkit-transform 0.5s ease-out 0s;
  transition: transform 0.5s ease-out 0s;
  transition: transform 0.5s ease-out 0s, -webkit-transform 0.5s ease-out 0s;
  -webkit-transition: -webkit-transform 0.5s ease-out 0s;
  position: relative;
}
.mini-cart .bar .price.empty {
  font-size: 14px;
  color: #999;
}
.mini-cart .bar .price {
  position: absolute;
  z-index: 40;
  left: 70px;
  right: 110px;
  bottom: 0;
  top: 0;
  -webkit-transition: left 0.6s;
  transition: left 0.6s;
}
.mini-cart .bar .price .price-warp {
  height: 50px;
  display: table-cell;
  vertical-align: middle;
  display: inline-block;
  padding-right: 5px;
  line-height: 50px;
  font-size: 22px;
  color: #ff3434;
}
.mini-cart .bar .btn.disabled {
  background: -webkit-linear-gradient(left, #aaa, #ccc);
  background: linear-gradient(90deg, #aaa, #ccc);
}
.mini-cart .bar .btn {
  position: absolute;
  z-index: 40;
  right: 0;
  width: 110px;
  background: -webkit-linear-gradient(left, #00be34, #00cb1e);
  background: linear-gradient(90deg, #00be34, #00cb1e);
}
element.style {
  z-index: 999;
  height: 50px;
  background-color: transparent;
  margin-left: 0px;
  margin-right: 0px;
  text-align: center;
}
.ui-flexbox.v-center {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.ui-flexbox.h-center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.ui-flexbox {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: relative;
}
element.style {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: transparent;
  z-index: -1;
}
element.style {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  font-size: 16px;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
.mJQBuZ {
  color: #333;
  font-size: 14px;
  display: inline-block;
  background-color: initial;
}
.mini-cart .bar .btn {
  position: absolute;
  z-index: 40;
  right: 0;
  width: 110px;
  background: -webkit-linear-gradient(left, #00be34, #00cb1e);
  background: linear-gradient(90deg, #00be34, #00cb1e);
}

.more {
  width: 100%;
  min-height: 400px;
  // height: 0;
  overflow: hidden;
  background: #fff;
  border-radius: 8px 8px 0 0;
  padding: 10px;
  position: fixed;
  bottom:-470px;
  // bottom:0;
  transition:all .5s ease-in-out;
}
.showSc{
  transform:translateY(-50px);
  bottom:0px;
  z-index:1000;
  
}
.more .top {
  font-size: 12px;
  color: #666;
  // border-bottom: 1px solid #666;
}
.more .main{
  min-height:120px;
  height: auto;
}
.more .main .goods {
  float: left;
  width: 100%;
  height: 86px;
  background: #fff;
  margin-left: 10px;
}
.more .main .goods img {
  width: 50px;
  height: 50px;
  margin: 8px 10px 0 6px;
  float: left;
}
.more .main .goods .Right {
  float: left;
}
.more .main .gName {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 17px;
  font-size: 14px;
  color: #333;
  margin: 14px 0 10px 0;
}
.more .main .gPrice {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 17px;
  font-size: 14px;
  color: #ff3434;
  margin-bottom: 5px;
  float: left;
}
.more .main .add-cart {
  display: inline-block;
  width: 84px;
  height: 27px;
  float: left;
  margin-left:150px;
}
.more .main .add-cart .add {
  display: inline-block;
  width: 27px;
  height: 27px;
  text-align: center;
  line-height: 27px;
  background: #00be34;
  border-radius: 50%;
  color: #fff;
}
.more .main .add-cart .minus {
  display: inline-block;
  width: 27px;
  height: 27px;
  text-align: center;
  line-height: 27px;
  background: #00be34;
  border-radius: 50%;
  color: #fff;
}
.more .main .add-cart .num {
  width: 30px;
  height: 27px;
  display: inline-block;
  text-align: center;
  line-height: 27px;
}
</style>