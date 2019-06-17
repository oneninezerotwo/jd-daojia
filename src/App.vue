<template>
  <div id="app">
    <!-- <div class="navigation footer-nav ipx-pad"> -->
      <!-- <a
        v-for="(t,index) in tabs"
        :key="index"
        @click="hightLight(index)"
        class="navigation-item "
        :class="{
            active: tab === index
        }"
        aria-current="page"
      >
        <i class="iconfont" :class="t.className"></i>
        <span class="navigation-item-label" v-text="t.name"></span>
      </a> -->
    <!-- </div> -->
    <router-view/>
    <Jbottom/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Jbottom from "./components/Jbottom.vue";
export default Vue.extend({
    components: {
      Jbottom,
    }
});
</script>

<style lang="scss">
// *{
// width:100%;
// }
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
body {
  background: #fff;
}
*{
  padding:0;
  margin:0;
}
</style>
