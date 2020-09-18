<template>
  <div class="company">
    <div class="title">
      <span>基本信息</span>
      <el-button plain icon="el-icon-edit-outline">编辑</el-button>
    </div>
    <div class="content">
      <div class="infolist">
        <div class="infoitem" v-for="item in infolist">
          <span class="attr">{{item.attr}}:</span>
          <span class="info">{{item.info}}</span>
        </div>
      </div>
      <el-avatar :size="avatarSize" :src="avatarSrc"></el-avatar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "company",
    data() {
      return {
        infolist: [{
            attr: '昵称',
            info: 'asdf'
          },
          {
            attr: '公司名称',
            info: 'asdf'
          },
          {
            attr: '所在地',
            info: 'asdf'
          },
          {
            attr: '企业规模',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          },
          {
            attr: '成立时间',
            info: 'asdf'
          }
        ],
        avatarSrc: require('../../assets/avatar_default.gif'),
        avatarSize: 'large'
      }
    }
  }
</script>

<style lang="less" scoped>
  .company {
    .title {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #EFEFEF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      box-sizing: border-box;

      .span {
        font-size: 16px;
        color: #232323;
        font-weight: 700;
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      box-sizing: border-box;
      .infolist {
        display: flex;
        flex-direction: column;
        width: 50%;

        .infoitem {
          display: flex;
          align-items: center;
          text-indent: 20px;
          font-size: 14px;
          min-width: 100px;
          text-align: right;
          margin-right: 8px;
          color: #666;
          margin-bottom: 20px;

          .attr {
            min-width: 80px;
            text-align: right;
          }
        }
      }
      .el-avatar--large {
        width: 180px;
        height: 180px;
      }

    }
  }
</style>
