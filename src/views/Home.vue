<template>
  <div class="home">
    <HelloWorld/>
    <Jsearch/>
    <Jten/>
    <Jswiper/>
    <Jmain/>
    
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Jsearch from "@/components/Jsearch.vue";
import Jten from "@/components/Jten.vue";
import Jswiper from "@/components/Jswiper.vue";
import Jmain from "@/components/Jmain.vue";

@Component({
  components: {
    HelloWorld,
    Jsearch,
    Jten,
    Jswiper,
    Jmain,
  },
  created() {
    // 通知底部出现
    this.$store.state.isShowMfooter = 1;
    
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
body{
  background:#fff !important;
}
</style>

