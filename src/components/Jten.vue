<template>
  <div class="index-zone-wrap">
    <div class="scorll-box-hidden" style="height: 150px;">
      <div class="scroll-box" style="width: 100vw; height: 160px;">
        <div>
          <div class="ballTpl3box" style="width: 160vw;">
            <!--  -->
            <div
              class="index-zone-ball3-box showMta"
              data-useraction="{&quot;to&quot;:&quot;channelPage&quot;,&quot;pageType&quot;:&quot;indexPage&quot;,&quot;index&quot;:30,&quot;res_name&quot;:&quot;超市便利&quot;,&quot;unit_index&quot;:1,&quot;styleTpl&quot;:&quot;tpl3&quot;,&quot;channelId&quot;:&quot;3983&quot;,&quot;platCode&quot;:&quot;h5&quot;,&quot;spm_id&quot;:&quot;ball_15|1|1|tpl3|30|超市便利|&quot;,&quot;res_type&quot;:&quot;ball_15&quot;,&quot;res_unit&quot;:1}"
              v-for="(t,idx) in menuList" :key="idx"
             >
              <a
                class="ball1-box-navball"
                goto="[object Object]"
                href="#channelPage/channelId:3983/userAction:&quot;{\&quot;to\&quot;%3A\&quot;channelPage\&quot;%2C\&quot;pageType\&quot;%3A\&quot;indexPage\&quot;%2C\&quot;index\&quot;%3A30%2C\&quot;res_name\&quot;%3A\&quot;超市便利\&quot;%2C\&quot;unit_index\&quot;%3A1%2C\&quot;styleTpl\&quot;%3A\&quot;tpl3\&quot;%2C\&quot;channelId\&quot;%3A\&quot;3983\&quot;%2C\&quot;platCode\&quot;%3A\&quot;h5\&quot;%2C\&quot;spm_id\&quot;%3A\&quot;ball_15|1|1|tpl3|30|超市便利|\&quot;%2C\&quot;res_type\&quot;%3A\&quot;ball_15\&quot;%2C\&quot;res_unit\&quot;%3A1}&quot;"
                style="color: rgb(0, 0, 0);"
              >
                <img
                  class="index-zone-ball-pic"
                  :src="t.imgUrl"
                  style="background: none;"
                >
                <span class="ballTpl3-title" v-text="t.title"></span>
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    <div class="ballScrollWrap">
      <div class="ballScrollBar"></div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      menuList: [],
    };
  },
  created() {
    this.getmenuList();
  },
  methods: {
    // 十个圆形图标渲染
    async getmenuList() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cfde625a9dc00683e60f4f6/jdrandom/random1_copy_1560147123287"
      );
      // console.log(data);
      // this.menuList = [...this.menuList, ...data.data.data.floorCellData];
      const t = data.data.result.data[1].data;
      var temp = t.map(function(item) {
        return item.floorCellData;
      });
      this.menuList =temp
      // console.log(this.menuList);
    }
  }
});
</script>
<style scoped>
a {
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-style: normal;
}
.index-zone-wrap {
  width: 100%;
  overflow-x: auto;
  background-color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  font-size: 0;
  padding-bottom: 15px;
}
.scorll-box-hidden {
  overflow-y: hidden;
  height: 150px;
}
.scroll-box {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  height: 160px;
}
.ballTpl3box {
  position: relative;
  width: 160vw;
}
.index-zone-ball3-box {
  display: inline-block;
  width: 20vw;
}
.ball1-box-navball {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 12px;
  line-height: 20px;
  color: #666;
  margin-top: 15px;
  width: 100%;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(0, 0, 0);
}
.ball1-box-navball a {
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  color: #555;
}
.index-zone-ball-pic {
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURfT09N+39GoAAAAcSURBVFjD7cGBAAAAAMOg+VNf4QBVAQAAAAB8BhRQAAEAnyMVAAAAAElFTkSuQmCC);
  background-size: 100%;
}
.ballTpl3-title {
  padding-bottom: 2px;
}
.ball1-box-navball {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 12px;
  line-height: 20px;
  color: #666;
  margin-top: 15px;
  width: 100%;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ballScrollWrap {
  width: 25px;
  height: 2px;
  margin: 6px auto;
  border-radius: 2px;
  background-color: #f8f8f8;
}
.ballScrollBar {
  width: 50%;
  height: 100%;
  border-radius: 2px;
  background: -webkit-linear-gradient(left, #00cb1e, #00be34);
  background: linear-gradient(90deg, #00cb1e, #00be34);
  -webkit-transition: -webkit-transform 0.2s linear;
  transition: -webkit-transform 0.2s linear;
  transition: transform 0.2s linear;
  transition: transform 0.2s linear, -webkit-transform 0.2s linear;
  transform: translate(0px, 0px);
}
.ballScrollBar {
  width: 50%;
  height: 100%;
  border-radius: 2px;
  background: -webkit-linear-gradient(left, #00cb1e, #00be34);
  background: linear-gradient(90deg, #00cb1e, #00be34);
  -webkit-transition: -webkit-transform 0.2s linear;
  transition: -webkit-transform 0.2s linear;
  transition: transform 0.2s linear;
  transition: transform 0.2s linear, -webkit-transform 0.2s linear;
}
</style>


