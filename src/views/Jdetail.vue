<template>
  <div class="indexstoreHome">
    <div class="store-new-title-wrap clearfix">
      <img
        class="store-new-logo"
        src="https://img30.360buyimg.com/vendersettle/jfs/t1/74584/34/1280/61330/5cf87ee9Ed9358d3c/57af22966ac8d760.png"
        style="background: none;"
      >
      <div class="store-new-info-wrap">
        <div class="store-title-box clearfix">
          <h2 class="store-new-title">沃尔玛-番禺店</h2>
          <div class="store-focus-wrap">
            <i class="store-focus"></i>
          </div>
        </div>
        <p class="store-delivery-tip" style="margin-bottom: 9px;">
          达达专送
          <span>
            <var>&nbsp;·</var>明日09:00起送
          </span>
        </p>
        <p class="store-delivery-tip">
          <span class="store-icon-txt">基础运费5元</span>
        </p>
      </div>
      <ul class="couponAndTag">
        <li class="index-store-fujia-item store-single-promot">
          <span
            class="promotion-tags promotion-tags-full"
            style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
          >
            <span>返券</span>
          </span>
          <span class="index-store-fujia-desc">实付满59元订单完成后返18元优惠券(每单返)</span>
          <span class="index-store-fujia-count">
            30种优惠
            <i class="store-bg-sprite store-more-tags"></i>
          </span>
        </li>
      </ul>
      <div class="popup-layer store-bg-layer hide">
        <div class="popup-mask hide"></div>
        <div class="popup-box ipx-pad popup-box-hide">
          <div class="popup-t">商家详情</div>
          <a href="javascript:;" class="popup-close"></a>
          <div class="popup-content"></div>
        </div>
      </div>
    </div>
    <!-- 搜索框 -->
    <div class="store-tab-bar flex">
      <div class="store-search-bar flex">
        <div class="store-search-wrap">
          <a
            class="home-search"
            href="#storeSearch/searchType:store/storeId:11671336/orgCode:81372/industry:1/placeHolder:%25E6%2590%259C%25E7%25B4%25A2%25E5%25BA%2597%25E5%2586%2585%25E5%2595%2586%25E5%2593%2581%25EF%25BC%258C%25E5%2585%25B13151%25E4%25BB%25B6%25E5%25A5%25BD%25E7%2589%25A9"
          >
            <span>搜索店内商品，共3151件好物</span>
          </a>
        </div>
        <i class="couponEnter moreCoupon"></i>
      </div>
    </div>
    <!-- 大图 -->
    <div class="store-act-box">
      <div class="store-act-banner-box store-act-banner-box-slide scrollbar-hide">
        <a
          class="store-act-banner-link store-floor-item showMta"
          data-useraction="{&quot;activityId&quot;:&quot;11908273&quot;,&quot;index&quot;:1,&quot;storeId&quot;:&quot;11671336&quot;}"
          data-clickid="storebannerlist"
          href="#storeActivityPage/activityId:11908273/storeId:11671336/actFrom:store"
        >
          <img
            class="store-act-banner-pic"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/79853/16/1452/73859/5cfba3e8Ecd60de3f/f2a0dcedd055411d.jpg"
            style="background: none;"
          >
        </a>
        <a
          class="store-act-banner-link store-floor-item showMta"
          data-useraction="{&quot;activityId&quot;:&quot;11907597&quot;,&quot;index&quot;:1,&quot;storeId&quot;:&quot;11671336&quot;}"
          href="#storeActivityPage/activityId:11907597/storeId:11671336/actFrom:store"
        >
          <img
            class="store-act-banner-pic"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/81072/15/1318/433538/5cf8beeeEb321120b/e1182fe17b6b25a2.png"
            style="background: none;"
          >
        </a>
      </div>
    </div>
    <!-- 内容 -->
    <Jdetail_2/>
    <detBottom/>
  </div>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator";
  import Jdetail_2 from "@/views/Jdetail_2.vue";
  import detBottom from "@/views/detBottom.vue";

  @Component({
    components: {
      Jdetail_2,
      detBottom
    }
  })
  export default class Home extends Vue {}
</script>


<style lang="scss" scoped>
.storeHomeNew {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: #fff;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-style: normal;
}
.store-new-title-wrap {
  position: relative;
  color: #fff;
  color: #333;
  box-sizing: border-box;
  padding: 8px 10px 15px;
}
.store-new-title-wrap .store-new-logo {
  position: absolute;
  width: 68px;
  height: 68px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
  border-radius: 20px 4px 20px 4px;
  -webkit-border-radius: 20px 4px 20px 4px;
}
img {
  border: 0;
}
.store-new-title-wrap .store-new-info-wrap {
  padding-left: 78px;
  line-height: 20px;
  min-height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
}
.store-new-title-wrap .store-title-box {
  margin-right: 30px;
}
.store-new-title-wrap .store-title-box .store-new-title {
  float: left;
  width: 100%;
  line-height: 22px;
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 9px;
}
.store-new-title-wrap .store-title-box .store-focus-wrap {
  position: absolute;
  top: -1px;
  right: 10px;
  font-size: 12px;
  color: #fff;
  text-align: right;
  width: 30px;
  height: 30px;
  padding-left: 10px;
}
.store-new-title-wrap .store-title-box .store-focus-wrap .store-focus {
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(//static-o2o.360buyimg.com/daojia/react/images/focus.5662b820.png);
  background-repeat: no-repeat;
  background-position: 3px 4px;
  -webkit-background-size: 60px auto;
  background-size: 68px auto;
}
.clearfix:after {
  clear: both;
  display: block;
  content: "...";
  visibility: hidden;
  height: 0;
  font-size: 0;
}
.store-delivery-tip {
  position: relative;
  line-height: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  padding-right: 68px;
}
.store-delivery-tip {
  position: relative;
  line-height: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  padding-right: 68px;
}
dd,
dl,
dt,
li,
ol,
ul {
  list-style: none;
}
.index-store-fujia-item.store-single-promot {
  margin: 10px 0 0;
}
.index-store-fujia-item {
  margin-top: 5px;
  font-size: 11px;
  position: relative;
  color: #666;
  -webkit-text-size-adjust: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 14px;
}
element.style {
  background: -webkit-linear-gradient(
    left top,
    rgb(255, 125, 125),
    rgb(255, 81, 56)
  );
}
.promotion-tags-full {
  background: #ff7d7d;
  margin-right: 3px;
}
.promotion-tags {
  display: inline-block;
  padding: 0 3px;
  font-size: 10px;
  height: 14px;
  line-height: 14px;
  border-radius: 4px 1px;
  color: #fff;
  z-index: 1;
  box-sizing: border-box;
}
.promotion-tags > span {
  display: inline-block;
  height: 14px;
  line-height: 14px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.store-single-promot .index-store-fujia-desc {
  display: inline-block;
  max-width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 11px;
}
.index-store-fujia-count {
  position: absolute;
  top: 1px;
  right: 15px;
  font-size: 11px;
}
.store-bg-sprite.store-more-tags {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.index-store-fujia-count .store-more-tags {
  position: absolute;
  top: 5px;
  width: 9px;
  height: 5px;
  background-position: -7px -4px;
  margin: 0 0 0 5px;
}
.store-bg-sprite {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAACGCAMAAABNJOyMAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTJmZmd3d3ZmZmZmZmdzc3JmZmcDAwJmZmdzc3N7e3t3d3ZmZmdzc3Nzc3Nzc3MfHx93d3bm5udzc3Nvb29zc3Nzc3JmZmRWbWWQAAAAWdFJOUwDpO6V84iYOx/MjW0qJy7yKdlaun5iqFN/bAAABo0lEQVRo3u2Z666DIBCERQTBS4lpS9//TY/YI1pEC+s2aZP9fjVYx2XYwQSLgiB+D6kYUx2GUvWYqNCUELSckpJSndfiTqkuitpp8bNKfPMTwkspc4EQ6sCgCqxVb6yGasUWzWkxma3Exts2Ld5BtFRM6amlMqXYg0Vj140XcidYycwLBEEQKLRCtChC9c2O3OrzSs3FTlyas0qltv/o8pzSYFcMZ2y62heuYMMaYQME0LDW2zT4eWpQV/S+lNHv0hfY59tk5nufXTD3hLUm07Clivs8dF9XCbBp7U10MCkq2wKWUlNjtG9LaGB6VPqDZU2J0ZsWWjVbclT2prBM/zhGS1T2/7c87ShGidUnxKhPbcJ3McpZ6eMYraKS0n8HMSpzU7HEKNQy2Vn10zDBBZ2/g8zm6mBcQPa155KLyGj+bjsZ1m82Fm0A74DGaIz3NkEQBOHhrMOSYtHDKxDuxAvrbKmCHOr9mBaHH85+XAtJyh39ckQtrFaVKN8kkKXcmbREs6r6tgVEVVLfFhs8JbwtBnGzYohbqKIPEARBEARB7PMHzioyb5RkiAUAAAAASUVORK5CYII=);
  background-size: 37px 66px;
}
.store-bg-layer.popup-layer,
.store-coupon-layer.popup-layer {
  z-index: 1004;
}
.hide {
  display: none;
}
.popup-layer {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background: transparent;
  z-index: 1002;
}
.popup-box,
.popup-mask {
  position: absolute;
  left: 0;
  width: 100%;
}
.popup-mask {
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.popup-box,
.popup-box.popup-box-hide {
  -webkit-transition: all 0.6s;
  transition: all 0.6s;
}
.popup-box {
  bottom: 0;
  height: 80%;
  background: #fff;
  border-radius: 10px 10px 0 0;
  color: #333;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
  box-sizing: border-box;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.popup-box,
.popup-mask {
  position: absolute;
  left: 0;
  width: 100%;
}

// 搜索框
.store-tab-bar {
  background: #fff;
  position: relative;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 14;
  white-space: nowrap;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  display: -webkit-box;
  display: box;
}
.flex,
.mini-cart .content-item .item-title,
.mini-cart .goods-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.store-search-bar,
.store-search-wrap {
  -webkit-box-flex: 1;
  flex: 1 1;
  overflow: hidden;
}
.store-search-bar {
  box-flex: 1;
  -webkit-flex: 1 1;
  padding: 5px 10px;
  box-sizing: border-box;
}
.store-new-title-wrap .store-new-logo {
  position: absolute;
  width: 68px;
  height: 68px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
  border-radius: 20px 4px 20px 4px;
  -webkit-border-radius: 20px 4px 20px 4px;
}
.store-search-wrap {
  position: relative;
  background: #f4f4f4;
  height: 30px;
  line-height: 21px;
  border-radius: 30px;
  display: -webkit-box;
  display: flex;
  display: -webkit-flex;
  -webkit-flex: 1;
}
.store-search-wrap .home-search {
  font-size: 14px;
  color: #999;
  text-align: left;
  background: url(//static-o2o.360buyimg.com/daojia/react/images/search_bar_sprites.57c20493.png)
    no-repeat;
  background-size: 44px auto;
  background-position: -5px -7px;
  padding-left: 27px;
  line-height: 30px;
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
}
.couponEnter {
  display: inline-block;
  background: url(//static-o2o.360buyimg.com/daojia/react/images/groupCopy.268ca879.png)
    no-repeat;
  background-size: 44px auto;
  height: 30px;
  width: 47px;
  background-position: 6px;
}
.store-act-banner-box.store-act-banner-box-slide {
  height: calc((25000vw - 8500px) / 750);
}
.store-act-banner-box {
  position: relative;
  white-space: nowrap;
  font-size: 0;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  height: -webkit-calc((25000vw - 5000px)/750);
  height: calc((25000vw - 5000px) / 750);
  margin-left: 10px;
  box-sizing: border-box;
}
.store-act-banner-box.store-act-banner-box-slide .store-act-banner-link {
  width: -webkit-calc(100% - 14px);
  width: calc(100% - 14px);
  height: -webkit-calc((9100% - 1274px)/341);
  height: calc((9100% - 1274px) / 341);
}
.store-act-banner-box .store-act-banner-link {
  display: inline-block;
  padding-right: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 26.68622%;
  position: relative;
}

.store-act-banner-box .store-act-banner-pic {
  display: block;
  width: 100%;
  background: #f4f4f4;
  border-radius: 4px;
}
.store-act-banner-box.store-act-banner-box-slide .store-act-banner-link {
  width: -webkit-calc(100% - 14px);
  width: calc(100% - 14px);
  height: -webkit-calc((9100% - 1274px)/341);
  height: calc((9100% - 1274px) / 341);
}
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
  padding-bottom: 80px;
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
  width: 17.8125rem;
  height: 9.6875rem;
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
  width: 17.1875rem;
  height: 7.8125rem;
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
.goodslist .goodsright {
  padding-left: 10px;
  overflow: hidden;
}
.flex-item,
.mini-cart .content-item .item-title .desc,
.mini-cart .goods-list .goods-item {
  
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1 1;
  overflow: hidden;
}
.goods-item a{
  width: 155px;
  height: 9.6875rem;
}
.flex, .mini-cart .content-item .item-title, .mini-cart .goods-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.goodslist .goodsright .title {
  font-weight: 700;
}
.goodslist .goodsright .text {
  font-size: 16px;
  color: #333;
  max-height: 42px;
  line-height: 20px;
  word-break: break-all;
}
.goodslist .goodsright p.prize {
  font-size: 0;
}
.goodslist .goodsright > :not(:first-child) {
  padding-top: 5px;
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
.goodslist .goodsright p.prize .monthsale,
.goodslist .goodsright p.prize .praise {
  font-size: 11px;
  color: #666;
  line-height: 14px;
}
.goodslist .goodsright .proTag {
  padding-top: 5px;
}
element.style {
  background: -webkit-linear-gradient(
    left top,
    rgb(255, 200, 55),
    rgb(255, 150, 51)
  );
}
.promotion-tags-full {
  background: #ff7d7d;
  margin-right: 3px;
}
.promotion-tags {
  display: inline-block;
  padding: 0 3px;
  font-size: 10px;
  height: 14px;
  line-height: 14px;
  border-radius: 4px 1px;
  color: #fff;
  z-index: 1;
  box-sizing: border-box;
}
.promotion-tags > span {
  display: inline-block;
  height: 14px;
  line-height: 14px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goodslist .goodsright .price-wrap {
  overflow: hidden;
  font-size: 0;
}
.goodslist .goodsright > :not(:first-child) {
  padding-top: 5px;
}
.column,
.row {
  display: -webkit-box;
}
element.style {
  font-size: 18px;
  line-height: 22px;
}
.goods-price .column > label {
  display: block;
  white-space: nowrap;
}
.real_Price {
  color: #ff3434;
}
element.style {
  font-size: 18px;
}
element.style {
  font-size: 12px;
  line-height: 15px;
}
.goods-price .column > label {
  display: block;
  white-space: nowrap;
}
.column .basic_Price {
  color: #999;
}
.basic_Price,
.basic_Price em {
  text-decoration: line-through;
}
element.style {
  font-size: 12px;
}
.basic_Price,
.basic_Price em {
  text-decoration: line-through;
}
.goodslist .cartBox {
  position: absolute;
  right: 10px;
  bottom: 15px;
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
.flex-item, .mini-cart .content-item .item-title .desc, .mini-cart .goods-list .goods-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1 1;
    overflow: hidden;
}
</style>

