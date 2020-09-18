<template>
  <div class="box">
    <div class="container">
        <img src="../../assets/img/empty.png" alt="">
        <p class="text">暂无数据</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "noData"
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  margin-top: 20px;
  .container {
    padding-top: 110px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
      display: block;
      width: 50%;
    }
    .text {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      margin-top: 16px;
    }
  }
}
</style>
