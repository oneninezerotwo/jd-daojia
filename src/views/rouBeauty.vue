<template>
    <div id="box">
        <routop/>
        beauty
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

<style scoped>
#box{
    margin-top: 50px;
}
</style>
