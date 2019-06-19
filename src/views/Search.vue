<template>
  <div>
    <div class="func-search-section">
      <div class="search-wrap">
        <div class="search-bar-left" @click="goback">
          <i class="cancelBtn"></i>
        </div>
        <div class="search-bar-center">
          <div class="search-bar">
            <input class="search-bar-input" type="search" placeholder="618购物节" value @input="Clear"
            v-model="searchValue">
            <i class="search-delete" v-show="showClear"></i>
          </div>
        </div>
        <div class="search-bar-right">
          <span>搜索</span>
        </div>
      </div>
      <div class="search-SearchHot-wrap">
        <div class="search-title-wrap">
          <div class="search-title">热门搜索</div>
        </div>
        <div class="search-item-wrap">
          <div class="search-hot-word" style="color: rgb(71, 179, 79);">
            <i
              class="hot-icon"
              style="background: url(&quot;https://img30.360buyimg.com/mobilecms/jfs/t24067/177/39883260/1849/82fadd4c/5b2376e8Ne70d963f.png&quot;) center center / 11px 14px no-repeat;"
            ></i>
            <span class="oneline-overflow-ellipsis" style="color: rgb(71, 179, 79);">纸巾</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">牛奶</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">酸奶</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">饮料</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">卫生巾</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">雪糕</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">洗衣液</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">洁柔</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">零食</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">啤酒</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">雀巢</span>
          </div>
          <div class="search-hot-word">
            <span class="oneline-overflow-ellipsis">饼干</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showClear: false,
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    //清空按钮
    Clear(){
        this.searchValue="";
        if(this.searchValue!==""){
            this.showClear=true;
        }else{
            this.showClear=false;
        }
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  border: 0 none;
}
.search-bar .search-delete {
  position: absolute;
  top: 50%;
  right: 10px;
  background-position: -12px -140px;
  width: 28px;
  height: 28px;
  margin-top: -14px;
  z-index: 200;
}
.search-bar {
  background-color: #fff;
  padding: 7px 10px;
  position: relative;
}
.search-bar-icon,
.search-bar .search-delete,
.search-bar:before,
.search-show .search-bar-span .search-bar-text:before {
  background-image: url(//static-o2o.360buyimg.com/daojia/react/images/search_bar_sprites.57c20493.png);
  background-repeat: no-repeat;
  background-size: 44px auto;
}
.search-bar:before {
  content: "";
  width: 44px;
  height: 30px;
  position: absolute;
  background-position: -5px -7px;
}
.search-bar .search-bar-input {
  padding: 0 20px 0 30px;
  height: 30px;
  width: 100%;
  background-color: #f8f8f8;
  color: #333;
  font-size: 14px;
  line-height: 30px;
  border-radius: 17px;
  display: inline-block;
  box-sizing: border-box;
}
.search-wrap .search-bar-right {
  position: relative;
  right: 10px;
  width: 42px;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  color: #333;
  text-align: center;
}
.search-wrap .search-bar-right {
  z-index: 100;
}
@import "../assets/css/search";
</style>
