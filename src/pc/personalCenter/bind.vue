<template>
  <div class="company">
    <div class="title">
      <span>账户绑定</span>
      <div class="tips">绑定您的常用手机、邮箱，时刻掌握交易动态提醒、短信验证支付等，保护您的账户、资金安全</div>
    </div>
    <div class="list">
      <div class="item" v-if="phone">
        <div class="left">
          <span class="name">手机号码:</span>
          <span class="content">{{phone}}</span>
        </div>
        <div class="right">
          <el-button class="btn" type="primary" round>变更</el-button>
        </div>
      </div>
      <div class="item" v-else>
        <div class="left">
          <span class="name">手机号码:</span>
          <span class="content red">未绑定</span>
        </div>
        <div class="right">
          <el-button class="btn" type="primary" round>绑定</el-button>
        </div>
      </div>
      <div class="item" v-if="email">
        <div class="left">
          <span class="name">电子邮箱:</span>
          <span class="content">{{email}}</span>
        </div>
        <div class="right">
          <el-button class="btn" type="primary" round>变更</el-button>
        </div>
      </div>
      <div class="item" v-else>
        <div class="left">
          <span class="name">电子邮箱:</span>
          <span class="content red">未绑定</span>
        </div>
        <div class="right">
          <el-button class="btn" type="primary" round>绑定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "bind",
    data() {
      return{
        phone: '177****0581',
        email: ''
      }
    }
  }
</script>

<style lang="less">
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
      .tips{
        font-style: normal;
        font-size: 14px;
        color: #999999;
      }
    }
    .list{
        display: flex;
        flex-direction: column;
        padding: 15px;
        box-sizing: border-box;
        .item{
          width: 100%;
          height: 60px;
          border-bottom: 1px solid #EFF3F5;
          display: flex;
          justify-content: space-between;
          line-height: 60px;
          .left{
            display: flex;
            align-items: center;
            .name{
              display: flex;
              align-items: center;
              margin-right: 15px;
              font-style: normal;
              font-size: 15px;
              color: #666;
            }
            .content{
              color: #151519;
              font-weight: 700;
              font-size: 15px;
            }
            .red{
              color: red;
            }
          }
          .right{
            .btn{
              width: 100px;
            }
          }
        }
    }
  }
</style>
