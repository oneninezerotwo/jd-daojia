<template>
  <div
    class="index-address-wrapper"
    style="background-image: url(&quot;https://img30.360buyimg.com/mobilecms/jfs/t1/73417/37/1333/93514/5cf8f729E71be53bb/5f1ce86c449ba110.png&quot;); opacity: 1;"
  >
    <a class="location" href="#indexaddress">
      <span class="location-text">番禺区石碁东怡新地(番禺大道北东)</span>
      <span class="location-text-down"></span>
    </a>
    <i class="index-up-search" style="transform: translate(0px, 0px);"
        :style="bool? 'transform: translate(-35px, 0px)':'transform: translate(0px, 0px)'"
    ></i>
    <a
      class="index-message-icon"
      href="/html/main.html#message"
      style="transform: translate(0px, 0px);"
      :style="bool? 'transform: translate(-35px, 0px)':'transform: translate(0px, 0px)'"
    >
      <i class="hideDot"></i>
    </a>
  </div>
</template>

<script>
// import { Component, Prop, Vue } from "vue-property-decorator";

// @Component
// export default class HelloWorld extends Vue {
//   @Prop() private msg!: string;
// }
export default {
  data(){
    return{
        bool:0,
    }
  },
  // created(){
  //   //  window.onscroll = () => {
  //   //   if(window.scrollY>=200){
  //   //     console.log(window.scrollY);

  //   //   }
  //   // };
  // },
  mounted(){
     window.addEventListener('scroll', this.scroll, true);
  },
  methods:{
     scroll() {
      if (window.scrollY >= 200) {
        this.bool = !0;
        // console.log(window.scrollY);
      } else {
        this.bool = 0;
      }
    },
     destroyed() {
    window.onscroll = null;
    window.removeEventListener('scroll', this.scroll, false);
  },
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.index-message-icon, .index-up-search {
    position: absolute;
    -webkit-transition: all linear;
    transition: all linear;
}
body {
  width: 100vw;
  overflow: hidden;
}
body{
  background:#fff;
}
element.style {
  background-image: url("https://img30.360buyimg.com/mobilecms/jfs/t1/73417/37/1333/93514/5cf8f729E71be53bb/5f1ce86c449ba110.png");
  opacity: 1;
}
#nav {
  padding: 0;
}
.index-address-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 50;
  height: 44px;
  line-height: 44px;
  background: url(//static-o2o.360buyimg.com/daojia/react/images/icon_new_addressbar.c9701695.png)
    no-repeat;
  background-size: cover;
}
.location {
  max-width: 40%;
  height: 22px;
  margin-right: 45px;
  margin-top: 10px;
  vertical-align: top;
  border-radius: 23px;
  line-height: 44px;
  font-size: 16px;
  color: #fff;
  text-align: left;
}
.index-message-icon,
.index-up-search {
  position: absolute;
  -webkit-transition: all linear;
  transition: all linear;
}
.index-up-search {
  top: 5px;
  right: -35px;
  width: 40px;
  height: 34px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUdwTP////7//v////////7//v////////////7+/v////////7+/v///////////////////////0Wqo9UAAAASdFJOUwBheO8zjBWoCNnP90W/nlYg61TK/gQAAADjSURBVCjPdVJZooQgDGO1ZVMn9z/sYxkYRF4/qhKbpqRCtGBJ/oOPt1EswUqjh3uixgFJGeY72vxKxw+KAd4MCqnhBmgCiCeW28F9v9nhfHY/xomF50VaZqo9WMOssvP/VB4S6QWJI6DIIcg3JhKunN2GUggFm3OrXkPWhgBvsKtiGveWs0zot/0s1MhreBQ34ri8+WKg66HbDJjqCEWSvl8T6O9gNPnV/exU7OFmrTLA/W7WI9healJemWZDqzxRFkZeqqyLlrkNTaKpr5m2zR2aLbss0akid4Ek/g1at+gBpj9cRwoBxYPQewAAAABJRU5ErkJggg==)
    no-repeat 50%;
  background-size: 20px;
}
.location-text {
  display: inline-block;
  max-width: 58%;
  padding-left: 20px;
  margin-left: 13px;
  margin-right: 2px;
  vertical-align: top;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAiBAMAAAC+U6R6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTP///////////////////////////////////////////////////4sGkswAAAANdFJOUwD6UugzjtkMIT/HPsKrJ2woAAAAx0lEQVQY02NgAALuGEPhoxsYoIAp9y4QXFOA8DjW3gWDWw1g7uS7UGAJ4nHKwrgXJwC5zXfhwALIXYvg3gIaexcJKDCwgShR95JAEJ3AsBdIXnZgYGCxBTJuM8QCSRGQDY5AxlWGs0AyAMRlBTLuMIDUOIC4LCBdDCBHFIC47CCHoHPRFKMZhWYRmjPQHInmBTQPonufE8EFBQ6DLox3CRLM0LC7CA1oRQhXCBYLssiSUGmYJEQaIQmWRkiCpJElGRjUkhiwAQAPntybmHZBUQAAAABJRU5ErkJggg==)
    no-repeat 0 14px;
  background-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.location-text-down {
  display: inline-block;
  width: 10px;
  height: 44px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAASElEQVQoU53QQQoAIAhEUefEBZ0jqBMbSgiRRTbr/zYD+hyYuRFRCvoOAUHcAWSFAaxIeoMP2NAGL3hBLnTwho5w4qIBUL3HB59iIZYVv+VIAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 8px;
}
.index-message-icon,
.index-up-search {
  position: absolute;
  -webkit-transition: all linear;
  transition: all linear;
}
.index-up-search {
  top: 5px;
  right: -35px;
  width: 40px;
  height: 34px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUdwTP////7//v////////7//v////////////7+/v////////7+/v///////////////////////0Wqo9UAAAASdFJOUwBheO8zjBWoCNnP90W/nlYg61TK/gQAAADjSURBVCjPdVJZooQgDGO1ZVMn9z/sYxkYRF4/qhKbpqRCtGBJ/oOPt1EswUqjh3uixgFJGeY72vxKxw+KAd4MCqnhBmgCiCeW28F9v9nhfHY/xomF50VaZqo9WMOssvP/VB4S6QWJI6DIIcg3JhKunN2GUggFm3OrXkPWhgBvsKtiGveWs0zot/0s1MhreBQ34ri8+WKg66HbDJjqCEWSvl8T6O9gNPnV/exU7OFmrTLA/W7WI9healJemWZDqzxRFkZeqqyLlrkNTaKpr5m2zR2aLbss0akid4Ek/g1at+gBpj9cRwoBxYPQewAAAABJRU5ErkJggg==)
    no-repeat 50%;
  background-size: 20px;
}
.index-message-icon {
  right: 5px;
  top: 0;
  width: 20px;
  height: 44px;
  padding: 0 5px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTP///////////////////////////////////////////////////////////////8/RimEAAAAQdFJOUwA5W0l+s/AV4vkGmqkgy278CPCWAAABBUlEQVQ4y5VUWZbEIAiMRsE9df/TtjF2TzqjOMMHPrEeYLFs23+FdSzkPZWoeQJR1uMj3qoBJNvz5VAcAqvjxNv8xGgCmVsMNtWgvzEGSI80OAHmgTG/M/i2akCPvnK3Zxr5uXzRO3uLNGMuwXZ+QDyll6C6IzMvgrlcsfcsVOp61e+wY7HtgxGHBDoQqy5QEkihVE1oKe3O7aOTQVV7hPPiADc6A3zVwPYHkN+W4UIHiYmvQI2C0LJfkLnwdJVlAeoF7hTIrdLJlJuul0VuX4c8w/wMQuuCPe7iSJ1ExDr9VhpOA5Pgozzme/VCauO+MPJ4YRS4xoVKwuoJKtyWmCNxic3lBa8dDg3n5vAHAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 20px;
}
.index-message-icon,
.index-up-search {
  position: absolute;
  -webkit-transition: all linear;
  transition: all linear;
}
a {
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  color: #555;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-style: normal;
}
</style>
