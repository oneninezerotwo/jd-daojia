<template>
  <div class="navigation footer-nav ipx-pad" v-if="isShowMfooter">
    <a
      v-for="(t,index) in tabs"
      :key="index"
      @click="hightLight(index)"
      class="navigation-item"
      :class="{
        active: tab === index
      }"
      aria-current="page">
      <i class="iconfont" :class="t.className"></i>
      <span class="navigation-item-label" v-text="t.name"></span>
    </a>
    <div class="message-wrap"></div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          name: "首页",
          url: "home",
          className: "icon-home"
        },
        {
          name: "发现",
          url: "rouSearch",
          className: "icon-discovery"
        },
        {
          name: "购物车",
          url: "rouCart",
          className: "icon-cart"
        },
        {
          name: "订单",
          url: "rouOrder",
          className: "icon-order"
        },
        {
          name: "我的",
          url: "rouMine",
          className: "icon-user"
        }
      ],
      tab: 0
    };
  },
  methods: {
    hightLight(index) {
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
  },
  computed: {
    isShowMfooter() {
      // 把仓库的公有变量获取到loading组件里面使用
      // console.log(this);
      // 从仓库拿到一个值
      return this.$store.state.isShowMfooter;
    }
  }
});
</script>


<style scoped >
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-style: normal;
}
.footer-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
  z-index: 1001;
  border-top: 1px solid #ccc;
}
.navigation,
.navigation-item {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.navigation {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#e8e8e8),
    color-stop(50%, #e8e8e8),
    color-stop(0, transparent)
  );
  background-image: -webkit-linear-gradient(
    top,
    #e8e8e8,
    #e8e8e8 50%,
    transparent 0
  );
  background-image: linear-gradient(
    180deg,
    #e8e8e8,
    #e8e8e8 50%,
    transparent 0
  );
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #fff;
  height: 50px;
}

.navigation-item.active {
  color: #39ac69;
}
.navigation-item {
  position: relative;
  color: #555;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
}
.footer-nav .active .icon-home {
  background-position: center -50px;
}
.footer-nav .iconfont {
  width: 24px;
  height: 30px;
  background: url(//static-o2o.360buyimg.com/daojia/react/images/nav6.fe8f6378.png)
    no-repeat;
  background-size: 24px auto;
}
.iconfont {
  font-family: iconfont !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.navigation-item-label {
  display: block;
  height: 20px;
  line-height: 17px;
}
.footer-nav .iconfont {
  width: 24px;
  height: 30px;
  background: url(//static-o2o.360buyimg.com/daojia/react/images/nav6.fe8f6378.png)
    no-repeat;
  background-size: 24px auto;
}
.footer-nav .icon-discovery {
  background-position: center -601px;
}
.footer-nav .icon-cart {
  background-position: center -100px;
}
.footer-nav .icon-order {
  background-position: center -200px;
}
.footer-nav .icon-user {
  background-position: center -300px;
}
/* 背景图切换颜色 */
/* .footer-nav .active .icon-home {
  background-position: center -50px;
} */
.footer-nav .active .icon-discovery {
  background-position: center -651px;
}
.footer-nav .active .icon-cart {
  background-position: center -150px;
}
.footer-nav .active .icon-order {
  background-position: center -250px;
}
.footer-nav .active .icon-user {
  width: 24px;
  height: 30px;
  background: url("../assets/mine.png");
  background-size: 100% 95%;
}
</style>
