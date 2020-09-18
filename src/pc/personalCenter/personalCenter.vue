<template>
  <div class="personalCenter">
    <Header :bg="'black'" />
    <div class="topinfo">
      <div class="topinfocon">
        <h2>个人中心</h2>
        <div class="here">
          <div class="tip">再这里，可以集中管理维护您的用户、账号等信息</div>
          <div class="btns">
            <div class="title">账号身份：</div>
            <div class="btn">企业 <span>立即认证</span></div>
            <div class="title phone">手机：</div>
            <div class="btn"><span>已认证</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              mode="vertical"
              :default-openeds="defalultOpened"
              :unique-opened="uniqueOpened">
              <el-submenu index="1">
                <template slot="title">
                  资料设置
                </template>
                <el-menu-item-group>
                  <el-menu-item :class="index=='1-1'?'is-active':''" index="1-1" @click="handleOpen($event)">企业信息</el-menu-item>
                  <el-menu-item index="1-2" @click="handleOpen($event)">企业认证</el-menu-item>
                  <el-menu-item index="1-3" @click="handleOpen($event)">账户绑定</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  我的积分
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1" @click="handleOpen($event)">积分任务</el-menu-item>
                  <el-menu-item index="2-2" @click="handleOpen($event)">积分记录</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
        <div class="right-con">
          <company v-if="index=='1-1'"/>
          <companyCertification v-if="index=='1-2'"/>
          <bind v-if="index=='1-3'"/>
          <pointstask v-if="index=='2-1'"/>
          <pointslog v-if="index=='2-2'"/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/pc/components/Header";
  import Footer from "@/pc/components/Footer";
  import company from '@/pc/personalCenter/company'
  import bind from '@/pc/personalCenter/bind'
  import companyCertification from '@/pc/personalCenter/companyCertification'
  import pointslog from '@/pc/personalCenter/pointslog'
  import pointstask from '@/pc/personalCenter/pointstask'
   export default{
    name: "personalCenter",
    components: {
      Header,
      Footer,
      company,
      bind,
      companyCertification,
      pointslog,
      pointstask
    },
    data() {
      return{
        tabPosition: 'left',
        defalultOpened: ['1','2'],
        uniqueOpened: false,
        index: '1-1',
      }
    },
     methods: {
          handleOpen(e) {
            this.index = e.index;
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
   }
</script>

<style lang="less" scoped>
  .personalCenter{
    .topinfo{
      width: 100%;
      height: 80px;
      margin-top: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 5px 1px #efebeb;
      .topinfocon{
        width: 1150px;
        .here{
          display: flex;
          justify-content: space-between;
          color: #999;
          font-size: 14px;
          margin-top: 10px;
          .btns{
            display: flex;
            .phone{
              margin-left: 20px;
            }
            .btn{
              color: #FF6600;
            }
          }
        }
      }
    }
    .content{
        margin-top: 60px;
        display: flex;
        justify-content: center;
      .container{
        width: 1150px;
        display: flex;
        .tac{
          width: 15%;
          margin-right: 2%;
          box-shadow: 0 0 5px 1px #efebeb;
          .el-col-12{
            width: 100%;
          }
          .el-submenu .el-menu-item {
            min-width: 0;
          }
          .el-menu {
            border-right: 0;
          }
        }
        .right-con{
          width: 83%;
          box-shadow: 0 0 5px 1px #efebeb;
        }
      }
    }
  }
</style>
