<template>
  <div class="company">
    <div class="title">
      <span>积分记录</span>
    </div>
    <div class="content">
      <img src="../../assets/empty.png" alt="">
      <h3>暂无数据，快去做任务赚取积分吧！</h3>
      <el-button class="submit" type="primary" round>做任务，赚积分</el-button>
    </div>
  </div>
</template>

<script>
  export default{
    name: "pointslog",
    data() {
      return{

      }
    }
  }
</script>

<style lang="less" scoped>
  .company{
    .title{
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #EFEFEF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      box-sizing: border-box;
      .span{
        font-size: 16px;
        color: #232323;
        font-weight: 700;
      }
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3{
        margin-top: 20px;
      }
      .submit{
        width: 150px;
        margin-top: 20px;
      }
    }
  }
</style>
