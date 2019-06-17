<template>
  <div class="section category-section">
    <!-- <routop/> -->
    <div class="tab-bar-box">
      <div class="tab-bar">
        <ul class="tab-bar-ul">
          <li class="tab-bar-li" :class="{'on':index === now}" v-for="(item,index) in tabs" :key="index" @click="getTabsItem(index)">
            <a v-text="item.name"></a>
          </li>
        </ul>
      </div>
    </div>
   
    
    <div class="tab-content">
      <fxlist v-show="now ===0" />
      <rouCook v-show="now ===1"/>
      <rouRecommend v-show="now ===2"/>
      <rouBeauty v-show="now ===3"/>
      <rouFocus v-show="now ===4"/>   
    </div>

    <!-- <div class="tab-content">
      
      <div class="panel">
        <div class="tip-wrap">
          <div class="tip-box">
            <div class="tip-icon tip-icon-unLogin"></div>
            <p class="tip-message">{{this.msg}}</p>
            <router-link to="/login" class="tip-btn" v-show="flag">立即登录</router-link>
            <router-link to="/" class="tip-btn" v-show="!flag">返回首页</router-link>
          </div>
        </div>
      </div>
      <p class="commonTitle20">附近热门动态</p>
      <div class="faxian-list">
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11829268/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/67863/27/1277/62601/5cf88042E156423cd/949a5b40b7e485d1.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">伊米蛋糕（雅居乐店）</strong>
                <i class="item-store-sub-title">1小时前</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11829268/needAddCart:0"
          >扣颗纽扣，系上父亲的爱；摸摸脑袋，那是无言的爱；坚定果敢，那是行动的表率；言语少，那是刚柔相济的爱。细节见关爱，父爱暖心怀。</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11829268/skuId:2021655802/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/20739/25/4708/96502/5c345f39Eed05c2fd/5c9df6ea1fde8afc.jpg"
              >
              <span class="faxian-list-item-price">
                ￥123
                <del>￥246</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2024193645/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/41908/12/5534/75497/5cf0ddbcEe464e84f/b9d3e2310edd6c10.jpg"
              >
              <span class="faxian-list-item-price">
                ￥226
                <del>￥376</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.02折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021655978/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/19899/33/4716/29242/5c34615aEc1e57c92/91388bd4d5ee738b.jpg"
              >
              <span class="faxian-list-item-price">
                ￥148
                <del>￥246</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.02折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021655876/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/8792/7/12403/608341/5c345facEea23d169/a967b96756c3e8f5.jpg"
              >
              <span class="faxian-list-item-price">
                ￥123
                <del>￥246</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2024193668/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/41903/27/5580/202180/5cf0de56E7dfc3991/88b18a0975e0a7a7.jpg"
              >
              <span class="faxian-list-item-price">
                ￥346
                <del>￥576</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.01折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021655947/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/17131/19/4616/45766/5c3460c5E42db9535/e38edbb3e521bbdd.jpg"
              >
              <span class="faxian-list-item-price">
                ￥136
                <del>￥226</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.02折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021656628/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/11465/27/5571/57528/5c3461e9Efaf2fe3f/38b578e8e11feaa7.jpg"
              >
              <span class="faxian-list-item-price">￥139</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满20减10</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021656672/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/24340/27/4659/32371/5c34628eEe98aa8a9/a9e7ecfc38ee7b14.jpg"
              >
              <span class="faxian-list-item-price">
                ￥179
                <del>￥278</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.44折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021656715/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/14385/4/4705/49839/5c34631aE6972bd5b/1b8c7f5b2f66e44b.jpg"
              >
              <span class="faxian-list-item-price">
                ￥155
                <del>￥258</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.01折</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11820470/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/46087/30/1818/161430/5cf87ed4E79ed5f8b/e23e22a9c6c81020.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">幸福西饼蛋糕-番禺大龙店</strong>
                <i class="item-store-sub-title">4小时前</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11820470/needAddCart:0"
          >周一福利日，鲜芒九方下午茶只需69元，进店领券，券后价只需59元，先到先得！</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11820470/skuId:2023899465/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t29275/340/1318848980/415268/f5c4eede/5cdcc47aN7c4f9203.jpg"
              >
              <span class="faxian-list-item-price">
                ￥59
                <del>￥89</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.63折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11820470/skuId:2022488074/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/60331/21/512/80741/5ceb85f4Eaf25d22e/29d9547fb26868b4.jpg"
              >
              <span class="faxian-list-item-price">
                ￥78.8
                <del>￥139</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.67折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11820470/skuId:2022892831/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/81137/36/507/70672/5ceb853dE31643ed8/67f26b79909b0242.jpg"
              >
              <span class="faxian-list-item-price">
                ￥89
                <del>￥159</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.6折</span>
              </span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11820470/skuId:2023899521/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/40892/33/4683/462987/5cdcc6e2E75755854/b2c67bff160e7072.jpg"
              >
              <span class="faxian-list-item-price">
                ￥59
                <del>￥89</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.63折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11820470/skuId:2021278125/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/28814/22/1412/39829/5c1211ceE52026a59/c62e967f6a6dcfd6.jpg"
              >
              <span class="faxian-list-item-price">
                ￥138
                <del>￥198</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.97折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11820470/skuId:2016032751/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/55272/35/1030/86944/5ceb896eEef7f7c11/b6535849bd23a3e8.jpg"
              >
              <span class="faxian-list-item-price">
                ￥69
                <del>￥109</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.34折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11820470/skuId:2012117835/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/37761/7/9967/96902/5ceb89ceEa2eb4d7e/c31951d87debe162.jpg"
              >
              <span class="faxian-list-item-price">
                ￥109
                <del>￥159</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.86折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11820470/skuId:2023899579/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t9925/138/2948009439/367193/bde6142e/5cdcc7b9Ndce108b0.jpg"
              >
              <span class="faxian-list-item-price">
                ￥69
                <del>￥99</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.97折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11820470/skuId:2008885964/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/16181/34/2336/294629/5c1c44fcE8cb02281/487497576e06aaef.jpg"
              >
              <span class="faxian-list-item-price">
                ￥118
                <del>￥198</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.96折</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11825271/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/60630/28/1254/78070/5cf87ebfE953e7b0f/f880886f304cb803.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">大参林-番禺大众药店</strong>
                <i class="item-store-sub-title">4小时前</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a class="faxian-list-item-desc-10" href="#storeHome/storeId:11825271/needAddCart:0">
            清凉一夏
            高温补贴【进店领券】满99-40元
            健康送到家 我选大参林
            【6月16号】
            大参林616电商节 【大型活动】在大参林金沙洲店欢迎您
          </a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11825271/skuId:2015043694/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t7621/63/4375499867/217525/7784ada6/5ad57147N59bc1fed.jpg"
              >
              <span class="faxian-list-item-price">￥19.8</span>
            </a>
            <a
              href="#storeHome/storeId:11825271/skuId:2001323114/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t21526/151/1588354134/262350/64c9c0b2/5b2cc4d5Na68e62d5.jpg"
              >
              <span class="faxian-list-item-price">￥4.55</span>
            </a>
            <a
              href="#storeHome/storeId:11825271/skuId:2019534494/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/1031/34/3567/178197/5b99c15aE1492acbc/9263698e28d474cf.jpg"
              >
              <span class="faxian-list-item-price">￥16.8</span>
            </a>
            <a
              href="#storeHome/storeId:11825271/skuId:2005635888/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t3097/74/4204388988/180585/c1971c1f/5837d0bbNe75c1121.jpg"
              >
              <span class="faxian-list-item-price">
                ￥9.9
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t1/23445/13/4516/2949/5c32f5b1E57bd8118/aabb8ea121eea79e.png"
                  class="faxian-vip-logo"
                >
                <del>￥11</del>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11825271/skuId:2006080551/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t3109/96/5075815838/93828/2dc5acfa/5860e05dNac0f0dd7.jpg"
              >
              <span class="faxian-list-item-price">
                ￥3
                <del>￥6.65</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.52折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11825271/skuId:2001123397/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t17959/119/1114509591/65890/5a92bb9e/5abcb462N1002e4de.jpg"
              >
              <span class="faxian-list-item-price">￥3</span>
            </a>
            <a
              href="#storeHome/storeId:11825271/skuId:2001322980/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t484/310/413161373/91200/1ee7a65b/54657167Ne1b976d2.jpg"
              >
              <span class="faxian-list-item-price">￥5.85</span>
            </a>
            <a
              href="#storeHome/storeId:11825271/skuId:2000832048/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t17155/343/446834237/314259/580c1f5c/5a7c325bN9c941a7b.jpg"
              >
              <span class="faxian-list-item-price">￥20.85</span>
            </a>
            <a
              href="#storeHome/storeId:11825271/skuId:2017682833/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t19540/213/2630616197/139727/faadb41b/5b062099Nda46f6b4.jpg"
              >
              <span class="faxian-list-item-price">￥22</span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11829268/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/67863/27/1277/62601/5cf88042E156423cd/949a5b40b7e485d1.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">伊米蛋糕（雅居乐店）</strong>
                <i class="item-store-sub-title">5小时前</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11829268/needAddCart:0"
          >耳边响起了那熟悉的歌谣：没有天哪有地，没有地哪有家，没有家哪有你，没有你哪有我。谢谢父亲给我们一切。</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11829268/skuId:2024193645/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/41908/12/5534/75497/5cf0ddbcEe464e84f/b9d3e2310edd6c10.jpg"
              >
              <span class="faxian-list-item-price">
                ￥226
                <del>￥376</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.02折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021655978/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/19899/33/4716/29242/5c34615aEc1e57c92/91388bd4d5ee738b.jpg"
              >
              <span class="faxian-list-item-price">
                ￥148
                <del>￥246</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.02折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2024193668/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/41903/27/5580/202180/5cf0de56E7dfc3991/88b18a0975e0a7a7.jpg"
              >
              <span class="faxian-list-item-price">
                ￥346
                <del>￥576</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.01折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021655947/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/17131/19/4616/45766/5c3460c5E42db9535/e38edbb3e521bbdd.jpg"
              >
              <span class="faxian-list-item-price">
                ￥136
                <del>￥226</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.02折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021656672/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/24340/27/4659/32371/5c34628eEe98aa8a9/a9e7ecfc38ee7b14.jpg"
              >
              <span class="faxian-list-item-price">
                ￥179
                <del>￥278</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.44折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021656750/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/23086/24/4607/85283/5c346380Ed3902cff/b16acaf1abc1150d.jpg"
              >
              <span class="faxian-list-item-price">￥129</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满20减10</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021656783/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/15771/29/4703/31343/5c346402Ec75d64d1/045c15d425388540.jpg"
              >
              <span class="faxian-list-item-price">￥249</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满20减10</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2021656715/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/14385/4/4705/49839/5c34631aE6972bd5b/1b8c7f5b2f66e44b.jpg"
              >
              <span class="faxian-list-item-price">
                ￥155
                <del>￥258</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.01折</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11783767/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/74699/3/1274/94447/5cf8c4d9E72c85542/c5540b651acf68cc.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">花礼鲜花-广州店</strong>
                <i class="item-store-sub-title">5小时前</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11783767/needAddCart:0"
          >属于双子的鲜花玫瑰，献给魅力多样的你</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11783767/skuId:2019534938/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/2482/29/9292/143542/5bac4501E74cbfa06/a1f156b14dfdb29f.jpg"
              >
              <span class="faxian-list-item-price">
                ￥349
                <del>￥719</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降4.86折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018109191/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t20545/126/2254040670/480735/81093c61/5b4eb62dN6f52cd9c.jpg"
              >
              <span class="faxian-list-item-price">
                ￥209
                <del>￥439</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.77折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018879794/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t27271/301/1030877642/164168/b1396ea0/5bbef3beN768967a0.jpg"
              >
              <span class="faxian-list-item-price">
                ￥99
                <del>￥209</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.74折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018115623/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t20431/103/2302324016/325925/d5bf44a5/5b4f0cd7Nfe38c097.jpg"
              >
              <span class="faxian-list-item-price">
                ￥349
                <del>￥719</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降4.86折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018879761/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t23389/14/2488495780/315697/9532e86/5b84ed88N11c0e3e2.jpg"
              >
              <span class="faxian-list-item-price">
                ￥99
                <del>￥209</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.74折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2017976849/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t22285/306/2172629515/354032/13dde290/5b486afdNa9d49ccb.jpg"
              >
              <span class="faxian-list-item-price">
                ￥148
                <del>￥299</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.95折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018879955/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t23023/125/2523573118/229342/3f7630ea/5b84f08fNf221f82c.jpg"
              >
              <span class="faxian-list-item-price">
                ￥168
                <del>￥339</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.96折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2019872250/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t29113/109/525771447/137051/ed8bb74a/5bf68726N4dd9c623.jpg"
              >
              <span class="faxian-list-item-price">
                ￥169
                <del>￥359</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.71折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2017975895/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t20251/188/2151416291/370675/3b609e8e/5b48626eN49061789.jpg"
              >
              <span class="faxian-list-item-price">
                ￥149
                <del>￥299</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.99折</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11660509/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/44083/30/6026/127876/5cf8b29aE3f77722c/3d12eece163e819e.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">叮当快药(送药210药房)</strong>
                <i class="item-store-sub-title">5小时前</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeActivityPage/activityId:11899252/storeId:11660509/actFrom:store"
          >
            清凉一夏
            全场领券满48减18
            健康到家
          </a>
          <div class="faxian-list-item-imgs-box">
            <a
              class="faxian-list-item-imgs"
              href="#storeActivityPage/activityId:11899252/storeId:11660509/actFrom:store"
            >
              <img
                class="faxian-list-item-imgs-pic"
                src="https://img30.360buyimg.com/mobilecms//s700x220_jfs/t10843/333/2807115774/54285/49698a5/5cd94458N1eda61c4.jpg"
              >
            </a>
            <a
              href="#storeActivityPage/activityId:11899252/storeId:11660509/actFrom:store"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t17155/343/446834237/314259/580c1f5c/5a7c325bN9c941a7b.jpg"
              >
              <span class="faxian-list-item-price">￥15.6</span>
            </a>
            <a
              href="#storeActivityPage/activityId:11899252/storeId:11660509/actFrom:store"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/53488/1/1148/185230/5cee4863Eb99238f3/61307a7cd2bd05bc.jpg"
              >
              <span class="faxian-list-item-price">￥59.9</span>
            </a>
            <a
              href="#storeActivityPage/activityId:11899252/storeId:11660509/actFrom:store"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t17959/119/1114509591/65890/5a92bb9e/5abcb462N1002e4de.jpg"
              >
              <span class="faxian-list-item-price">￥2.5</span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11698131/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/81164/31/1241/101654/5cf88013E2ed64680/8864f163a78a7dce.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">遇见花坊-广州店</strong>
                <i class="item-store-sub-title">5小时前</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11698131/needAddCart:0"
          >新的一周开始了~追梦路上，最美的姿态是奔跑;奔跑途中，最持久的力量是意志。</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11698131/skuId:2013222270/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/24011/32/6816/176815/5c615e29E5e3e0e48/6806edc5a37cb7ed.jpg"
              >
              <span class="faxian-list-item-price">
                ￥105
                <del>￥299</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀3.52折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698131/skuId:2022356021/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/36446/6/5016/347546/5cbdb1beE9553b965/1248f7070d7cdc6e.jpg"
              >
              <span class="faxian-list-item-price">
                ￥177
                <del>￥309</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降5.73折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698131/skuId:2016928482/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t20929/266/943210643/623731/dfe2e859/5b1be920N6fae962b.jpg"
              >
              <span class="faxian-list-item-price">
                ￥135
                <del>￥328</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.12折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698131/skuId:2016281063/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t20734/16/121339633/140369/1638d2e7/5afd1289Nd43fdee8.jpg"
              >
              <span class="faxian-list-item-price">
                ￥398
                <del>￥898</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降4.44折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698131/skuId:2023383105/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/83351/23/3/147210/5cd25896E1f565a58/50f9f57a73d2fc1f.jpg"
              >
              <span class="faxian-list-item-price">
                ￥98
                <del>￥258</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀3.8折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698131/skuId:2022076242/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/10434/12/14895/259237/5c8c7649Ef857c649/b9d90615ad9b46cd.jpg"
              >
              <span class="faxian-list-item-price">
                ￥105
                <del>￥519</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀2.03折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698131/skuId:2023439414/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t30205/302/1243909936/163066/e07c61ba/5cdb9136Na9b8e0b3.jpg"
              >
              <span class="faxian-list-item-price">
                ￥88
                <del>￥278</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀3.17折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698131/skuId:2010687064/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t19993/11/2621011767/343280/f82b0b5b/5b4d5792N2bc56681.jpg"
              >
              <span class="faxian-list-item-price">
                ￥188
                <del>￥449</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.19折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698131/skuId:2015254512/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t19708/211/1946057733/93745/796b38f2/5ae0036aN9d79a2c6.jpg"
              >
              <span class="faxian-list-item-price">
                ￥115
                <del>￥308</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀3.74折</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11698141/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/46561/14/1759/104725/5cf87f86Ea8f38241/973ecba2a9ff3f99.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">幸福e站鲜花-佛山店</strong>
                <i class="item-store-sub-title">5小时前</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a class="faxian-list-item-desc-10" href="#storeHome/storeId:11698141/needAddCart:0">
            刚刚高考完，家庭气氛也该缓和缓和啦！
            剑拔弩张的三年有种如释重负的感觉啦吧？
            家里摆上花，好好的过过人间生活。
          </a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11698141/skuId:2010538302/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t10126/68/2169802980/499078/c78a27a0/59f0360dN9d126566.jpg"
              >
              <span class="faxian-list-item-price">
                ￥88
                <del>￥306</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀2.88折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698141/skuId:2007481852/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t24874/107/1371548402/338699/6f0a63a6/5bb025e4N8840d07d.jpg"
              >
              <span class="faxian-list-item-price">
                ￥239
                <del>￥408</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降5.86折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698141/skuId:2023897356/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/69655/33/433/194312/5cea03b0Ed7e19861/beecf7112a3bb5ae.jpg"
              >
              <span class="faxian-list-item-price">
                ￥145
                <del>￥229</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.34折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698141/skuId:2007796112/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t5236/306/2425778519/262853/e16a9788/591b0576Nda07af1c.jpg"
              >
              <span class="faxian-list-item-price">
                ￥88
                <del>￥306</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀2.88折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698141/skuId:2021753830/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/11210/20/8988/278239/5c735d41E2ef410fe/b5892f88dc411338.jpg"
              >
              <span class="faxian-list-item-price">
                ￥126
                <del>￥308</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.1折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698141/skuId:2007292333/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t5035/299/1691416292/559296/128945c4/58f336bdN59a17de7.jpg"
              >
              <span class="faxian-list-item-price">
                ￥318
                <del>￥478</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降6.66折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698141/skuId:2023383520/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/55792/26/82/244061/5cd25fedEe7535364/28ba2f2338253e8f.jpg"
              >
              <span class="faxian-list-item-price">
                ￥125
                <del>￥328</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀3.82折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698141/skuId:2007924077/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t5680/117/1218090433/246662/12ba0a1e/5924635eNa6bdf4d5.jpg"
              >
              <span class="faxian-list-item-price">
                ￥95
                <del>￥386</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀2.47折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11698141/skuId:2013220776/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t14239/130/2603374925/43726/e4ea75fe/5aa74d19N0d0f6c23.jpg"
              >
              <span class="faxian-list-item-price">
                ￥135
                <del>￥338</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4折</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11670601/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/81521/22/1337/61918/5cf87f6bE5ea5ef19/cfe4363ec9c9c096.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">蜜汀蛋糕-广州店</strong>
                <i class="item-store-sub-title">6小时前</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11670601/needAddCart:0"
          >你与世界握手言和，是为了生活。</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11670601/skuId:2024176894/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/45606/23/1214/32559/5cef9258E2dd0856f/8ed88fc5cd2f4153.jpg"
              >
              <span class="faxian-list-item-price">￥138</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024176967/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/80761/38/718/33141/5cef9314E142bc7e6/9c76fa3cae9793f4.jpg"
              >
              <span class="faxian-list-item-price">￥138</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024178125/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/64341/18/731/40547/5cef9506E1129b999/db747df664ca44ae.jpg"
              >
              <span class="faxian-list-item-price">￥138</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024178367/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/44871/29/1221/50725/5cef96b6E629acb7e/35d28c2048670325.jpg"
              >
              <span class="faxian-list-item-price">￥138</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024193700/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/34821/24/11150/55119/5cf0df00Ecec17947/bea60e149a3ab944.jpg"
              >
              <span class="faxian-list-item-price">￥398</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024193722/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/78805/17/809/71853/5cf0df7bE3acb7288/ad8cbfe75242d8f6.jpg"
              >
              <span class="faxian-list-item-price">￥578</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024177453/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/54570/39/1234/47061/5cef942aEb41085f9/41242e611c5102d7.jpg"
              >
              <span class="faxian-list-item-price">￥138</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024178338/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/81531/21/798/38942/5cef9655Ed87c6fee/f40d154aff15c438.jpg"
              >
              <span class="faxian-list-item-price">￥178</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024177075/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/68337/5/743/38575/5cef93b3E8bf60dc3/e4f9f1e635308007.jpg"
              >
              <span class="faxian-list-item-price">￥138</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11864127/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/48464/8/1758/94279/5cf88383E61eebe5f/b958727004fec0bc.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">屈臣氏(广州基盛万科里)</strong>
                <i class="item-store-sub-title">2019-06-09</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11864127/needAddCart:0"
          >为仙女们准备的精选优惠，可囤一囤，赶快来哟~</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11864127/skuId:2018976487/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1249/292/938892426/63418/b256b9e6/555964afNbef86108.jpg"
              >
              <span class="faxian-list-item-price">
                ￥14.4
                <del>￥24</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降6折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2023142563/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t8515/96/1848489548/81459/1679c13f/59c2581cN73a40d07.jpg"
              >
              <span class="faxian-list-item-price">
                ￥30.55
                <del>￥47</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降6.5折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2018976400/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t2335/122/796323512/109482/50b77df8/5629a62fNfbcc02e0.jpg"
              >
              <span class="faxian-list-item-price">
                ￥5.8
                <del>￥12</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.84折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2019338353/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t25132/91/1294215960/178608/2cdecc2e/5b90e88eNadb0104e.jpg"
              >
              <span class="faxian-list-item-price">
                ￥10.5
                <del>￥27.5</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀3.82折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2018976357/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/18907/9/4559/246809/5c34422bEc3fa7b7b/cfe5e10ee579d100.jpg"
              >
              <span class="faxian-list-item-price">
                ￥19.5
                <del>￥30</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降6.5折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2018976717/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/25293/10/4636/250454/5c344298Ed7c2b520/38e3986c1438ed40.jpg"
              >
              <span class="faxian-list-item-price">
                ￥19.5
                <del>￥30</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.5折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2018976252/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t30775/206/442293945/93729/699d1015/5bf3d3c6Neb1918f9.jpg"
              >
              <span class="faxian-list-item-price">
                ￥15
                <del>￥28.5</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.27折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2018976278/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/23610/5/4413/23337/5c32bcb8Ea02a1980/0968e3e7adb992a5.jpg"
              >
              <span class="faxian-list-item-price">
                ￥17
                <del>￥31</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降5.49折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2018976398/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/19206/31/3884/28288/5c2c2eb5E84e895bd/71e6bebb7224c314.jpg"
              >
              <span class="faxian-list-item-price">￥14</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满199减100</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11878500/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/55321/27/1758/102656/5cf88fc6Ee0bdd609/2f4cd649437d3574.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">LEO成人商超（番禺店）</strong>
                <i class="item-store-sub-title">2019-06-09</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11878500/needAddCart:0"
          >#优惠券#满199减18 数量有限,先到先得哦!</a>
          <div class="coupon-wrap">
            <a class="coupon-box undefined" href="#storeHome/storeId:11878500/needAddCart:0">
              <div class="conpon-value flex flex-vertical flex-justify-center">
                <div class="conpon-value-inner-top">
                  <span class="conpon-number">18</span>
                  <span class="conpon-unit">元</span>
                </div>
              </div>
              <div
                class="conpon-centerinner-wrap flex flex-vertical flex-align-top flex-justify-center"
              >
                <div class="conpon-showinfo">满199元可用</div>
                <div class="conpon-detail-info">2019-06-09-2020-01-07</div>
              </div>
              <div class="conpon-right-box conpon-to-store-wrap">
                <div class="conpon-get-box">
                  <span class="conpon-get-btn">领券</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11783767/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/74699/3/1274/94447/5cf8c4d9E72c85542/c5540b651acf68cc.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">花礼鲜花-广州店</strong>
                <i class="item-store-sub-title">2019-06-09</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11783767/needAddCart:0"
          >端午粽子不能少，鲜花搭配更美好！</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11783767/skuId:2018800490/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t23488/287/2410020047/420776/2d591185/5b7e1f88N36b6f2a9.jpg"
              >
              <span class="faxian-list-item-price">
                ￥149
                <del>￥299</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.99折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018109191/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t20545/126/2254040670/480735/81093c61/5b4eb62dN6f52cd9c.jpg"
              >
              <span class="faxian-list-item-price">
                ￥209
                <del>￥439</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.77折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018879761/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t23389/14/2488495780/315697/9532e86/5b84ed88N11c0e3e2.jpg"
              >
              <span class="faxian-list-item-price">
                ￥99
                <del>￥209</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.74折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018081087/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t23605/159/998882652/225006/425ec66a/5b4c6b1cN3c8f6163.jpg"
              >
              <span class="faxian-list-item-price">
                ￥249
                <del>￥509</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降4.9折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018081731/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t20761/184/2228435026/263807/f7f30fb/5b4c7559Ne07c50b6.jpg"
              >
              <span class="faxian-list-item-price">
                ￥319
                <del>￥649</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降4.92折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2017975895/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t20251/188/2151416291/370675/3b609e8e/5b48626eN49061789.jpg"
              >
              <span class="faxian-list-item-price">
                ￥149
                <del>￥299</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.99折</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11670601/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/81521/22/1337/61918/5cf87f6bE5ea5ef19/cfe4363ec9c9c096.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">蜜汀蛋糕-广州店</strong>
                <i class="item-store-sub-title">2019-06-09</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11670601/needAddCart:0"
          >怕什么路途遥远。走一步有一步的风景，进一步有一步的欢喜。幸福，在路上。</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11670601/skuId:2024176776/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/81224/27/759/37166/5cef914aE88b98781/a42da1e5d6707f52.jpg"
              >
              <span class="faxian-list-item-price">￥178</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024176896/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/45606/23/1214/32559/5cef9258E2dd0856f/8ed88fc5cd2f4153.jpg"
              >
              <span class="faxian-list-item-price">￥238</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024178126/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/64341/18/731/40547/5cef9506E1129b999/db747df664ca44ae.jpg"
              >
              <span class="faxian-list-item-price">￥178</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024177453/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/54570/39/1234/47061/5cef942aEb41085f9/41242e611c5102d7.jpg"
              >
              <span class="faxian-list-item-price">￥138</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024178338/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/81531/21/798/38942/5cef9655Ed87c6fee/f40d154aff15c438.jpg"
              >
              <span class="faxian-list-item-price">￥178</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024177076/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/68337/5/743/38575/5cef93b3E8bf60dc3/e4f9f1e635308007.jpg"
              >
              <span class="faxian-list-item-price">￥178</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024178371/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/44871/29/1221/50725/5cef96b6E629acb7e/35d28c2048670325.jpg"
              >
              <span class="faxian-list-item-price">￥348</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024176968/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/80761/38/718/33141/5cef9314E142bc7e6/9c76fa3cae9793f4.jpg"
              >
              <span class="faxian-list-item-price">￥178</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024176730/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/72252/23/747/41107/5cef90afE6822abf3/f110591ee0301df6.jpg"
              >
              <span class="faxian-list-item-price">￥348</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11851834/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/39434/31/8319/119551/5cf88188E6c6db232/5612f2628f4de14e.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">山姆(市桥)-国际买手在身边</strong>
                <i class="item-store-sub-title">2019-06-09</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11851834/needAddCart:0"
          >马上周一了！囤点吃的放纵一下，指定干货任意2件9折，指定速食任意2件85折~</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11851834/skuId:2013678182/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t30475/63/1629515648/128653/f0b571b5/5ce54274N56638b55.jpg"
              >
              <span class="faxian-list-item-price">
                ￥29.8
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t20686/164/1675043590/5045/91f83656/5b31d61cN8a5bff81.png"
                  class="faxian-vip-logo"
                >
                <del>￥35.7</del>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11851834/skuId:2013693281/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/71823/34/695/141614/5cee41f7Ecda84bfc/bdb84fda3621f2eb.jpg"
              >
              <span class="faxian-list-item-price">
                ￥298
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t20686/164/1675043590/5045/91f83656/5b31d61cN8a5bff81.png"
                  class="faxian-vip-logo"
                >
                <del>￥357.6</del>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11851834/skuId:2016682357/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/17423/28/3004/214838/5c22e23dEd605b39a/664d8f04e9ea4c2d.jpg"
              >
              <span class="faxian-list-item-price">
                ￥49.8
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t20686/164/1675043590/5045/91f83656/5b31d61cN8a5bff81.png"
                  class="faxian-vip-logo"
                >
                <del>￥59.7</del>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11851834/skuId:2017071269/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t22639/88/247374/101658/f56afbd4/5b2234c1N0575e9b8.jpg"
              >
              <span class="faxian-list-item-price">
                ￥84.8
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t20686/164/1675043590/5045/91f83656/5b31d61cN8a5bff81.png"
                  class="faxian-vip-logo"
                >
                <del>￥101.7</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满2件9折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11851834/skuId:2013687656/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/25649/2/1901/126488/5c175fb0Eb9d5c15f/f0109b937ff62805.jpg"
              >
              <span class="faxian-list-item-price">
                ￥159
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t20686/164/1675043590/5045/91f83656/5b31d61cN8a5bff81.png"
                  class="faxian-vip-logo"
                >
                <del>￥190.8</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满1件9折</span>
              </span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11851834/skuId:2013686447/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t30448/33/1525304982/95556/3b5269b/5ce28353N128f76bd.jpg"
              >
              <span class="faxian-list-item-price">
                ￥49.8
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t20686/164/1675043590/5045/91f83656/5b31d61cN8a5bff81.png"
                  class="faxian-vip-logo"
                >
                <del>￥59.7</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满2件8.5折</span>
              </span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11851834/skuId:2019885038/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t24760/236/2329991470/209816/1b4a142b/5bc85c08Nfd73cdb9.jpg"
              >
              <span class="faxian-list-item-price">
                ￥68.5
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t20686/164/1675043590/5045/91f83656/5b31d61cN8a5bff81.png"
                  class="faxian-vip-logo"
                >
                <del>￥82.2</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满2件8.5折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11851834/skuId:2013692958/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t18898/30/1186637864/348990/f3a89f2f/5abdf021N585442ee.jpg"
              >
              <span class="faxian-list-item-price">
                ￥24.8
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t20686/164/1675043590/5045/91f83656/5b31d61cN8a5bff81.png"
                  class="faxian-vip-logo"
                >
                <del>￥29.7</del>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11851834/skuId:2022172764/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/15716/32/13756/99074/5ca2142dE03008254/6d75fc3a6b0455d3.jpg"
              >
              <span class="faxian-list-item-price">
                ￥106
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t20686/164/1675043590/5045/91f83656/5b31d61cN8a5bff81.png"
                  class="faxian-vip-logo"
                >
                <del>￥127.2</del>
              </span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11864127/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/48464/8/1758/94279/5cf88383E61eebe5f/b958727004fec0bc.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">屈臣氏(广州基盛万科里)</strong>
                <i class="item-store-sub-title">2019-06-08</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11864127/needAddCart:0"
          >无需漂色，简单方便，就可来个不一样的你</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11864127/skuId:2019338928/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t27691/325/393041595/247129/6e5dc107/5b90f4caN5f63bec6.jpg"
              >
              <span class="faxian-list-item-price">
                ￥45
                <del>￥89</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降5.06折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2019338761/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t26611/62/264071563/245613/6326ffbe/5b8d0e47Nab569fb6.jpg"
              >
              <span class="faxian-list-item-price">
                ￥45
                <del>￥89</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.06折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2019338782/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t26911/145/361025936/237785/170a3f13/5b8fa920Nac874d9e.jpg"
              >
              <span class="faxian-list-item-price">
                ￥45
                <del>￥89</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降5.06折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2018976586/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t26281/194/2569047434/137999/bbdefc80/5c0625f4N37c0e644.jpg"
              >
              <span class="faxian-list-item-price">
                ￥60
                <del>￥69</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降8.7折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2019338859/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t27427/47/369995990/241910/5b056885/5b90a6efN2b19e25a.jpg"
              >
              <span class="faxian-list-item-price">
                ￥45
                <del>￥89</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降5.06折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2018976635/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/15743/20/1029/143859/5c0f18c8Ed5d9438a/a46116ab1ac5b1f3.jpg"
              >
              <span class="faxian-list-item-price">
                ￥60
                <del>￥69</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降8.7折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2018976628/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/23516/35/318/233999/5c08f1dbE8da7515c/87d324de3fdc3511.jpg"
              >
              <span class="faxian-list-item-price">
                ￥60
                <del>￥69</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降8.7折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2019338491/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/2174/14/2289/247638/5b963666E85c73d92/0d3c13b54c095787.jpg"
              >
              <span class="faxian-list-item-price">
                ￥45
                <del>￥89</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降5.06折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11864127/skuId:2019338150/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/1421/38/2871/252982/5b978380E79b7f7e6/e4b8619bea287af2.jpg"
              >
              <span class="faxian-list-item-price">￥79</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满199减100</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11878500/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/55321/27/1758/102656/5cf88fc6Ee0bdd609/2f4cd649437d3574.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">LEO成人商超（番禺店）</strong>
                <i class="item-store-sub-title">2019-06-08</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a class="faxian-list-item-desc-10" href="#storeHome/storeId:11878500/needAddCart:0">
            她！提不起性趣？
            他！早早收场？
            对他/她已索然无味？
            换个花样玩玩吧，没有新鲜感，怎么提得起性趣？
          </a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11878500/skuId:2024317409/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/59231/21/1565/611164/5cf64654Ed786d6ee/f30c74b5379f0e48.png"
              >
              <span class="faxian-list-item-price">￥79</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满58减5</span>
              </span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11878500/skuId:2024127017/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/37357/33/5509/463258/5cc2c661E31d5b46b/ad7813c3064e1d8c.png"
              >
              <span class="faxian-list-item-price">￥388</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满58减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11878500/skuId:2024123640/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/25879/23/15766/132527/5cb1c798E5041b6a3/8bc3a9b83d897d49.png"
              >
              <span class="faxian-list-item-price">￥298</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满58减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11878500/skuId:2024186868/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t29914/364/533187667/464269/dbbb09c2/5bf64c44Nf9bcea73.png"
              >
              <span class="faxian-list-item-price">￥278</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满58减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11878500/skuId:2024251067/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t25105/169/2687018971/425062/48fcdc65/5beba4adN8b220d7a.png"
              >
              <span class="faxian-list-item-price">￥158</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满58减5</span>
              </span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11878500/skuId:2024209312/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t26392/139/1776376164/586117/dcb029f/5bebb274N5ad0da9d.png"
              >
              <span class="faxian-list-item-price">￥30</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满58减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11878500/skuId:2024124001/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/21083/40/15606/509442/5cb2bbcfE7a4553fb/bb7470e1584ba4e9.png"
              >
              <span class="faxian-list-item-price">￥158</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满58减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11878500/skuId:2024125111/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/34590/38/5076/347492/5cbe7c0eEfc6a6eed/9edec0473c406a33.png"
              >
              <span class="faxian-list-item-price">￥328</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满58减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11878500/skuId:2024317416/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/48324/19/1628/696269/5cf643dbEae2e0e39/7845a8e38f98a620.png"
              >
              <span class="faxian-list-item-price">￥79</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满58减5</span>
              </span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11829268/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/67863/27/1277/62601/5cf88042E156423cd/949a5b40b7e485d1.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">伊米蛋糕（雅居乐店）</strong>
                <i class="item-store-sub-title">2019-06-08</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11829268/needAddCart:0"
          >光阴似箭，一转眼，同窗生涯已成为过去。但教室里，还回响着我们朗朗的读书声；操场上，还留着我们奔跑矫健的身影。这里的草坪、小溪、竹亭，是我们永远依恋的百草园。</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11829268/skuId:2018852695/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t25330/149/959690898/43085/a1cd54d1/5b8360e3N4b0d2ab6.jpg"
              >
              <span class="faxian-list-item-price">
                ￥125
                <del>￥216</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.79折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2018823535/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t22561/71/2412647754/46633/26a240d0/5b7fae4fN59f86ce6.jpg"
              >
              <span class="faxian-list-item-price">
                ￥125
                <del>￥216</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.79折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2024193645/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/41908/12/5534/75497/5cf0ddbcEe464e84f/b9d3e2310edd6c10.jpg"
              >
              <span class="faxian-list-item-price">
                ￥226
                <del>￥376</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.02折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2024193668/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/41903/27/5580/202180/5cf0de56E7dfc3991/88b18a0975e0a7a7.jpg"
              >
              <span class="faxian-list-item-price">
                ￥346
                <del>￥576</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀6.01折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2018822254/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t7288/290/3377655366/184305/b61814b3/5b7fa08fN71aab699.jpg"
              >
              <span class="faxian-list-item-price">
                ￥125
                <del>￥216</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.79折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2018816980/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t22621/190/2462050181/54090/c12189bf/5b7f6092N5cbd7962.jpg"
              >
              <span class="faxian-list-item-price">
                ￥218
                <del>￥238</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降9.16折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2018819547/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t25786/133/908124766/58491/bf1bcfa3/5b7f85afNb8ba613c.jpg"
              >
              <span class="faxian-list-item-price">
                ￥135
                <del>￥236</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.73折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2018819499/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t22831/262/2400352495/54012/36b01ed4/5b7f83f8N72069425.jpg"
              >
              <span class="faxian-list-item-price">
                ￥135
                <del>￥236</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.73折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11829268/skuId:2018872898/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t23239/145/2551076381/40374/e0879f1e/5b84b61eN931bad2f.jpg"
              >
              <span class="faxian-list-item-price">
                ￥180
                <del>￥256</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降7.04折</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11783767/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/74699/3/1274/94447/5cf8c4d9E72c85542/c5540b651acf68cc.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">花礼鲜花-广州店</strong>
                <i class="item-store-sub-title">2019-06-08</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11783767/needAddCart:0"
          >热热闹闹赛龙舟，暖暖情谊话端午；一颗粽子一份心，一束鲜花一份情!</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11783767/skuId:2018800490/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t23488/287/2410020047/420776/2d591185/5b7e1f88N36b6f2a9.jpg"
              >
              <span class="faxian-list-item-price">
                ￥149
                <del>￥299</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.99折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018109191/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t20545/126/2254040670/480735/81093c61/5b4eb62dN6f52cd9c.jpg"
              >
              <span class="faxian-list-item-price">
                ￥209
                <del>￥439</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.77折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018879794/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t27271/301/1030877642/164168/b1396ea0/5bbef3beN768967a0.jpg"
              >
              <span class="faxian-list-item-price">
                ￥99
                <del>￥209</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.74折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2018081087/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t23605/159/998882652/225006/425ec66a/5b4c6b1cN3c8f6163.jpg"
              >
              <span class="faxian-list-item-price">
                ￥249
                <del>￥509</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降4.9折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2021254924/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/8710/23/8587/286131/5c0f9722Ef7ca9a3c/e2ffd807b16e9ba7.jpg"
              >
              <span class="faxian-list-item-price">
                ￥213.64
                <img
                  src="https://img30.360buyimg.com/mobilecms/jfs/t1/36882/3/2550/2830/5cb67bb4Ea07eca1b/76259a799d2199d6.png"
                  class="faxian-vip-logo"
                >
                <del>￥218</del>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11783767/skuId:2019872250/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t29113/109/525771447/137051/ed8bb74a/5bf68726N4dd9c623.jpg"
              >
              <span class="faxian-list-item-price">
                ￥169
                <del>￥359</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀4.71折</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11670601/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/81521/22/1337/61918/5cf87f6bE5ea5ef19/cfe4363ec9c9c096.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">蜜汀蛋糕-广州店</strong>
                <i class="item-store-sub-title">2019-06-08</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11670601/needAddCart:0"
          >在人生的路上，有一条路每一个人非走不可，那就是年轻时候的弯路。不摔跟头，不碰个头破血流，怎能炼出钢筋铁骨，怎能长大？年轻如你我，是需要经历失败的，只有经历失败。成功的时候，才能体会成功的不易。早安！</a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11670601/skuId:2024176895/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/45606/23/1214/32559/5cef9258E2dd0856f/8ed88fc5cd2f4153.jpg"
              >
              <span class="faxian-list-item-price">￥178</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024176776/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/81224/27/759/37166/5cef914aE88b98781/a42da1e5d6707f52.jpg"
              >
              <span class="faxian-list-item-price">￥178</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024177457/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/54570/39/1234/47061/5cef942aEb41085f9/41242e611c5102d7.jpg"
              >
              <span class="faxian-list-item-price">￥348</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024178367/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/44871/29/1221/50725/5cef96b6E629acb7e/35d28c2048670325.jpg"
              >
              <span class="faxian-list-item-price">￥138</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024178127/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/64341/18/731/40547/5cef9506E1129b999/db747df664ca44ae.jpg"
              >
              <span class="faxian-list-item-price">￥238</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024178338/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/81531/21/798/38942/5cef9655Ed87c6fee/f40d154aff15c438.jpg"
              >
              <span class="faxian-list-item-price">￥178</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024177077/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/68337/5/743/38575/5cef93b3E8bf60dc3/e4f9f1e635308007.jpg"
              >
              <span class="faxian-list-item-price">￥238</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024176969/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/80761/38/718/33141/5cef9314E142bc7e6/9c76fa3cae9793f4.jpg"
              >
              <span class="faxian-list-item-price">￥238</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11670601/skuId:2024176730/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/72252/23/747/41107/5cef90afE6822abf3/f110591ee0301df6.jpg"
              >
              <span class="faxian-list-item-price">￥348</span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(85, 216, 94), rgb(72, 193, 81));"
              >
                <span>满10减5</span>
              </span>
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11879580/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/42029/36/6028/80819/5cf8edf9Eda69fe6b/7de22e07e4231141.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">8字便利店-亚运大道店</strong>
                <i class="item-store-sub-title">2019-06-08</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a
            class="faxian-list-item-desc-10"
            href="#storeHome/storeId:11879580/needAddCart:0"
          >8-MART“逢8”促销日遇上端午节假期，全店【59减12】，抢【99减20】券！超百款特价同享满减！省心省力，8字便利~</a>
          <div class="faxian-list-item-imgs-box">
            <a class="faxian-list-item-imgs" href="#storeHome/storeId:11879580/needAddCart:0">
              <img
                class="faxian-list-item-imgs-pic"
                src="https://img30.360buyimg.com/mobilecms//jfs/t1/46513/17/1790/12417/5cf8b1bcEadd79419/af4254aefb50f223.png"
              >
            </a>
          </div>
        </div>
        <div class="faxian-list-item">
          <div class="faxian-store-box">
            <a class="faxian-list-item-store" href="#storeHome/storeId:11002694/needAddCart:0">
              <img
                class="item-store-logo"
                src="https://img30.360buyimg.com/vendersettle/jfs/t1/45201/24/1779/54875/5cf87edcEa2ee50d8/681376b620508efb.png"
              >
              <span class="item-title-box">
                <strong class="item-store-title">永旺-番禺广场店</strong>
                <i class="item-store-sub-title">2019-06-08</i>
              </span>
            </a>
            <button type="button" class="store-focus-btn">关注</button>
          </div>
          <a class="faxian-list-item-desc-10" href="#storeHome/storeId:11002694/needAddCart:0">
            【周末趴X海鲜日】
            小龙虾麻辣味/十三香味39.8/盒！
            卡士酸奶每满40-10！
            点击进店，领取优惠券，折上折！
          </a>
          <div class="faxian-list-item-imgs-box">
            <a
              href="#storeHome/storeId:11002694/skuId:2024267879/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t2635/155/1660500354/85492/611b69ea/57456a15Nc029048b.jpg"
              >
              <span class="faxian-list-item-price">￥17.8</span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11002694/skuId:2017650508/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t23548/142/645020936/121029/d30ba414/5b39f87cN50b28349.jpg"
              >
              <span class="faxian-list-item-price">￥48.8</span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11002694/skuId:2013780356/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t18844/106/1298570027/220208/b1f4f4a4/5ac33f72Nec5ad8dd.jpg"
              >
              <span class="faxian-list-item-price">￥13.8</span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11002694/skuId:2008879453/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t2773/45/1405639721/442112/e8d2c740/573d21efN79a71dfc.jpg"
              >
              <span class="faxian-list-item-price">￥9.8</span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11002694/skuId:2017650523/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t22210/298/1811731701/123183/b1bef3c2/5b39f8fbN368cd563.jpg"
              >
              <span class="faxian-list-item-price">￥48.8</span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11002694/skuId:2020797579/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t27532/313/1901547073/85399/18edd17d/5bf17846N7e1724b7.jpg"
              >
              <span class="faxian-list-item-price">
                ￥198.4
                <del>￥248</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降8折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11002694/skuId:2011619527/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t3181/188/5739193798/193888/b3ba2c75/587c9b02Nb1ed745e.jpg"
              >
              <span class="faxian-list-item-price">
                ￥159.8
                <del>￥178</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 200, 55), rgb(255, 150, 51));"
              >
                <span>直降8.98折</span>
              </span>
            </a>
            <a
              href="#storeHome/storeId:11002694/skuId:2022215023/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t1/24104/20/6572/49808/5c6155e0Ec5ee9ce8/639cef8cc6db15de.jpg"
              >
              <span class="faxian-list-item-price">￥38</span>
              <span class="faxian-list-item-status-sign">已抢光</span>
            </a>
            <a
              href="#storeHome/storeId:11002694/skuId:2002165901/needAddCart:0"
              class="faxian-goodslist-link"
            >
              <img
                class="faxian-goodslist-img"
                src="https://img30.360buyimg.com/mobilecms//s220x220_jfs/t523/334/477243437/183874/3bbf296b/546c10d0N47c49e7e.jpg"
              >
              <span class="faxian-list-item-price">
                ￥10
                <del>￥18.8</del>
              </span>
              <span
                class="promotion-tags promotion-tags-full promotion-tag"
                style="background: -webkit-linear-gradient(left top, rgb(255, 125, 125), rgb(255, 81, 56));"
              >
                <span>秒杀5.32折</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { Component, Vue } from "vue-property-decorator";
import fxlist from "./fxlist.vue";
import rouCook from "./rouCook.vue";
import rouRecommend from "./rouRecommend.vue";
import rouBeauty from "./rouBeauty.vue";
import rouFocus from "./rouFocus.vue";
import test from './test.vue';
export default {
  components: {
    fxlist,
    rouCook,
    rouRecommend,
    rouBeauty,
    rouFocus,
    test,
  },
  data() {
    return {
      // currView:fxlist,
       flag: true,
       msg: "",
      now: 0,
      // arr:[fxlist,rouCook,rouRecommend,rouBeauty,rouFocus],
      tabs: [
        {
          name: "关注",
          url: "rouSearch"
        },
        {
          name: "食谱",
          url: "rouCook"
        },
        {
          name: "推荐",
          url: "rouRecommend"
        },
        {
          name: "时尚美妆",
          url: "rouBeauty"
        },
        {
          name: "生活",
          url: "rouFocus"
        }
      ],
      // tab: 0
    };
  },
  created() {
    this.isShowback();
    // console.log(this.fxlist);
  },
  mounted() {},
  methods: {
    hightLight(index) {
      // console.log(this);
      // router.push(...)
      // 编程式导航，代替了传统的<router-link>
      // this.$nextTick(function() {
      //   this.$router.push({
      //     // path
      //     name: this.tabs[index].url
      //   });
      //   // 记录位置
      //   this.tab = index;
      //   console.log(this);
      // });
    },
    isShowback() {
      var b = this.$store.state.username;
      if (b) {
        this.flag = !this.flag;
        this.msg = "还没有关注的门店哦，快去关注吧~";
      } else {
        this.msg = "登录后可查看关注门店的优惠信息~";
        this.flag = true;
      }
    },
    getTabsItem(index){
      this.now = index;

    }
    // change_content(idx) {
    //   // var arr = [];
    //   // arr.push(fxlist,rouCook,rouRecommend,rouBeauty,rouFocus);
    //   console.log(this.arr);
    //   this.currView=this.arr[idx];
    //   console.log(idx);
    //   console.log(this.currView);
    //   // this.now = idx;
    //    this.tab =idx;
    //   // console.log(rouCook);
    //   // console.log(this);
    // }
  }
};
// export default class Home extends Vue {}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-style: normal;
}
body {
  background: #f4f4f4;
}
.tab-content {
  padding-top: 50px;
  background: #f4f4f4;
}
.tab-content .content-item.on {
  display: block;
}
.tab-content .content-item {
  display: none;
  height: 100%;
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
/* 立刻登录 */
.tab-content .panel {
  margin: 10px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
}
.tip-wrap {
  width: 100%;
  height: 100%;
  padding: 0 0 25px;
  text-align: center;
  z-index: 1000;
  background: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  min-height: 50vh;
}
.tip-wrap .tip-box {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
}
.tip-wrap .tip-icon-unLogin {
  background: url(//static-o2o.360buyimg.com/daojia/react/images/unlogin.cad7c230.png)
    50% no-repeat;
  background-size: cover;
}
.tip-wrap .tip-icon {
  margin: 0 auto;
  width: 160px;
  height: 160px;
}
.tip-wrap .tip-message {
  margin-top: 10px;
}
.tip-wrap .tip-btn {
  display: inline-block;
  margin: 15px auto 0;
  padding: 0 15px;
  height: 32px;
  line-height: 30px;
  border-radius: 20px;
  font-size: 14px;
  background: #47b34f;
  color: #fff;
}
a {
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  color: #555;
}

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
.faxian-list {
  padding: 0 10px;
}
.faxian-list-item {
  position: relative;
  margin: 10px 0;
  background-color: #fff;
  padding: 16px 10px;
  border-radius: 8px;
}
.faxian-store-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
}
.faxian-list-item-desc-10 {
  white-space: pre-wrap;
  -webkit-line-clamp: 10;
}
.faxian-list-item-desc,
.faxian-list-item-desc-10 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-top: 5px;
  line-height: 24px;
  font-size: 16px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
}
.faxian-list-item-imgs-box {
  display: block;
  margin-top: 10px;
}
.faxian-goodslist-link {
  display: inline-block;
  position: relative;
  width: calc((100vw - 52px) / 3);
  height: calc((100vw - 52px) / 3);
  margin-right: 2px;
  border: 1px solid #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
}
a {
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  color: #555;
}
.faxian-goodslist-img {
  display: block;
  width: 100%;
  height: 100%;
}
img {
  border: 0;
}
.faxian-list-item-price {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 26px;
  background: hsla(0, 0%, 100%, 0.9);
  line-height: 26px;
  padding-left: 5px;
  font-size: 14px;
  color: #ff5757;
}
.faxian-list-item-price del {
  font-size: 12px;
  padding-left: 5px;
  color: #999;
}
element.style {
  background: -webkit-linear-gradient(
    left top,
    rgb(255, 125, 125),
    rgb(255, 81, 56)
  );
}
.faxian-goodslist-link .promotion-tag {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 10px;
  width: auto;
  height: 14px;
  line-height: 14px;
  text-align: center;
  z-index: 1;
}
.promotion-tags-full {
  background: #ff7d7d;
  margin-right: 3px;
}
.promotion-tags {
  display: inline-block;
  padding: 0 3px;
  font-size: 10px;
  height: 14px;
  line-height: 14px;
  border-radius: 4px 1px;
  color: #fff;
  z-index: 1;
  box-sizing: border-box;
}
.promotion-tags > span {
  display: inline-block;
  height: 14px;
  line-height: 14px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.faxian-goodslist-link {
  display: inline-block;
  position: relative;
  width: calc((100vw - 52px) / 3);
  height: calc((100vw - 52px) / 3);
  margin-right: 2px;
  border: 1px solid #f8f8f8;
  border-radius: 4px;
  overflow: hidden;
}
.faxian-goodslist-img {
  display: block;
  width: 100%;
  height: 100%;
}
.faxian-list-item-store,
.item-title-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  overflow: hidden;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
}
.faxian-list-item-store {
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  flex-direction: row;
  position: relative;
  height: 42px;
}
.item-store-logo {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 40px;
}
.item-title-box {
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
  padding-left: 10px;
}
.item-store-sub-title,
.item-store-title {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-store-title {
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
}
.item-store-sub-title {
  height: 15px;
  font-size: 12px;
  line-height: 15px;
  color: #999;
  margin-top: 3px;
}
.store-focus-btn,
.store-focus-btn:hover {
  background: #47b34f;
}
.store-focus-btn {
  width: 66px;
  height: 26px;
  font-size: 12px;
  color: #fff;
  line-height: 23px;
  text-align: center;
  border-radius: 13px;
}
.faxian-list-item-imgs-box {
  display: block;
  margin-top: 10px;
}
.faxian-list-item-imgs,
.faxian-list-item-imgs-pic {
  width: 100%;
  border-radius: 6px;
}
.faxian-list-item-imgs {
  display: block;
  margin-bottom: 2px;
}
.faxian-list-item-imgs,
.faxian-list-item-imgs-pic {
  width: 100%;
  border-radius: 6px;
}
</style>