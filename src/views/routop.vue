<template>
    <div class="tab-bar-box">
      <div class="tab-bar">
        <ul class="tab-bar-ul">
          <li
            v-for="(t,index) in tabs"
            :key="index"
            @click="hightLight2(index)"
            class="tab-bar-li"
            :class="{
              on: tab === index
            }"
            
          >
            <span v-text="t.name"></span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          name: "关注",
          url: "rouSearch",
          // className: "icon-home"
        },
        {
          name: "食谱",
          url: "rouCook",
          // className: "icon-discovery"
        },
        {
          name: "推荐",
          url: "rouRecommend",
          // className: "icon-cart"
        },
        {
          name: "时尚美妆",
          url: "rouBeauty",
          // className: "icon-order"
        },
        {
          name: "生活",
          url: "rouFocus",
          // className: "icon-user"
        }
      ],
      tab: 0
    };
  },
  methods: {
    hightLight2(index) {
      // console.log(this);
      // router.push(...)
      // 编程式导航，代替了传统的<router-link>
      this.$router.push({
        // path
        name: this.tabs[index].url
      });
      //   记录位置
      this.tab = index;
      // index 你点击的当前所在位置
      // console.log(index);
    }
  }
});
</script>

<style scoped>
/* 附近动态 */
.commonTitle20 {
  font-size: 20px;
  line-height: 24px;
}
.commonTitle,
.commonTitle20 {
  margin: 30px 10px 15px;
  color: #333;
  font-weight: 700;
}

/* 动态详情 */
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-style: normal;
}
.tab-bar-box {
  height: 50px;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 501;
}
.tab-bar,
.tab-bar .tab-bar-ul {
  text-align: center;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: -webkit-transform 0s;
  transition: -webkit-transform 0s;
  transition: transform 0s;
  transition: transform 0s, -webkit-transform 0s;
  white-space: nowrap;
}
.tab-bar {
  width: 100%;
  height: 60px;
  line-height: 50px;
  background-color: #fff;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.tab-bar .tab-bar-ul {
  height: 50px;
  display: inline-block;
}
.tab-bar,
.tab-bar .tab-bar-ul {
  text-align: center;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: -webkit-transform 0s;
  transition: -webkit-transform 0s;
  transition: transform 0s;
  transition: transform 0s, -webkit-transform 0s;
  white-space: nowrap;
}
dd,
dl,
dt,
li,
ol,
ul {
  list-style: none;
}
.tab-bar .tab-bar-ul .tab-bar-li.on {
  color: #47b34f;
}
.tab-bar .tab-bar-ul .tab-bar-li {
  font-size: 16px;
  color: #333;
  padding: 15px 13px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  position: relative;
}
.tab-bar .tab-bar-ul .tab-bar-li.on:after {
  content: "";
  height: 3px;
  width: 20px;
  background-color: #47b34f;
  position: absolute;
  border-radius: 5px;
  bottom: 7px;
  left: 50%;
  margin-left: -10px;
}
/* 搜索框 */
a {
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  color: #555;
}
.search-bar-index {
  background-color: #fff;
  padding: 3px 10px 10px;
}
.search-bar-index .search-bar-span {
  height: 34px;
  width: 100%;
  background-color: #f8f8f8;
  font-size: 14px;
  line-height: 34px;
  border-radius: 17px;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  color: #999;
}
.search-bar-index .search-bar-span .search-bar-text {
  position: relative;
}
.search-bar-icon,
.search-bar-index .search-bar-span .search-bar-text:before,
.search-bar .search-delete,
.search-bar:before {
  background-image: url(//static-o2o.360buyimg.com/daojia/react/images/search_bar_sprites.57c20493.png);
  background-repeat: no-repeat;
  background-size: 44px auto;
}
.search-bar-index .search-bar-span .search-bar-text:before {
  content: "";
  width: 14px;
  height: 14px;
  position: absolute;
  left: -16px;
  top: 50%;
  margin-top: -6px;
  background-position: -16px -16px;
}

/* 菜单1 */
.tab-content .panel {
    margin: 10px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
}
.faxian-zhanwei-warp {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    border-radius: 6px;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 4% 3.2%;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.faxian-zhanwei-warp .faxian-zhanwei-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    width: 11.77%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    margin: 0 7.4% 4% 0;
}
a {
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    color: #555;
}
.faxian-zhanwei-warp .faxian-zhanwei-item .faxian-box-circle img {
    width: 100%;
    height: 100%;
}
img {
    border: 0;
}
.faxian-zhanwei-warp .faxian-zhanwei-item .faxian-box-bottom {
    text-align: center;
    font-size: 12px;
    margin: 8px 0 0 -2px;
    width: 109.8%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.faxian-zhanwei-warp .faxian-zhanwei-item .faxian-box-circle {
    width: 44px;
    height: 44px;
    border-radius: 22px;
    overflow: hidden;
}
</style>