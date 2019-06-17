<template>
  <ul>
    <li class="pos-cart">
      <a class="contsty"
      >
        <div class="title" style="line-height:19px;">
          <p>到家菜市-市桥菜市场</p>
        </div>
        <div class="content-list flex">
          <ul class="productItem flex-item">
            <li class="product">
              <img
                class="pic"
                src="https://img10.360buyimg.com/n7//jfs/t4672/238/819529471/24024/9160ce2/58d4df3bN09476056.jpg"
                style="background: none;"
              >
              <span class="text">¥15.8</span>
            </li>
          </ul>
        </div>
      </a>
    </li>
    <li class="pos-cart">
      <a class="contsty">
        <div class="title">
          <p>海王星辰广州东怡新区店</p>
        </div>
        <div class="content-list flex">
          <ul class="productItem flex-item">
            <li class="product">
              <img
                class="pic"
                src="https://img10.360buyimg.com/n7//jfs/t9220/210/1395197243/47176/5aed9696/59b89f50N362ec516.jpg"
                style="background: none;"
              >
              <span class="text">¥19.5</span>
            </li>
          </ul>
        </div>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.pos-cart {
    position: relative;
    margin: 10px 6px 7px;
    text-align: left;
    height: 141px;
    overflow: hidden;
    padding: 3px 4% 10px 1.6%;
    background: url(//static-o2o.360buyimg.com/daojia/react/images/gc.16e813d0.png) 0 0 no-repeat;
    background-size: 100% 154px;
}
.pos-cart .contsty {
    overflow: hidden;
    padding-left: 2.4%;
    float: left;
    width: 97.6%;
}
.pos-cart .title {
    display: block;
    position: relative;
    z-index: 3;
    line-height: 44px;
    height: 147px;
    line-height: 19px;
    margin-bottom: -103px;
    color: #333;
    font-size: 15px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWBAMAAAAC47AUAAAABGdBT…qmgQJBYBokAKJBAsg0TByqDqYPag7MXKg9MHth7oC5C+pOAJwWEz2YTmZYAAAAAElFTkSuQmCC) right 17px no-repeat;
    background-size: 7px 11px;
}
p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.pos-cart .content-list {
    position: relative;
    z-index: 2;
    height: 92px;
    padding: 1px 0 0;
}
.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.productItem {
    padding-right: 30px;
}
.flex-item {
    overflow: hidden;
}
.product, .product .pic {
    vertical-align: top;
    width: 52px;
}
.product {
    position: relative;
    display: inline-block;
    height: 83px;
    // margin-top: 14px;
    padding-right: 32px;
    margin-right: -22px;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    color: #333;
}
.product .pic {
    height: 52px;
    border-radius: 5px;
}
.product, .product .pic {
    vertical-align: top;
    width: 52px;
}
.product span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

















</style>
