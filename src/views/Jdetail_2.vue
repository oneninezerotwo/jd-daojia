<template>
  <!-- <div class="store-goods-floor" style="height: 628px;"> -->
  <div class="store-tab-con store-tab-con-goods">
    <div class="store-goods-left-bar">
      <ul class="store-goods-left">
        <li class="store-goods-leftItem active">为你优选</li>
        <li class="store-goods-leftItem">单品优惠</li>
        <li class="store-goods-leftItem">满额促销</li>
        <li class="store-goods-leftItem">新鲜水果</li>
        <li class="store-goods-leftItem">时令蔬菜</li>
        <li class="store-goods-leftItem">肉蛋家禽</li>
        <li class="store-goods-leftItem">海鲜荟萃</li>
        <li class="store-goods-leftItem">牛奶酸奶</li>
        <li class="store-goods-leftItem">冷藏冷冻</li>
        <li class="store-goods-leftItem">熟食快餐</li>
        <li class="store-goods-leftItem">面包蛋糕</li>
        <li class="store-goods-leftItem">烧烤狂欢</li>
        <li class="store-goods-leftItem">休闲食品</li>
        <li class="store-goods-leftItem">中外名酒</li>
        <li class="store-goods-leftItem">水饮冲调</li>
        <li class="store-goods-leftItem">粮油副食</li>
        <li class="store-goods-leftItem">干货杂粮</li>
        <li class="store-goods-leftItem">进口商品</li>
        <li class="store-goods-leftItem">纸品家清</li>
        <li class="store-goods-leftItem">日用百货</li>
        <li class="store-goods-leftItem">个护美妆</li>
        <li class="store-goods-leftItem">宝贝中心</li>
        <li class="store-goods-leftItem">宠物之家</li>
        <li class="store-goods-leftItem">文娱用品</li>
        <li class="store-goods-leftItem">服装家纺</li>
      </ul>
    </div>
    <!-- <div class="store-goods-right-wrap"> -->
    <!-- <div class="store-good-right-content index-StoreResultNew-wrap"> -->
    <div class="store-good-list-box store-goods-list">
      <div class="good-current-sencond-box">
        <div class="childCategoryTitle">
          <div class="good-current-title-txt">
            为你优选
            <span>(47)</span>
          </div>
          <div class="categorySort">
            <span>
              <span class="sort-span sort-txt">默认排序</span>
              <span class="sort-down"></span>
            </span>
          </div>
        </div>
      </div>
      <div class="scroll-wrap">
        <div
          class="scroll-box"
          style="min-height: 551.46px; transform: translate(0px, 0px) translateZ(0px);"
        >
          <div class="pullDown" style="display: none;"></div>
          <div class="skuUl" style="min-height: 546px;">
            <div
              class="goods-item"
              style="height: 155px"
              v-for="(s,index) in shopList"
              :key="index"
            >
              <li class="goodslist flex flex-justify-between">
                <a
                  class="goodslist-a"
                  href="#goodsDetails/skuId:2003118402/storeId:11671336/orgCode:81372"
                >
                  <div class="goodsleft flex">
                    <img class="pic smallscreen_pic" :src="s.imgUrl" style="background: none;">
                  </div>
                  <div class="goodsright flex flex-item flex-vertical">
                    <span class="text twoline-overflow-ellipsis title" v-text="s.skuName"></span>
                    <p class="prize">
                      <span class="text monthsale" v-text="'月售'+s.monthSales+'件'"></span>
                      <br>
                      <span class="text praise" v-text="s.highOpinion"></span>
                    </p>
                    <div class="proTag">
                      <span
                        class="promotion-tags promotion-tags-full"
                        style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
                      >
                        <span>8.57折</span>
                        <br>
                      </span>
                    </div>
                    <br>
                    <div class="price-wrap">
                      <div class="goods-price">
                        <div class="column">
                          <label class="real_Price" style="font-size: 18px; line-height: 22px;">
                            <em style="font-size: 18px;" v-text="'￥'+s.realTimePrice"></em>
                          </label>
                          <!-- <label class="basic_Price" style="font-size: 12px; line-height: 15px;">
                            <em style="font-size: 12px;">¥</em>13.9
                          </label>-->
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="cartBox">
                  <div class="addCart flex">
                    <!-- <div class="add" @click="jia(s.skuId)"></div> -->
                    <!-- 这里让他渲染出来 -->
                    
                    <div class="add" @click="select(s.skuId)"></div>
                    <span class="gQty" v-text="s.incartCount"></span>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div class="pullUp"></div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <div class="storehome-to-top ipx-pad product" style="display: none;"></div>
    <!-- <detBottom/> -->
  </div>
  <!-- </div> -->
</template>

<script>
import Vue from "vue";
import store from "@/store";
import { constants } from "crypto";

export default Vue.extend({
  // 私有数据
  data() {
    return {
      isid: "",
      list1: [],
      qty: 0,
      shopList: [],
      orderList: [],
      newList: [],
      incartCount: 0,
      tatal: 0,
      list:0,
      dataArr:[]
      // qty : 0,
      // isShow: true
    };
  },
  created() {
    // 通知底部隐藏
    this.$store.state.isShowMfooter = false;
    this.getshopList(() => {
      // this.$nextTick(() => {
      //   // this.scroll = new BScroll(this.$refs.wrapper, {});
      //   console.log(this.$refs.wrapper.offsetHeight)
      //   this.$refs.wrapper.offsetHeight
      // });
    });
  },
  computed: {},
  methods: {
    // 获取列表数据
    async getshopList() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cfdf12dc6a5446f64d5d207/example/123"
      );
      let list = data.data.result.searchCatResultVOList[0].searchResultVOList;
      // console.log(data);
      console.log(list);
      let list1 = list.map(function(item) {
        return item;
      });
      this.shopList = list1;
      // console.log(this.shopList)
    },
    select(id) {
      // 拿到唯一数据
      this.shopList.forEach(item => {
        // console.log(id)
        if (item.skuId === id) {
          // console.log(this.newList)
          this.newList = item;
          this.name = item.skuName;
          this.qty = item.incartCount;
          this.imgurl = item.imgUrl;
          this.price = item.realTimePrice;
          // console.log(this.name)
        }
      });
      
      // var obj = {}
      var obj ={}
      obj.name = this.name
      obj.qty = this.qty
      obj.imgurl = this.imgurl
      obj.price = this.price
      // console.log(obj)
      this.dataArr.push(obj)
      // console.log(this.dataArr)
      // arr.push(this.name, this.qty, this.imgurl, this.price);
      // this.list.push(arr);
      // console.log(this.list)

      // 此处是唯一的数量值
      this.newList.incartCount++;
      this.qty = Number(this.newList.incartCount);
      this.$store.state.qty = this.qty;
      // this.orderList.push(this.newList);

      // vuex传递数据
      this.$store.commit("addItem", {
        orderList: this.dataArr
      });
    }
    // jia(idx) {
    //   this.isid = idx;
    //   this.qty += 1;

    //   // let that = this
    //   this.shopList.forEach(item => {
    //     // console.log(item)
    //     if (item.skuId === idx) {
    //       // console.log(this.newList)
    //       this.newList = item;
    //       // console.log(this.newList);
    //       // 将要用的数据用变量存储 item.incartCount
    //       // 用console.log(item.变量)
    //       // let cartName = this.newList.skuName;
    //       // let cartImg = this.newList.imgUrl;
    //       // let cartNum = 0;
    //       // cartNum++;
    //       // console.log(cartName, cartImg, cartNum);

    //       // 传值到vuex
    //       // var arr = [];
    //       // arr.push(cartName, cartImg, cartNum);
    //       this.orderList.push(this.newList);

    //       // value的数据
    //       console.log(this.orderList);

    //       // vuex传递数据
    //       this.$store.commit("addItem", {
    //         orderList: this.orderList
    //       });
    //       // 购物车数量
    //       this.$store.state.qty = this.qty;
    //     }
    //   });
    //   // console.log(this.newList);

    //   // let cartNum = item.
    //   //   this.$store.commit('addItem', {
    //   //   orderList : this.orderList,
    //   // });
    //   // 选好了 订单信息
    // }
  }
});
</script>

<style lang="scss" scoped>
.store-goods-floor {
  overflow: hidden;
}
.store-tab-con-goods {
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: justify;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  align-items: stretch;
  position: relative;
}
.store-tab-con {
  position: relative;
  width: 100%;
  height: 100%;
}
// 左侧列表
.store-goods-left {
  width: 80px;
  padding-bottom: 20px;
  background-color: #fafafa;
  position: relative;
}
.store-goods-leftItem.active {
  color: #333;
  font-weight: 700;
  background-color: #fff;
}
.store-goods-leftItem {
  display: -webkit-box;
  display: -moz-box;
  width: auto;
  height: 46px;
  padding: 2px 12px;
  line-height: 21px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #666;
  font-size: 14px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  -moz-line-clamp: 2;
  -moz-box-orient: vertical;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  box-pack: center;
}
.store-goods-right-wrap {
  position: relative;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-orient: vertical;
  background-color: #fff;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
.store-good-list-box,
.store-good-right-content {
  -webkit-flex: 1 1;
  flex: 1 1;
  -webkit-box-flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.store-good-right-content {
  padding-bottom: 50px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
}
.store-good-list-box {
  background: #fff;
  margin-right: 0;
  -webkit-overflow-scrolling: touch;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
}
.store-good-list-box,
.store-good-right-content {
  -webkit-flex: 1 1;
  flex: 1 1;
  -webkit-box-flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.childCategoryTitle {
  display: -webkit-box;
  display: flex;
  display: -webkit-flex;
  -webkit-box-flex: 1;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: justify;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex: 1;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.good-current-title-txt {
  flex: 1 1;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  font-size: 12px;
  line-height: 30px;
  color: #666;
  padding-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.good-current-title-txt {
  flex: 1 1;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  font-size: 12px;
  line-height: 30px;
  color: #666;
  padding-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.categorySort {
  font-size: 12px;
  line-height: 30px;
  color: #666;
  max-width: 132px;
}
.categorySort .sort-span {
  padding: 7px 0;
  vertical-align: middle;
}
.categorySort .sort-down {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.categorySort .sort-down,
.categorySort .sort-up {
  display: inline-block;
  vertical-align: middle;
  width: 5px;
  height: 5px;
  border-left: 1px solid #666;
  border-bottom: 1px solid #666;
  margin: 0 10px 0 5px;
}
.scroll-wrap {
  overflow: hidden;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
  position: relative;
}
element.style {
  min-height: 551.46px;
  transform: translate(0px, 0px) translateZ(0px);
}
.pullDown,
.pullUp,
.scroll-box {
  box-sizing: border-box;
  width: 100%;
}
.scroll-box {
  position: relative;
  overflow: visible;
  height: 100%;
}
.pullDown {
  top: -50px;
  padding-top: 10px;
}
.pullDown,
.pullUp {
  height: 50px;
  line-height: 40px;
  font-weight: 700;
  font-size: 14px;
  color: #888;
  position: absolute;
  text-align: center;
}
.pullDown,
.pullUp,
.scroll-box {
  box-sizing: border-box;
  width: 100%;
}
element.style {
  min-height: 546px;
}
.skuUl {
  padding: 0 0 30px 10px;
  box-sizing: border-box;
}
.flex,
.mini-cart .content-item .item-title,
.mini-cart .goods-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.goodslist {
  width: 285px;
  height: 155px;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 15px 10px 15px 0;
  background: #fff;
}

.flex-justify-between {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.goodslist .goodslist-a {
  overflow: hidden;
  //   width: 17.1875rem;
  //   height: 7.8125rem;
  width: 285px;
  height: 155px;
}
a {
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  color: #555;
}
.goodslist .goodsleft {
  position: relative;
  float: left;
  margin-top: 2px;
  border-radius: 4px;
}
.flex,
.mini-cart .content-item .item-title,
.mini-cart .goods-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.goodslist .goodsleft .pic {
  display: block;
  width: 65px;
  height: 65px;
  -webkit-border-radius: 4px;
  -ms-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background-color: #f4f4f4;
}
.goodslist .goodsright .title {
  font-weight: 700;
}

.goodslist .goodsright p.prize {
  font-size: 0;
}
.goodslist .goodsright p.prize .monthsale,
.goodslist .goodsright p.prize .praise {
  font-size: 11px;
  color: #666;
  line-height: 14px;
}
.goodslist .goodsright p.prize .monthsale {
  margin-right: 8px;
}

.promotion-tags-full {
  background: #ff7d7d;
  margin-right: 3px;
}
.promotion-tags {
  display: inline-block;
  padding: 0 3px;
  font-size: 10px;
  // height: 14px;
  // line-height: 14px;
  border-radius: 4px 1px;
  color: #fff;
  z-index: 1;
  box-sizing: border-box;
}

.real_Price {
  color: #ff3434;
  position: absolute;
  top: 85px;
  left: 231px;
}

.goodslist .cartBox {
  position: absolute;
  right: 15px;
  bottom: 40px;
}
.flex,
.mini-cart .content-item .item-title,
.mini-cart .goods-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.addCart {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: row-reverse;
  flex-direction: row-reverse;
}
.addCart .add,
.addCart .btn,
.addCart .minus {
  background-image: url(//static-o2o.360buyimg.com/daojia/react/images/op.455b25b1.png);
  background-repeat: no-repeat;
  background-size: 100%;
  width: 27px;
  height: 27px;
  vertical-align: top;
  border: 0 solid transparent;
  -webkit-background-origin: content-box;
  background-origin: content-box;
}
.addCart .add {
  position: relative;
}
.addCart .gQty{
  display: inline-block;
  margin:0 5px;
  line-height: 27px;
}
.goodslist:after {
  height: 1px;
  content: "";
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: scaleY(0.5);
  -webkit-transform: scaleY(0.5);
}
</style>
