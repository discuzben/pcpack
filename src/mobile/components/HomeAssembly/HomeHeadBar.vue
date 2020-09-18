<!-- 头部内容 -->
<template>
  <div id="HomeHeadBar">
    <div class="item-head">
      <i class="el-icon-s-unfold"></i>
      <img src="../../../assets/logo-black.png" alt />
    </div>
    <div class="item-cover">
      <h4>百万专业开发资源，就在开元众包</h4>
      <h5>350万+活跃开发者 海量数据行为数据智能匹配</h5>
      <el-button class="btn" type="primary" round>免费发布需求</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeHeadBar",
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
#HomeHeadBar {
  widows: 100%;
  height: 12rem;
  color: snow;
  .item-head {
    padding: 10px;
    background: #000000;
    font-size: 26px;
    width: 100%;
    height: 2.5rem;
    img {
      width: 5.35rem;
      height: 1.1rem;
    }
  }
  .item-cover {
    background-image: url("../../../assets/home/home-banner.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    h4{
      // padding: 2rem 0;
      font-size:1.2rem;
    }
    h4{
      padding: 2rem 0 2rem 0;
      font-size:0.9rem;
    }
    .btn{
      position: absolute;
      bottom: 1.5rem;
      left: 36%;
    }
  }
}
</style>