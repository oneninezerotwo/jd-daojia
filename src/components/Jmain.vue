<template>
  <div class="floorBox">
    <p class="floorTitleMoreBox">
      <span class="moreBox-title">附近的店铺</span>
    </p>
    <div class="scroll-box scrollLoad-box">
      <!-- <router-link to=""> -->
        <div
          class="search-product-item-wrap showMta"
          data-useraction="{&quot;floorStyle&quot;:&quot;product7&quot;,&quot;spm_id&quot;:&quot;storeList|1|1||||0&quot;,&quot;res_type&quot;:&quot;storeList&quot;,&quot;storeId&quot;:&quot;11671336&quot;,&quot;res_unit&quot;:1}"
          v-for="(s,index) in shopList"
          :key="index"
          
        >
          <div class="store-item-container">
            <router-link to="/Jdetail">
                      <div style="position: relative; height: 66px; margin-right: 10px;">
              <img
                :src="s.imgUrl"
                style="width: 60px; height: 60px; border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.08); background: none;"
              >
            </div>
             </router-link>
           
            <div class="store-item-right-wrap">
              <router-link to="/Jdetail">
                  <div class="store-name-box">
                <div class="store-title" v-text="s.name"></div>
                <div class="honor-list">
                    
                 <img
                    src="http://img30.360buyimg.com/vendersettle/jfs/t27802/67/1813341038/2223/73d6a18f/5bee3729N8630ddda.png"
                  >
                </div>
              </div>
              </router-link>
              
              <div class="star-section-wrap">
                <div class="star-container">
                  <div class="star-wrap">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAMAAADBCCHQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACNUExURUdwTNjY2P+0KdjY2Pm2SeHbxNjY2NjY2NjY2P+3K//JNtbW1v+vLv+oFf+VFNjY2NbW1tfX1//ENP/KOP+uJf/HN/+iHf+eHNfX19fX1/+9Jf/Qa/+6FP/gnNjY2P+kIv+WGP/JOf/JNdjY2NjY2P+8L/+1Kv+kHv+qIv+fHP/DM/+vJv+7IP+aGf+QEhWBieEAAAAkdFJOUwCyE0oHC4EhnyGxRUezo8gV8INbf++YxTZaM0ZQgHBwOp/NXUgFLq0AAAF5SURBVDjLvdTZcoMgFAbgo6JI4pbd7El7jEui7/94NWoRjjMdetFy5zf8v6AowD8NsRIm9MkpcSOC1WZlQos9pb0RsVk1YwaEFiXLhOBUVdnJgBAdnRw0IQirLAsNCNHSycKfiYEtDsfzK8sexfl4EDYwlbx5yl1lVhvVCVEll6dzTyUQ99nH5vXuejzyvNiFW6ES4iK2fC6py6qEOBL3rXiBqBLY96p9zu+q57Mo8ryMbJW6mX4i6TssSda1lPioDz9pd7DMxvqyXING3VYVGoIjya6OPK3e61/Bclx8vSZEZ02CpMub1gOsn6R+JDprEqRd3rQeRN9e1rWghMg16pIqDWWSuOwf/xFBv/i6bgJKypcS9PtBnYYyR/24CMG1X3zdNFdKiBeNuqRKQ5mki+yXxLZtMAqipmm2jFB7xlyV5u8jqBL6GrndhUZg78rwxoDdwmZnE7IwTjRyU51SV6MkRosQiCjob8WCSBByHZ//hrjvUPrT8QWt3GBv5Zq9iAAAAABJRU5ErkJggg=="
                      style="position: absolute; width: 50px; height: 10px; top: 0px; left: 0px;"
                    >
                  </div>
                  <div class="star-wrap">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAMAAADBCCHQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACNUExURUdwTNjY2P+0KdjY2Pm2SeHbxNjY2NjY2NjY2P+3K//JNtbW1v+vLv+oFf+VFNjY2NbW1tfX1//ENP/KOP+uJf/HN/+iHf+eHNfX19fX1/+9Jf/Qa/+6FP/gnNjY2P+kIv+WGP/JOf/JNdjY2NjY2P+8L/+1Kv+kHv+qIv+fHP/DM/+vJv+7IP+aGf+QEhWBieEAAAAkdFJOUwCyE0oHC4EhnyGxRUezo8gV8INbf++YxTZaM0ZQgHBwOp/NXUgFLq0AAAF5SURBVDjLvdTZcoMgFAbgo6JI4pbd7El7jEui7/94NWoRjjMdetFy5zf8v6AowD8NsRIm9MkpcSOC1WZlQos9pb0RsVk1YwaEFiXLhOBUVdnJgBAdnRw0IQirLAsNCNHSycKfiYEtDsfzK8sexfl4EDYwlbx5yl1lVhvVCVEll6dzTyUQ99nH5vXuejzyvNiFW6ES4iK2fC6py6qEOBL3rXiBqBLY96p9zu+q57Mo8ryMbJW6mX4i6TssSda1lPioDz9pd7DMxvqyXING3VYVGoIjya6OPK3e61/Bclx8vSZEZ02CpMub1gOsn6R+JDprEqRd3rQeRN9e1rWghMg16pIqDWWSuOwf/xFBv/i6bgJKypcS9PtBnYYyR/24CMG1X3zdNFdKiBeNuqRKQ5mki+yXxLZtMAqipmm2jFB7xlyV5u8jqBL6GrndhUZg78rwxoDdwmZnE7IwTjRyU51SV6MkRosQiCjob8WCSBByHZ//hrjvUPrT8QWt3GBv5Zq9iAAAAABJRU5ErkJggg=="
                      style="position: absolute; width: 50px; height: 10px; top: 0px; left: 0px;"
                    >
                  </div>
                  <div class="star-wrap">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAMAAADBCCHQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACNUExURUdwTNjY2P+0KdjY2Pm2SeHbxNjY2NjY2NjY2P+3K//JNtbW1v+vLv+oFf+VFNjY2NbW1tfX1//ENP/KOP+uJf/HN/+iHf+eHNfX19fX1/+9Jf/Qa/+6FP/gnNjY2P+kIv+WGP/JOf/JNdjY2NjY2P+8L/+1Kv+kHv+qIv+fHP/DM/+vJv+7IP+aGf+QEhWBieEAAAAkdFJOUwCyE0oHC4EhnyGxRUezo8gV8INbf++YxTZaM0ZQgHBwOp/NXUgFLq0AAAF5SURBVDjLvdTZcoMgFAbgo6JI4pbd7El7jEui7/94NWoRjjMdetFy5zf8v6AowD8NsRIm9MkpcSOC1WZlQos9pb0RsVk1YwaEFiXLhOBUVdnJgBAdnRw0IQirLAsNCNHSycKfiYEtDsfzK8sexfl4EDYwlbx5yl1lVhvVCVEll6dzTyUQ99nH5vXuejzyvNiFW6ES4iK2fC6py6qEOBL3rXiBqBLY96p9zu+q57Mo8ryMbJW6mX4i6TssSda1lPioDz9pd7DMxvqyXING3VYVGoIjya6OPK3e61/Bclx8vSZEZ02CpMub1gOsn6R+JDprEqRd3rQeRN9e1rWghMg16pIqDWWSuOwf/xFBv/i6bgJKypcS9PtBnYYyR/24CMG1X3zdNFdKiBeNuqRKQ5mki+yXxLZtMAqipmm2jFB7xlyV5u8jqBL6GrndhUZg78rwxoDdwmZnE7IwTjRyU51SV6MkRosQiCjob8WCSBByHZ//hrjvUPrT8QWt3GBv5Zq9iAAAAABJRU5ErkJggg=="
                      style="position: absolute; width: 50px; height: 10px; top: 0px; left: 0px;"
                    >
                  </div>
                  <div class="star-wrap">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAMAAADBCCHQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACNUExURUdwTNjY2P+0KdjY2Pm2SeHbxNjY2NjY2NjY2P+3K//JNtbW1v+vLv+oFf+VFNjY2NbW1tfX1//ENP/KOP+uJf/HN/+iHf+eHNfX19fX1/+9Jf/Qa/+6FP/gnNjY2P+kIv+WGP/JOf/JNdjY2NjY2P+8L/+1Kv+kHv+qIv+fHP/DM/+vJv+7IP+aGf+QEhWBieEAAAAkdFJOUwCyE0oHC4EhnyGxRUezo8gV8INbf++YxTZaM0ZQgHBwOp/NXUgFLq0AAAF5SURBVDjLvdTZcoMgFAbgo6JI4pbd7El7jEui7/94NWoRjjMdetFy5zf8v6AowD8NsRIm9MkpcSOC1WZlQos9pb0RsVk1YwaEFiXLhOBUVdnJgBAdnRw0IQirLAsNCNHSycKfiYEtDsfzK8sexfl4EDYwlbx5yl1lVhvVCVEll6dzTyUQ99nH5vXuejzyvNiFW6ES4iK2fC6py6qEOBL3rXiBqBLY96p9zu+q57Mo8ryMbJW6mX4i6TssSda1lPioDz9pd7DMxvqyXING3VYVGoIjya6OPK3e61/Bclx8vSZEZ02CpMub1gOsn6R+JDprEqRd3rQeRN9e1rWghMg16pIqDWWSuOwf/xFBv/i6bgJKypcS9PtBnYYyR/24CMG1X3zdNFdKiBeNuqRKQ5mki+yXxLZtMAqipmm2jFB7xlyV5u8jqBL6GrndhUZg78rwxoDdwmZnE7IwTjRyU51SV6MkRosQiCjob8WCSBByHZ//hrjvUPrT8QWt3GBv5Zq9iAAAAABJRU5ErkJggg=="
                      style="position: absolute; width: 50px; height: 10px; top: 0px; left: 0px;"
                    >
                  </div>
                  <div class="star-wrap">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAMAAADBCCHQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACNUExURUdwTNjY2P+0KdjY2Pm2SeHbxNjY2NjY2NjY2P+3K//JNtbW1v+vLv+oFf+VFNjY2NbW1tfX1//ENP/KOP+uJf/HN/+iHf+eHNfX19fX1/+9Jf/Qa/+6FP/gnNjY2P+kIv+WGP/JOf/JNdjY2NjY2P+8L/+1Kv+kHv+qIv+fHP/DM/+vJv+7IP+aGf+QEhWBieEAAAAkdFJOUwCyE0oHC4EhnyGxRUezo8gV8INbf++YxTZaM0ZQgHBwOp/NXUgFLq0AAAF5SURBVDjLvdTZcoMgFAbgo6JI4pbd7El7jEui7/94NWoRjjMdetFy5zf8v6AowD8NsRIm9MkpcSOC1WZlQos9pb0RsVk1YwaEFiXLhOBUVdnJgBAdnRw0IQirLAsNCNHSycKfiYEtDsfzK8sexfl4EDYwlbx5yl1lVhvVCVEll6dzTyUQ99nH5vXuejzyvNiFW6ES4iK2fC6py6qEOBL3rXiBqBLY96p9zu+q57Mo8ryMbJW6mX4i6TssSda1lPioDz9pd7DMxvqyXING3VYVGoIjya6OPK3e61/Bclx8vSZEZ02CpMub1gOsn6R+JDprEqRd3rQeRN9e1rWghMg16pIqDWWSuOwf/xFBv/i6bgJKypcS9PtBnYYyR/24CMG1X3zdNFdKiBeNuqRKQ5mki+yXxLZtMAqipmm2jFB7xlyV5u8jqBL6GrndhUZg78rwxoDdwmZnE7IwTjRyU51SV6MkRosQiCjob8WCSBByHZ//hrjvUPrT8QWt3GBv5Zq9iAAAAABJRU5ErkJggg=="
                      style="position: absolute; width: 50px; height: 10px; top: 0px; left: -10px;"
                    >
                  </div>
                </div>
                <!-- 评分 -->
                <span class="star-label" v-text="s.storeStar">4.8</span>
                <div class="store-monthsale oneline-overflow-ellipsis" v-text="s.monthSale"></div>
                <div class="delivery-distance">
                  <span class="delivery-first oneline-overflow-ellipsis" v-text="s.deliveryFirst"></span>
                  <span class="distance-time-sep-line"></span>
                  <span class="delivery-first oneline-overflow-ellipsis" v-text="s.distance"></span>
                </div>
              </div>
              <div class="index-store-freight-box">
                <div class="freight-wrap">
                  <span class="delivery-first oneline-overflow-ellipsis" v-text="s.freightWords"></span>
                  <span class="distance-time-sep-line"></span>
                  <!-- <span class="delivery-first oneline-overflow-ellipsis">基础运费¥5</span> -->
                </div>
                <span
                  class="promotion-tags promotion-tags-empty"
                  style="border-color: rgb(76, 156, 255); color: rgb(76, 156, 255);"
                >
                  <span style="color: rgb(76, 156, 255);">达达专送</span>
                </span>
              </div>
              <ul class="index-store-list-fujia-bottom">
                <a href="#storeHome/storeId:11671336/orgCode:81372">
                  <div class="store-gian-newCoupons-box">
                    <div class="arrow-wrap">
                      <span
                      @click="changeHeight(index)"
                        class
                        style="width: 4px; height: 4px; transform: rotate(45deg); border-right: 1px solid rgb(102, 102, 102); border-bottom: 1px solid rgb(102, 102, 102); display: inline-block; position: absolute; left: 50%; top: 40%;"
                      ></span>
                    </div>
                    <div class="store-gain-coupons-box"  :class="{'store-gain-show-coupons':bool ?showHeight===index :bool}">
                      <div class="store-gain-show-box">
                        <span
                          v-for="(a,idx) in juanList" :key="idx"
                          class="store-gian-coupons-flag"
                          v-text="a.words"
                          style="color: rgb(255, 87, 87); border-color: rgb(255, 188, 188); background-color: rgb(255, 255, 255);"
                        ></span>
                        
                      </div>
                      <li class="index-store-fujia-item" v-for="(m,idx) in mjList" :key="idx">
                      <span
                        class="promotion-tags promotion-tags-full"
                        style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
                      >
                        <span v-text="m.name">满减</span>
                      </span>
                      <span class="index-store-fujia-desc" v-text="m.words">帮宝适一级帮满199减50，满398减120</span>
                    </li>
                    </div>
                    
                  </div>
                </a>
              </ul>
              
              <div></div>
            </div>
          </div>
        </div>
      <!-- </router-link> -->
      <div class="more-text">数据加载中请稍后</div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
// var list = [];
export default Vue.extend({
  data() {
    return {
      shopList: [],
      juanList:[],
      mjList:[],
      showHeight:true,
      bool:0
    }
  },
  created() {
    this.getshopList();
  },
  methods: {
    // 列表页渲染
    async getshopList() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cfdf34bd4d41825a9bdaa6c/daojia.jd/shoplist"
        //
      );
      // this.shopList =[...this.shopList,...data.data.result.data.data];
      var list = data.data.result.data.data;
      console.log(list);
      var list1 = list.map(function(item, idx) {
        //  console.log(item.floorCellData.coupons);
        return item.floorCellData;
      });
      // console.log(list1);
      //优惠券
      this.shopList = list1;
      var list2 =this.shopList.map(function(item,idx){
          return item.coupons;
      })
      this.juanList=list2[0];
      // console.log(this.juanList);
      //满减
      var list3 =this.shopList.map(function(item,idx){
          return item.tags;
      })
      this.mjList=list3[0];
      // console.log(this.mjList);
      

    },
    // 跳转详情页
    // 路由传参
    toDtl(){
      this.$router.push({
      // 路由名称
        name: 'Jdetail',
      // 传递参数
        params: {
          id: this.id
        }
      })
    // 路由取值
    // this.$route.params.id;
    },
    //变化高度
    changeHeight(index){
      this.bool = !this.bool;
      this.showHeight = index
    }
  }
});
</script>
 
<style lang="scss" scoped>
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
.store-gian-newCoupons-box .store-gain-show-coupons {
    height: auto;
}
body {
  background: #fff;
}
div {
  display: block;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-style: normal;
  height: auto;
}
.floorBox {
  background: #fff;
}
.floorTilte,
.floorTitleMoreBox {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #333;
  background-color: #fff;
  margin: 0;
}
p {
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
.moreBox-title {
  float: left;
  font-weight: 700;
  font-size: 20px;
}
.floorTitleMoreBox {
  // padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
  position: relative;
  text-align: left;
}
.scrollLoad-box {
  padding-bottom: 50px;
}
.scroll-box {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.search-product-item-wrap {
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #e7e9e4;
  padding: 20px 10px 15px;
  min-height: 70px;
}
.search-product-item-wrap .store-item-container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 0;
}
.search-product-item-wrap .store-item-container .store-item-right-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
}
.store-name-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  height: 20px;
  line-height: 20px;
}
.freight-wrap,
.store-name-box .store-title {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
}
.honor-list img {
  vertical-align: middle;
  width: 16px;
  height: auto;
  padding: 0 1px;
  margin-right: 4px;
  border: 0;
}
.star-section-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 16px;
  margin-top: 5px;
}
.star-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 50px;
  height: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  background-color: transparent;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}
.star-section-wrap .star-label {
  display: inline-block;
  padding-left: 3px;
  line-height: 10px;
  font-size: 10px;
  color: #ffa14e;
  vertical-align: 1px;
}
.star-container .star-wrap {
  width: 10px;
  height: 10px;
  overflow: hidden;
  background-color: transparent;
  position: relative;
  top: 0;
}
.star-container .star-wrap {
  width: 10px;
  height: 10px;
  overflow: hidden;
  background-color: transparent;
  position: relative;
  top: 0;
}
.star-container .star-wrap element.style {
  position: absolute;
  width: 50px;
  height: 10px;
  top: 0px;
  left: 0px;
}
element.style {
  position: absolute;
  width: 50px;
  height: 10px;
  top: 0px;
  left: 0px;
}
.oneline-overflow-ellipsis {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
.store-monthsale {
  color: #666;
  font-size: 11px;
  line-height: 14px;
  margin-left: 5px;
}
.delivery-distance {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.delivery-distance .delivery-first {
  font-size: 11px;
  color: #666;
}
.oneline-overflow-ellipsis {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
.delivery-distance .distance-time-sep-line {
  width: 1px;
  height: 8px;
  background-color: #f5f5f5;
  margin: 0 5px;
  display: inline-block;
}
.delivery-distance .delivery-first {
  font-size: 11px;
  color: #666;
}
.oneline-overflow-ellipsis {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
.search-product-item-wrap
  .store-item-container
  .store-item-right-wrap
  .index-store-freight-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
  height: 16px;
  line-height: 16px;
  margin-top: 5px;
}
.freight-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.freight-wrap,
.store-name-box .store-title {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
}
.oneline-overflow-ellipsis,
.single {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
.freight-wrap .delivery-first {
  font-size: 11px;
  color: #666;
}
.oneline-overflow-ellipsis,
.single {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
element.style {
  border-color: rgb(76, 156, 255);
  color: rgb(76, 156, 255);
}
.promotion-tags-empty {
  line-height: 14px;
  color: #ccc;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #ccc;
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

element.style {
  color: rgb(76, 156, 255);
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
.index-store-list-fujia-bottom {
  position: relative;
}
dd,
dl,
dt,
li,
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  color: #555;
}
.store-gian-newCoupons-box {
  position: relative;
}
.arrow-wrap {
  position: absolute;
  right: -12px;
  top: -8px;
  width: 40px;
  height: 40px;
  z-index: 10;
}
element.style {
  width: 4px;
  height: 4px;
  transform: rotate(45deg);
  border-right: 1px solid rgb(102, 102, 102);
  border-bottom: 1px solid rgb(102, 102, 102);
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 40%;
}
.store-gain-coupons-box {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 10px;
  height: 24px;
  padding-right: 20px;
  overflow: hidden;
}
// store-gian-coupons-flag {
//   color: rgb(255, 87, 87);
//   border-color: rgb(255, 188, 188);
//   background-color: rgb(255, 255, 255);
// }
element.style {
  color: rgb(255, 87, 87);
  border-color: rgb(255, 188, 188);
  background-color: rgb(255, 255, 255);
}
.store-gian-coupons-flag {
  display: inline-block;
  padding: 1px 2px;
  margin-top: 5px;
  margin-right: 5px;
  border-radius: 4px 1px 4px 1px;
  border: 1px solid #ff5757;
  font-size: 10px;
  color: #ff5757;
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
    rgb(85, 216, 94),
    rgb(72, 193, 81)
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
.index-store-list-fujia-bottom .index-store-fujia-desc {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.index-store-fujia-desc {
  font-size: 11px;
  vertical-align: top;
}
.freight-wrap,
.store-name-box .store-title {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
}
.store-name-box .store-title {
  font-size: 16px;
  color: #333;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0;
}
.more-text {
  display: block;
  width: 100%;
  text-align: center;
}
</style>
