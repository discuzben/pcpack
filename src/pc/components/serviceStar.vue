<template>
  <div class="panel service-star">
    <div class="service-star__top">
      <img src="../../assets/img/service.png" alt="" />
      <span>金牌会员专享</span>
    </div>
    <!-- 列表 -->
    <div class="service-star__bot">
      <!-- item -->
      <router-link
        tag="a"
        class="_flex"
        to="/"
        v-for="item in serveStar"
        :key="item.id"
      >
        <div class="bot__item">
          <!-- <img src="../../assets/img/loge.png" alt="" /> -->
          <img :src="item.shop_pic" alt="" />
          <div class="bot__item__right">
            <h5>{{ item.shop_name }}</h5>
            <div class="right__text">
              <span class="right__text__province">{{ item.city_name }}</span>
              <span class="right__text__icon">|</span>
              <span class="right__text__type">企业</span>
              <span class="right__text__icon">|</span>
              <a style="color: rgb(32, 147, 255)">更多...</a>
            </div>
          </div>
          <div class="bot__item__skill">
            <span v-for="(cateName, index) in item.cate_name" :key="index">{{
              cateName
            }}</span>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 按钮 -->
    <div style="padding-bottom: 16px;">
      <router-link tag="a" to="/" class="service-star__btn"
        >更多服务之星</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "serviceStar",
  data() {
    return {
      serveStar: [] //服务之星列表
    };
  },
  methods() {},
  created() {
    // //获取服务之星
    this.$axios.post("getServeStar").then(res => {
      console.log(res);
      if (res.data.code == 1000) {
        let shopList = res.data.data.data;
        // shopList.length=5
        this.serveStar = shopList;
      }
    });
  }
};
</script>
<style lang="less" scoped>
// 服务之星
.service-star {
  width: 100%;
  background-color: #fff;
  padding: 20px 16px 0;
  margin-top: 20px;
  box-sizing: border-box;
  .service-star__top {
    margin-bottom: 30px;
    height: 24px;
    position: relative;
    img {
      width: 87px;
      height: 24px;
    }
    span {
      font-size: 12px;
      color: #8c8c8c;
      display: inline-block;
      position: absolute;
      right: 0;
      bottom: -3px;
    }
  }
  .service-star__bot {
    .bot__item {
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
      .bot__item__right {
        flex-grow: 1;
        padding-left: 12px;
        h5 {
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 130px;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.85);
          letter-spacing: 0.1px;
          margin: 0;
          padding-bottom: 5px;
        }
        .right__text {
          font-size: 14px;
          color: #8c8c8c;
          display: flex;
          align-items: center;
          align-content: center;
          .right__text__province {
            min-width: 30px;
            max-width: 44px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .right__text__type {
            width: 32px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .right__text__icon {
            color: #ededed !important;
            margin: 0 8px;
            font-weight: 700;
            vertical-align: top;
          }
          a {
            display: inline-block;
            vertical-align: top;
            font-weight: 400;
            color: #2093ff;
            padding-left: 5px;
          }
        }
      }
    }
    .bot__item__skill {
      padding-top: 16px;
      margin-right: -10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      span {
        width: 74px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        background-color: #f1f3f4;
        color: #8c8c8c;
        font-size: 13px;
        border-radius: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .service-star__btn {
    display: block;
    background-color: #1890ff;
    width: 100%;
    height: 34px;
    text-align: center;
    color: #fff;
    line-height: 34px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 3px;
  }
}
</style>
