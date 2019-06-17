<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(el,idx) in arrItem" class="swiper-slide" :key="idx">
          <img class="img" :src="el.imgUrl" width="100%" height="100px">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import Vue from "vue";
export default Vue.extend({
  mounted: function() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    });
  },
  data() {
    return {
      arrItem: [
        {
          name: "swiperSlide5",
          imgUrl:
            "https://img30.360buyimg.com/mobilecms/jfs/t1/53386/35/1309/160413/5cf0f508Ec53f5d85/a0c99ef6993b4f17.png"
        },
        {
          name: "swiperSlide1",
          imgUrl:
            "https://img30.360buyimg.com/mobilecms/jfs/t1/59458/6/1613/108669/5cfdf4ceEb9f11175/fbd7e8c9e05b41e8.jpg"
        },
        {
          name: "swiperSlide51",
          imgUrl:
            "https://img30.360buyimg.com/mobilecms/jfs/t1/53455/37/1281/181440/5cf0fc6dE32f102ea/e31283563a77d124.png"
        },
        {
          name: "swiperSlide1111115",
          imgUrl:
            "https://img30.360buyimg.com/mobilecms/jfs/t1/76834/27/1227/65374/5cf76973Ee1f8d0ca/da34882e09086a5e.jpg"
        },
        {
          name: "swiper1",
          imgUrl:
            "https://img30.360buyimg.com/mobilecms/jfs/t1/52473/40/2032/150131/5cfdb4beE57a84121/fa65bd5df3cf0f0e.png"
        },
        {
          imgUrl:
            "https://img30.360buyimg.com/mobilecms/jfs/t1/41681/11/4192/176941/5cd15eaaE05fc4cdd/8da68f7f591e934c.png"
        },
        {
          imgUrl:
            "https://img30.360buyimg.com/mobilecms/jfs/t1/35359/17/11665/164075/5cf884b5E751b19e5/87a66c53785adcf1.png"
        },
        {
          imgUrl:
            "https://img30.360buyimg.com/mobilecms/jfs/t1/64195/13/1362/297310/5cf8a8e6Ef029d616/63eafa1f99030d34.png"
        },
        {
          imgUrl:
            "https://img30.360buyimg.com/mobilecms/jfs/t1/51690/24/1767/51097/5cf76a96Eb809b6cc/20983c31d1d30cd1.png"
        }
      ],
      slide: []
    };
  },
  created() {
    this.getslideList();
  },
  methods: {
    async getslideList() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cfdf34bd4d41825a9bdaa6c/daojia.jd/jindex"
        //
      );
      // console.log(data);
      var slidearr = data.data.result.data[3].data;
      //   console.log( slidearr);
      var list2 = slidearr.map(function(item) {
        //   console.log(item.floorCellData);
        return item.floorCellData;
      });
      this.slide = list2;
      var slide2 = this.slide.map(function(val) {
        // console.log(val);
        return val.imgUrl;
      });
      // console.log(slide2);
      // console.table(slide2)
    }
  }
});
</script>
<style lang="scss" scoped>
</style>



