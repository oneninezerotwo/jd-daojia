<template>
  <div>
    <!-- <div class="tab-bar-box">
      <div class="tab-bar">
        <ul class="tab-bar-ul">
          <li
            v-for="(t,index) in tabs"
            :key="index"
            @click="hightLight(index)"
            class="tab-bar-li"
            :class="{
              on: tab === index
            }"
            v-text="t.name"
          >
          
          </li>
        </ul>
      </div>
    </div> -->
    <!-- <routop/> -->
<!-- 搜索框 -->
    <a href="#discoverySearch">
      <div class="search-bar-index">
        <span class="search-bar-span">
          <span class="search-bar-text">搜菜名 食材</span>
        </span>
      </div>
    </a>

<!-- 菜单1 -->
    <div class="panel">
      <div class="faxian-zhanwei-warp">
        <a class="faxian-zhanwei-item" href="#discoverySearchResult">
          <div>
            <div class="faxian-box-circle">
              <img
                src="https://img30.360buyimg.com/djtechportal/jfs/t27391/333/2051445968/8537/8d383650/5bf670a6N6f42fcb1.png"
              >
            </div>
            <div class="faxian-box-bottom">家常菜</div>
          </div>
        </a>
        <a class="faxian-zhanwei-item" href="#discoverySearchResult">
          <div>
            <div class="faxian-box-circle">
              <img
                src="https://img30.360buyimg.com/djtechportal/jfs/t29362/223/540488837/10506/aa38a3b0/5bf670a6N0d7ccb85.png"
              >
            </div>
            <div class="faxian-box-bottom">肉类食谱</div>
          </div>
        </a>
        <a class="faxian-zhanwei-item" href="#discoverySearchResult">
          <div>
            <div class="faxian-box-circle">
              <img
                src="https://img30.360buyimg.com/djtechportal/jfs/t26479/27/2065140247/9870/71f5917b/5bf670a5N104dc11b.png"
              >
            </div>
            <div class="faxian-box-bottom">水产海鲜</div>
          </div>
        </a>
        <a class="faxian-zhanwei-item" href="#discoverySearchResult">
          <div>
            <div class="faxian-box-circle">
              <img
                src="https://img30.360buyimg.com/djtechportal/jfs/t29704/163/537745039/9126/7ece0155/5bf670a6Nbe48a0fc.png"
              >
            </div>
            <div class="faxian-box-bottom">蔬菜食谱</div>
          </div>
        </a>
        <a class="faxian-zhanwei-item" href="#discoverySearchResult">
          <div>
            <div class="faxian-box-circle">
              <img
                src="https://img30.360buyimg.com/djtechportal/jfs/t29218/83/543034415/10480/328f2418/5bf670a6N20a363d5.png"
              >
            </div>
            <div class="faxian-box-bottom">母婴食谱</div>
          </div>
        </a>
        <a class="faxian-zhanwei-item" href="#discoverySearchResult">
          <div>
            <div class="faxian-box-circle">
              <img
                src="https://img30.360buyimg.com/djtechportal/jfs/t30160/159/536504279/10965/f3147cd2/5bf670a6Nd302ac85.png"
              >
            </div>
            <div class="faxian-box-bottom">蛋奶制品</div>
          </div>
        </a>
        <a class="faxian-zhanwei-item" href="#discoverySearchResult">
          <div>
            <div class="faxian-box-circle">
              <img
                src="https://img30.360buyimg.com/djtechportal/jfs/t29341/219/534410558/9719/ff7bbf30/5bf670a5N5faaa6d8.png"
              >
            </div>
            <div class="faxian-box-bottom">烘焙</div>
          </div>
        </a>
        <a class="faxian-zhanwei-item" href="#discoverySearchResult">
          <div>
            <div class="faxian-box-circle">
              <img
                src="https://img30.360buyimg.com/djtechportal/jfs/t30085/170/544974696/8687/1656ae47/5bf670a5N73627e89.png"
              >
            </div>
            <div class="faxian-box-bottom">食疗养生</div>
          </div>
        </a>
        <a class="faxian-zhanwei-item" href="#discoverySearchResult">
          <div>
            <div class="faxian-box-circle">
              <img
                src="https://img30.360buyimg.com/djtechportal/jfs/t28531/230/557471966/9507/58873b48/5bf670a5N33dfdfef.png"
              >
            </div>
            <div class="faxian-box-bottom">减肥餐</div>
          </div>
        </a>
        <a class="faxian-zhanwei-item" href="#discoverySearchResult">
          <div>
            <div class="faxian-box-circle">
              <img
                src="https://img30.360buyimg.com/djtechportal/jfs/t27757/5/2021340578/10678/a62f5cc0/5bf670a6Nc76cc172.png"
              >
            </div>
            <div class="faxian-box-bottom">米面杂粮</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import routop from "@/views/routop.vue";
@Component({
  components: {
    routop
  }
})
export default class Home extends Vue {}
</script>


<style lang="scss" scoped>
html{
  background: #999;
}
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
// 搜索框
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

// 菜单1
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

